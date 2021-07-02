import React from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider } from './src/constants/theme';
import store from './src/redux/store';
import App from './src/app';

export default () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  );
};
