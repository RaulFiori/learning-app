import React from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faEdit,
  faFile,
  faTrash,
  faPlus
} from '@fortawesome/free-solid-svg-icons';

import { grey } from '@material-ui/core/colors';
import theme from './theme/theme';
import AppBar from './components/AppBar';
import Files from './pages/Files';
import Folders from './pages/Folders';

library.add(faEdit, faFile, faTrash, faPlus);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar title="Meu Dropbox" />
      <main
        style={{
          marginTop: '64px',
          backgroundColor: grey[200]
        }}
      >
        <Router>
          <Route path="/" exact component={Files} />
          <Route path="/folders" component={Folders} />
        </Router>
      </main>
    </ThemeProvider>
  );
};

export default hot(module)(App);
