import React from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer } from 'react-relay';
import environment from './Environment';

export default (WrappedComponent, config) => {
  const { variables, query } = config;
  const hocComponent = ({ ...wrapperProps }) => (
    <QueryRenderer
      query={query}
      variables={variables}
      environment={environment}
      render={({ error, props }) => {
        if (error) {
          console.log(error);
          return <div>Erro!</div>;
        }
        if (props) {
          return <WrappedComponent {...wrapperProps} {...props} />;
        }
        return <div>Carregando...</div>;
      }}
    />
  );

  hocComponent.propTypes = {};

  return hocComponent;
};
