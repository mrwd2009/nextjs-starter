import KeyGrip from 'keygrip';
import { parse, serialize } from 'cookie';

const keyGripStore: Record<string, KeyGrip> = {};

export const getKeyGrip = (key: string) => {
  if (!keyGripStore[key]) {
    keyGripStore[key] = new KeyGrip(key.split(','), 'sha256', 'base64');
  }
  return keyGripStore[key];
};

export const getSecuredCookieValue = (params: {
  headers: Headers;
  cookieKey: string;
  cookieSecret: string;
}) => {
  const { headers, cookieKey, cookieSecret } = params;
  const cookies = parse(headers.get('cookie') || '');
  const lastIndex = cookies[cookieKey]?.lastIndexOf('.');
  const [token, tokenSig] =
    lastIndex && lastIndex !== -1
      ? [cookies[cookieKey]?.slice(0, lastIndex), cookies[cookieKey]?.slice(lastIndex + 1)]
      : [];
  if (!token || !tokenSig) {
    return null;
  }
  const keyGrip = getKeyGrip(cookieSecret);
  const isValid = keyGrip.verify(token, tokenSig);
  return isValid ? token : null;
};

export const setSecuredCookieValue = (params: {
  headers: Headers;
  cookieKey: string;
  cookieSecret: string;
  value: string;
  secure: boolean;
  maxAge: number;
  path: string;
}) => {
  const { headers, cookieKey, cookieSecret, value, secure, maxAge, path } = params;
  const keyGrip = getKeyGrip(cookieSecret);
  const tokenSig = keyGrip.sign(value);
  headers.append(
    'Set-Cookie',
    serialize(cookieKey, `${value}.${tokenSig}`, {
      httpOnly: true,
      secure,
      maxAge,
      path,
    }),
  );
};
