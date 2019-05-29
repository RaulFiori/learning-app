import React from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import Button from './components/Button';
import theme from './theme/theme';
import AppBar from './components/AppBar';

const App = () => (
  <ThemeProvider theme={theme}>
    <AppBar title="Exemplo" />
    <main>
      <div className="App">
        <h1> Hello, World! </h1>
        <p>shiiit</p>
        <Button>olá</Button>
      </div>
    </main>
  </ThemeProvider>
);

export default hot(module)(App);
