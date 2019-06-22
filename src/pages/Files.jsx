import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-relay';
import { Grid } from '@material-ui/core';
import withQuery from '../relay/withQuery';
import File from '../components/File';

function Files(props) {
  const { files } = props;
  return (
    <Grid style={{ padding: '16px' }}>
      {files.map(file => (
        <File file={file} key={file.id} />
      ))}
    </Grid>
  );
}

Files.propTypes = {
  files: PropTypes.array.isRequired
};

export default withQuery(Files, {
  query: graphql`
    query FilesQuery {
      files {
        id
        ...File_file
      }
    }
  `
});
