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
import { APIService } from '../../library';

interface ActionButtonProps {
  action: 'delete' | 'edit';
  id: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  action,
  id,
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
        <Link to={`/user/${id}/edit`}>
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
            className={'p-3'}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <DialogTitle className={'p-3 mx-3'}>{'Excluir Naver'}</DialogTitle>
            <DialogContent className={'p-3 mx-3'}>
              <DialogContentText className={'px-2'}>
                Tem certeza que deseja excluir este Naver?
              </DialogContentText>
            </DialogContent>
            <DialogActions className={'mx-3 p-3'}>
              <Button
                style={{ backgroundColor: '#fff', color: '#000' }}
                className={'nave-button'}
                onClick={handleClose}
                color='primary'
              >
                Cancelar
              </Button>
              <Button
                className={'nave-button'}
                onClick={() => {
                  try {
                    APIService.deleteUser(id);
                  } catch (e) {
                    console.log('error', e);
                  } finally {
                    handleClose();
                  }
                }}
                color='primary'
                autoFocus
              >
                Excluir
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      );
  }
};

export { ActionButton };
