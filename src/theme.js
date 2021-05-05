/* eslint-disable import/prefer-default-export */
import { createMuiTheme } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

import CirceWoff2 from './fonts/Circe-Regular.woff2';

const circe = {
  fontFamily: 'Circe',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Circe'),
    local('Circe-Regular'),
    url(${CirceWoff2}) format('woff')
  `,
};

const breakpoints = createBreakpoints({
  // брекпоинты xs: false, sm: false, md: false, lg: false, xl: false, НЕ используются в проекте
  // тем не менее их нужно прописать и установить false, иначе на хроме 88 версии,
  // а может быть еще где-то, проект выдает ошибку
  // Failed to execute 'px' on 'CSS': The provided double value is non-finite
  values: {
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    bp_320: 0,
    bp_414: 414,
    bp_768: 768,
    bp_1024: 1024,
    bp_1280: 1280,
    bp_1366: 1366,
    bp_1600: 1600,
    bp_1900: 1900,
  },
});

const palette = {
  primary: {
    main: '#000',
    light: '#ddd',
    dark: '#297ef5',
    very_light: '#ffffff',
    blue: '#00BFFF',
    red: '#FF0000',
  },
  secondary: {
    main: '#EE7233',
    light: '#4FC883',
    dark: '#9A9A9A',
    very_dark: '#898989',
    blue: '#00BFFF',
    red: '#FF0000',
  },
};

export const theme = createMuiTheme({
  palette,

  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [circe],
        body: {
          backgroundColor: '#00BFFF',
          color: palette.primary.main,
          fontSize: null,
          letterSpacing: null,
          lineHeight: null,
        },
        p: {
          margin: '0',
        },
        a: {
          textDecoration: 'none',
          color: '#fff',
        },
        button: {
          cursor: 'pointer',
          padding: '0',
          outline: 'none',
          border: 'none',
        },

        input: {
          fontFamily: 'Circe, sans-serif',
          padding: '0',
          outline: 'none',
          border: 'none',
        },

        select: {
          '-webkit-appearance': 'none',
          '-moz-appearance': 'none',
          appearance: 'none',
          padding: '0',
          outline: 'none',
          border: 'none',
          '&::placeholder': {
            color: '#CCCED7',
          },
          background: 'none',
        },
      },
    },

    MuiButton: {
      outlined: {},
      contained: {
        backgroundColor: palette.primary.red,
        borderColor: palette.primary.blue,
        color: '#fff',
        textTransform: 'none',
        textAlign: 'center',
        '&:hover': {
          backgroundColor: palette.primary.main,
          color: '#fff',
        },
      },
    },
  },
  breakpoints,
});
