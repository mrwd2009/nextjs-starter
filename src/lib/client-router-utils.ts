import { useRouter } from 'next/navigation';

let _router: ReturnType<typeof useRouter> | null = null;
export const useClientRouterUtilsInitializer = () => {
  const router = useRouter();
  _router = router;
};

export const getClientRouter = () => {
  return _router!;
};
