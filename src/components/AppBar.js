import React from 'react';
import { AppBar as MuiBar, withStyles } from '@material-ui/core';
import Title from './Title';

const styles = theme => ({
  appBar: {
    padding: theme.spacing.unit
  }
});


@withStyles(styles)
const AppBar = props => {
  const { title, classes } = props;
  return (
    <MuiBar position="fixed">
      <Title>{title}</Title>
    </MuiBar>
  );
};

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default AppBar;
