import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer, graphql } from 'react-relay';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/styles';
import commitMutation from '../relay/commitMutation';

const styles = ({ spacing }) => ({
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  card: {
    margin: `${spacing(2)}px 0px`
  },
  button: {
    fontSize: '1rem'
  }
});

const deleteMutation = graphql`
  mutation FileDeleteMutation($fileId: String!) {
    deleteFile(id: $fileId)
  }
`;

const onDelete = fileId => () => {
  commitMutation({
    variables: { fileId },
    mutation: deleteMutation,
    onError: error => {
      console.log('error', error);
    },
    updater: store => {
      const root = store.get('client:root');
      const files = root.getLinkedRecords('files');
      const filteredFiles = files.filter(
        record => record.getDataID() !== fileId
      );
      root.setLinkedRecords(filteredFiles, 'files');
      store.delete(fileId);
    }
  });
};

function File(props) {
  const {
    file: { name, id, createdAt, docType },
    classes: { card, content, button }
  } = props;

  return (
    <Card className={card}>
      <CardContent className={content}>
        <Grid>
          <Typography>{`${name}${docType}`}</Typography>
          <Typography variant="caption">{`Criado: ${createdAt}`}</Typography>
        </Grid>
        <Grid>
          <IconButton className={button}>
            <FontAwesomeIcon icon="edit" />
          </IconButton>
          <IconButton onClick={onDelete(id)} className={button}>
            <FontAwesomeIcon icon="trash" />
          </IconButton>
        </Grid>
      </CardContent>
    </Card>
  );
}

File.propTypes = {
  file: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    docType: PropTypes.string.isRequired
  }).isRequired,
  classes: PropTypes.shape({
    card: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
};

const fragment = createFragmentContainer(File, {
  file: graphql`
    fragment File_file on File {
      id
      name
      docType
      createdAt
    }
  `
});

export default withStyles(styles)(fragment);
