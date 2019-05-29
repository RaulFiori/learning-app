import React from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from '@material-ui/styles';

import { Typography } from '@material-ui/core';
// import Button from './components/Button';
import theme from './theme/theme';
import AppBar from './components/AppBar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar title="Title" />
      <main
        style={{
          marginTop: '64px'
        }}
      >
        <Typography align="center">hello</Typography>
      </main>
    </ThemeProvider>
  );
};

export default hot(module)(App);
