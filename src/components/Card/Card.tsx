import React from 'react';
import { Modal } from '@material-ui/core';
import { ModalContent } from '../ModalContent';

import './card.scss';
import { ActionButton } from '../ActionButton';

interface CardInterface {
  name: string;
  job: string;
  photo: string;
  id: string;
}

const Card: React.FC<CardInterface> = ({
  photo,
  name,
  job,
  id,
}: CardInterface) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <article className='people-card col-md-3 mb-3'>
        <button className='card-button' onClick={handleOpen}>
          <figure className='people-card__image'>
            <img src={photo} alt={name} />
          </figure>
          <div className='people-card__info'>
            <p>
              <strong>{name}</strong>
            </p>
            <p>{job}</p>
          </div>
        </button>
        <div className='people-card__action'>
          <ActionButton id={id} action={'delete'} />
          <ActionButton id={id} action={'edit'} />
        </div>
      </article>
      <Modal open={open} onClose={handleClose}>
        <ModalContent user_id={id} setOpen={setOpen} />
      </Modal>
    </React.Fragment>
  );
};

export { Card };
