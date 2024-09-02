import { NextRequest } from 'next/server';
import { NextHandler } from './middleware-utils';

export default async function helmet(request: NextRequest, next: NextHandler) {
  const response = await next(request);
  const headers = response.headers;
  headers.set(
    'Content-Security-Policy',
    `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self' 'unsafe-inline' 'unsafe-eval';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests`,
  );
  headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  headers.set('Cross-Origin-Resource-Policy', 'same-origin');
  headers.set('Origin-Agent-Cluster', '?1');
  headers.set('Referrer-Policy', 'no-referrer');
  headers.set(
    'Strict-Transport-Security',
    'max-age=15552000; includeSubDomains',
  );
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-DNS-Prefetch-Control', 'off');
  headers.set('X-Frame-Options', 'SAMEORIGIN');
  headers.set('X-Permitted-Cross-Domain-Policies', 'none');
  headers.set('X-XSS-Protection', '0');
  return response;
}
