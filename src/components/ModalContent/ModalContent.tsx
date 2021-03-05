import React from 'react';
import { Clear } from '@material-ui/icons';

import './modal-content.scss';
import { ActionButton } from '../ActionButton';
import { APIService } from '../../library';

type ModalContentProps = {
  user_id: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalContent: React.FC<ModalContentProps> = ({
  user_id,
  setOpen,
}: ModalContentProps) => {
  const [user, setUser] = React.useState({
    id: '',
    name: '',
    admission_date: '',
    job_role: '',
    user_id: '',
    project: '',
    birthdate: '',
    url: '',
  });

  React.useEffect(() => {
    APIService.getUser(user_id).then((res) => {
      setUser(res.data);
    });
  }, [user_id]);

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
            <ActionButton action={'delete'} id={user_id} />

            <ActionButton action={'edit'} id={user_id} />
          </div>
        </div>
      </section>
    </div>
  );
};

export { ModalContent };
