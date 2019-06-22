import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-relay';
import { Grid, IconButton, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import withQuery from '../relay/withQuery';
import File from '../components/File';
import FileDialog from '../context-components/FileDialog';

const INITIAL_STATE = {
  dialogOpen: false
};

class Files extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    };
  }

  openDialog = () => this.setState({ dialogOpen: true });

  closeDialog = () => this.setState({ dialogOpen: false });

  render() {
    const { files } = this.props;
    const { dialogOpen } = this.state;
    return (
      <Grid style={{ padding: '16px' }}>
        <FileDialog open={dialogOpen} onClose={this.closeDialog} />
        <Grid
          style={{
            display: 'flex',
            alignItems: ' center',
            justifyContent: 'flex-end',
            marginBottom: '16px'
          }}
        >
          <IconButton onClick={this.openDialog} style={{ fontSize: '1rem' }}>
            <FontAwesomeIcon icon="plus" />
          </IconButton>
          <Button>Ir para Pastas</Button>
        </Grid>
        {files.map(file => (
          <File file={file} key={file.id} />
        ))}
      </Grid>
    );
  }
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
