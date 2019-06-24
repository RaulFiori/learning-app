import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-relay';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import withQuery from '../relay/withQuery';

function Folders(props) {
  const { folders } = props;
  return (
    <Grid style={{ padding: '16px' }}>
      {folders.map(({ id, name, createdAt }) => (
        <Card style={{ margin: '16px 0px' }} key={id}>
          <CardContent>
            <Typography>{name}</Typography>
            <Typography>{createdAt}</Typography>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
}

Folders.propTypes = {
  folders: PropTypes.array.isRequired
};

export default withQuery(Folders, {
  query: graphql`
    query FoldersQuery {
      folders {
        id
        name
        createdAt
      }
    }
  `
});
