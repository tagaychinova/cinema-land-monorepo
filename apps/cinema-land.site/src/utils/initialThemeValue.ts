import { ThemeValue } from '@types';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

const THEME_COOKIE_KEY = 'theme';

export const getInitialThemeValue = (cookieStore: ReadonlyRequestCookies) => {
  const themeValue = cookieStore.get(THEME_COOKIE_KEY)?.value;
  const theme: ThemeValue = themeValue === 'dark' ? themeValue : 'light';
  return theme;
};

export const setInitialThemeValue = (theme: ThemeValue) => {
  document.cookie = `${THEME_COOKIE_KEY}=${theme}`;
};
