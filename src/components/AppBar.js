import React from 'react';
import PropTypes from 'prop-types';
import { AppBar as MuiBar, withStyles } from '@material-ui/core';
import Title from './Title';

const styles = theme => {
  const { spacing } = theme;

  return {
    appBar: {
      padding: spacing(2)
    }
  };
};

const AppBar = props => {
  const {
    title,
    classes: { appBar }
  } = props;

  return (
    <MuiBar className={appBar} position="fixed">
      <Title>{title}</Title>
    </MuiBar>
  );
};

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppBar);
