'use client';

import { useAppSelector } from '@lib/hooks';

export function Body({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector((state) => state.theme);

  return (
    <body
      data-theme={theme.value}
      className="bg-white dark:bg-gray-900 max-w-(--page-width) m-auto"
    >
      {children}
    </body>
  );
}
