import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const Title = props => {
  const { children, ...other } = props;
  return (
    <Typography {...other} variant="h6">
      {children}
    </Typography>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired
};

export default Title;
