import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-relay';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  DialogTitle
} from '@material-ui/core';
import Title from '../components/Title';
import commitMutation from '../relay/commitMutation';

const INITIAL_STATE = {
  name: '',
  docType: ''
};

const createMutation = graphql`
  mutation FileDialogCreateMutation($file: FileInput!) {
    createFile(file: $file) {
      id
      ...File_file
    }
  }
`;

const editMutation = graphql`
  mutation FileDialogEditMutation($file: FileInput!) {
    updateFile(file: $file) {
      ...File_file
    }
  }
`;

class FileDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    };
  }

  componentDidUpdate(prevProps) {
    const { file } = this.props;
    const { file: prevFile } = prevProps;

    if (file !== prevFile && !this.isCreation(file)) {
      this.setState({
        name: file.name,
        docType: file.docType
      });
    }
  }

  isCreation = file => {
    return file === null;
  };

  getMutationVaribles = () => {
    const { file } = this.props;
    const { name, docType } = this.state;

    if (this.isCreation(file)) {
      return {
        mutation: createMutation,
        updater: this.updateStore,
        variables: { file: { name, docType } }
      };
    }

    return {
      mutation: editMutation,
      variables: { file: { id: file.id, name, docType } }
    };
  };

  createFile = event => {
    event.preventDefault();

    const mutationVariables = this.getMutationVaribles();

    commitMutation({
      ...mutationVariables,
      onError: error => {
        console.log('error: ', error);
      },
      onCompleted: () => {
        this.resetAndClose();
      }
    });
  };

  updateStore = (store, data) => {
    const {
      createFile: { id }
    } = data;
    const root = store.get('client:root');
    const files = root.getLinkedRecords('files');
    const newFile = store.get(id);

    root.setLinkedRecords([newFile, ...files], 'files');
  };

  resetAndClose = () => {
    const { onClose } = this.props;
    this.setState({ ...INITIAL_STATE });
    onClose();
  };

  onChangeField = field => event =>
    this.setState({ [field]: event.target.value });

  render() {
    const { open, onClose } = this.props;
    const { name, docType } = this.state;
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle disableTypography>
          <Title color="primary">Criar arquivo</Title>
        </DialogTitle>
        <form onSubmit={this.createFile}>
          <DialogContent>
            <TextField
              value={name}
              fullWidth
              placeholder="Nome do arquivo"
              onChange={this.onChangeField('name')}
            />
            <TextField
              value={docType}
              fullWidth
              placeholder="Tipo de arquivo"
              onChange={this.onChangeField('docType')}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.resetAndClose}>Cancelar</Button>
            <Button type="submit" variant="contained" color="primary">
              Criar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}

FileDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  file: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    docType: PropTypes.string.isRequired
  })
};

FileDialog.defaultProps = {
  file: null
};

export default FileDialog;
