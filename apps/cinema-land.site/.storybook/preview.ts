import '../src/app/global.css';

import { withThemeByDataAttribute } from '@storybook/addon-themes';

/* snipped for brevity */

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
    attributeName: 'data-theme',
  }),
];
