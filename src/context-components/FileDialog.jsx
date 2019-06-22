import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  DialogTitle
} from '@material-ui/core';
import Title from '../components/Title';

const INITIAL_STATE = {
  name: '',
  docType: ''
};

class FileDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    };
  }

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
        <DialogContent>
          <form>
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
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.resetAndClose}>Cancelar</Button>
          <Button variant="contained" color="primary">
            Criar
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

FileDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default FileDialog;
