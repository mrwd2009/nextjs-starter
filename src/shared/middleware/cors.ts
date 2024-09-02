import { NextRequest, NextResponse } from 'next/server';
import appProperties from '../config/app-properties';
import { NextHandler } from './middleware-utils';

export default async function cors(request: NextRequest, next: NextHandler) {
  const corsOptions = {
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
  const isPreflight = request.method === 'OPTIONS';
  const origin = request.headers.get('Origin');

  const isAllowedOrigin = () => {
    if (!origin) {
      return false;
    }
    const url = new URL(origin);
    return appProperties.allowedDomains.some((domain) =>
      url.hostname.endsWith(domain),
    );
  };

  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin() ? { 'Access-Control-Allow-Origin': origin! } : {}),
      ...corsOptions,
    };
    return NextResponse.json(
      {},
      {
        headers: preflightHeaders,
      },
    );
  }

  if (origin && !isAllowedOrigin()) {
    return NextResponse.json(
      {
        error: {
          message: `Origin(${origin}) is not allowed to access current service.`,
        },
      },
      {
        status: 403,
      },
    );
  }
  const response = await next(request);
  if (origin) {
    response.headers.set('Access-Control-Allow-Origin', origin!);
    Object.entries(corsOptions).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
  }

  return response;
}
