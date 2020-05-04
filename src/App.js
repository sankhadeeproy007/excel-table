import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import Layout from './components/Layout/index';
import theme from './theme/index';

import routes from './routes';

export default function AppRouter() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Layout routes={routes} />
      </ThemeProvider>
    </Router>
  );
}
