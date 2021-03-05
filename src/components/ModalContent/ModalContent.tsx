import React from 'react';
import { Clear, Delete, Edit } from '@material-ui/icons';

import './modal-content.scss';
import { UserResponse } from '../../library';

type ModalContentProps = {
  user: UserResponse;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalContent: React.FC<ModalContentProps> = ({ user, setOpen }) => {
  const handleClick = (): void => {
    setOpen(false);
  };

  return (
    <div className='container modal-container'>
      <section className='modal-content'>
        <figure className='modal-content__panel'>
          <img src={user.url} alt={user.name} />
        </figure>
        <div className='modal-content__panel panel-text'>
          <button className='invisible-button' onClick={handleClick}>
            <Clear />
          </button>
          <div className='main-text-box'>
            <p className='main-text'>{user.name}</p>
            <p>{user.job_role}</p>
          </div>
          <p className='label'>Data de Nascimento</p>
          <p>{user.birthdate}</p>
          <p className='label'>Data de Admissão</p>
          <p>{user.admission_date}</p>
          <p className='label'>Projetos que participou</p>
          <p>{user.project}</p>
          <div className='modal-content__panel__action'>
            <button className='invisible-button'>
              <Delete />
            </button>
            <button className='invisible-button'>
              <Edit />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export { ModalContent };
