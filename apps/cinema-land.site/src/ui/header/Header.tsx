import { ClapperboardPlayIcon } from '@icons';
import ColorThemeButton from './ColorThemeButton';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900 flex justify-between px-4 py-2">
      <Link className="flex items-center" href="/">
        <ClapperboardPlayIcon color="text-blue-600" height={32} width={32} />
        <span className="ml-3 text-2xl dark:text-white">Cinema Land</span>
      </Link>
      <ColorThemeButton />
    </header>
  );
}
