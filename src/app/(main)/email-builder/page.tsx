import ThemeSwitch from '@/client/layouts/shared/theme/theme-switch';
import ClientContent from './client-content';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="text-3xl text-black dark:text-white">
      <ClientContent />
      Email Builder
      <ThemeSwitch />
      <div>
        <h1>Email Template</h1>
        <Link href="/email-template">Go to template</Link>
      </div>
    </div>
  );
}
