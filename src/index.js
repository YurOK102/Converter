import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { theme } from './theme';
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
