import { cookies } from 'next/headers';
import './global.css';
import StoreProvider from './StoreProvider';
import { Body, Header } from '@ui';
import { getInitialThemeValue } from '@utils';

export const metadata = {
  title: 'Cinema Land',
  description: 'Cinema Land. Video portal',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();

  return (
    <html>
      <StoreProvider theme={getInitialThemeValue(cookieStore)}>
        <Body>
          <Header />
          {children}
        </Body>
      </StoreProvider>
    </html>
  );
}
