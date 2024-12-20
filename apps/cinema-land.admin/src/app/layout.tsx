import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});
import './global.css';
import StoreProvider from './StoreProvider';
import BrowserMocks from './BrowserMocks';

export const metadata = {
  title: 'Cinema Land',
  description: 'Generated by create-nx-workspace',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetch('http://localhost:3000/api/movie');
  console.log(await data.json());
  return (
    <html lang="ru">
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <BrowserMocks>
              <StoreProvider>{children}</StoreProvider>
            </BrowserMocks>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
