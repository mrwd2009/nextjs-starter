import { getRouter } from '@/server/infrastructure/nextjs';
import { createRouteContext } from '@/server/infrastructure/nextjs/nextjs-utils';

const router = getRouter();

export async function GET(request: Request) {
  return router.run(request, createRouteContext());
}

export async function POST(request: Request) {
  return router.run(request, createRouteContext());
}

export async function PUT(request: Request) {
  return router.run(request, createRouteContext());
}

export async function DELETE(request: Request) {
  return router.run(request, createRouteContext());
}
