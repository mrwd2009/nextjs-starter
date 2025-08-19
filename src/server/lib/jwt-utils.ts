import { SignJWT, CompactEncrypt, compactDecrypt, errors as joseErrors, jwtVerify } from 'jose';
import { createPrivateKey, createPublicKey, KeyObject, createSecretKey } from 'node:crypto';
import dayjs from 'dayjs';
import GatewayError, { ExpiredTokenError } from './error';

export const getJwtTokenSignature = (token?: string | null) => {
  if (!token) {
    return '';
  }
  return token.split('.')[2];
};

const secretStore: Record<string, KeyObject> = {};
const getSecret = (secret: string, isPublic = false, isSymmetric = false) => {
  const field = secret;
  let keyObj = secretStore[field];
  if (keyObj) {
    return keyObj;
  }
  if (isSymmetric) {
    keyObj = createSecretKey(Buffer.from(secret, 'base64'));
  } else {
    keyObj = (isPublic ? createPublicKey : createPrivateKey)(Buffer.from(secret, 'base64'));
  }
  secretStore[field] = keyObj;
  return keyObj;
};

interface TokenParams {
  payload: Record<string, string | number | boolean | string[] | undefined>;
  expireHour: number;
  secret: string;
  issuer: string;
  audience: string;
}
export const createToken = async (params: TokenParams) => {
  const { payload, expireHour, secret, issuer, audience } = params;

  const expiredDate = dayjs.utc().add(expireHour, 'hours');

  if (!secret) {
    throw new GatewayError('JWT secret is required.');
  }

  const signedToken = new SignJWT({
    ...payload,
  });

  signedToken
    .setProtectedHeader({
      alg: 'ES256', // ECDSA algorithm
    })
    .setSubject('partner-portal')
    .setIssuedAt()
    .setIssuer(issuer)
    .setAudience(audience)
    .setExpirationTime(expiredDate.unix());

  // Both Base64 and Base64url
  // so signature includes underscore
  const secretVal = getSecret(secret);
  const createdToken = await signedToken.sign(secretVal);

  return createdToken;
};

interface VerifyParams {
  token: string;
  secret: string;
  issuer: string;
  audience: string;
}
export const verfyToken = async (params: VerifyParams) => {
  const { token, secret, issuer, audience } = params;
  try {
    const { payload } = await jwtVerify(token, getSecret(secret, true), {
      issuer,
      audience,
    });
    return payload;
  } catch (error) {
    if (error instanceof joseErrors.JWTExpired) {
      throw new ExpiredTokenError(error.reason);
    }
    throw error;
  }
};

export const getJwtTokenPlayload = (
  token?: string | null,
): { [key: string]: string | number | boolean | string[] | undefined } => {
  if (!token) {
    return {};
  }
  try {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
  } catch {
    return {};
  }
};

interface EncryptJWEMsgParams {
  secret: string;
  msg: string;
}
const textEncocer = new TextEncoder();
export const encryptJweMsg = async (params: EncryptJWEMsgParams) => {
  const { secret, msg } = params;
  const encryptedMsg = await new CompactEncrypt(textEncocer.encode(msg))
    .setProtectedHeader({
      alg: 'dir',
      enc: 'A256GCM',
    })
    .encrypt(getSecret(secret, false, true));

  return encryptedMsg;
};

interface DecryptJWEMsgParams {
  secret: string;
  encryptedMsg: string;
}
const textDecoder = new TextDecoder();
export const decryptJweMsg = async (params: DecryptJWEMsgParams) => {
  const { secret, encryptedMsg } = params;
  const { plaintext } = await compactDecrypt(encryptedMsg, getSecret(secret, false, true));
  return textDecoder.decode(plaintext);
};
