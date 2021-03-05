import React from 'react';
import { Delete, Edit } from '@material-ui/icons';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

interface ActionButtonProps {
  action: 'delete' | 'edit';
}

const ActionButton: React.FC<ActionButtonProps> = ({
  action,
}: ActionButtonProps): JSX.Element => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  switch (action) {
    case 'edit':
      return (
        <Link to={'/user/:id/edit'}>
          <Edit />
        </Link>
      );
    case 'delete':
      return (
        <React.Fragment>
          <Delete onClick={handleClickOpen} />
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <DialogTitle id='alert-dialog-title'>{'Excluir Naver'}</DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                Tem certeza que deseja excluir este Naver?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color='primary'>
                Cancelar
              </Button>
              <Button onClick={handleClose} color='primary' autoFocus>
                Excluir
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      );
  }
};

export { ActionButton };
