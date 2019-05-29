import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@material-ui/core/';

const Button = props => {
  const { children, onClick, className } = props;

  return (
    <MuiButton color="primary" className={className} onClick={onClick}>
      {children}
    </MuiButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
};

Button.defaultProps = {
  onClick: () => {},
  className: ''
};

export default Button;
