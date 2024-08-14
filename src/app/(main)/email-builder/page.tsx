import ThemeSwitch from '@/layouts/shared/theme/theme-switch';
import ClientContent from './client-content';

export default function Page() {
  return (
    <div className="text-3xl text-black dark:text-white">
      <ClientContent />
      Email Builder
      <ThemeSwitch />
    </div>
  );
}
