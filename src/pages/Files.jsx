import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-relay';
import { withRouter } from 'react-router-dom';
import { Grid, IconButton, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import withQuery from '../relay/withQuery';
import File from '../components/File';
import FileDialog from '../context-components/FileDialog';
import requestSubscription from '../relay/requestSubscription';

const INITIAL_STATE = {
  dialogOpen: false,
  selectedFile: null,
};

const subscription = graphql`
  subscription FilesSubscription {
    fileChange {
      fileEdited {
        id
        ...File_file
      }
      fileCreated {
        id
        ...File_file
      }
    }
  }
`;

class Files extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };
  }

  componentDidMount() {
    this.subscription = requestSubscription({
      subscription,
      variables: {},
      updater: (store, data) => {
        const {
          fileChange: { fileCreated },
        } = data;
        if (fileCreated) {
          const fileInStore = store.get(fileCreated.id);
          const root = store.get('client:root');
          const files = root.getLinkedRecords('files');
          root.setLinkedRecords([fileInStore, ...files], 'files');
        }
      },
      onError: error => console.error(error),
      onCompleted: () => console.log('connection ended'),
    });
  }

  componentWillUnmount() {
    this.subscription.dispose();
  }

  onEdit = file => () => {
    this.setState({ selectedFile: file });
    this.openDialog();
  };

  goToFolders = () => {
    const { history } = this.props;
    history.push('/folders');
  };

  openDialog = () => this.setState({ dialogOpen: true });

  closeDialog = () => this.setState({ dialogOpen: false, selectedFile: null });

  render() {
    const { files } = this.props;
    const { dialogOpen, selectedFile } = this.state;

    return (
      <Grid style={{ padding: '16px' }}>
        <FileDialog
          file={selectedFile}
          open={dialogOpen}
          onClose={this.closeDialog}
        />
        <Grid
          style={{
            display: 'flex',
            alignItems: ' center',
            justifyContent: 'flex-end',
            marginBottom: '16px',
          }}
        >
          <IconButton onClick={this.openDialog} style={{ fontSize: '1rem' }}>
            <FontAwesomeIcon icon="plus" />
          </IconButton>
          <Button onClick={this.goToFolders}>Ir para Pastas</Button>
        </Grid>
        {files.map(file => (
          <File file={file} key={file.id} onEdit={this.onEdit} />
        ))}
      </Grid>
    );
  }
}

Files.propTypes = {
  files: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
};

const router = withRouter(Files);

export default withQuery(router, {
  query: graphql`
    query FilesQuery {
      files {
        id
        ...File_file
      }
    }
  `,
});
