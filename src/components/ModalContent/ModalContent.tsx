import React from 'react';
import { Clear, Delete, Edit } from '@material-ui/icons';

import './modal-content.scss';

const ModalContent: React.FC<any> = () => {
  return (
    <div className='container modal-container'>
      <section className='modal-content'>
        <figure className='modal-content__panel'>
          <img
            src='https://avatars.githubusercontent.com/u/36977340?s=460&amp;u=68f8ae53a9d8c35df0c3a1343ec9e46f78ea6ad9&amp;v=4'
            alt=''
          />
        </figure>
        <div className='modal-content__panel panel-text'>
          <button className='invisible-button'>
            <Clear />
          </button>
          <div className='main-text-box'>
            <p className='main-text'>name</p>
            <p>job role</p>
          </div>
          <p className='label'>idade</p>
          <p>lorem ipsum</p>
          <p className='label'>tempo de empresa</p>
          <p>lorem ipsum</p>
          <p className='label'>projetos que participou</p>
          <p>Lorem, ipsum.</p>
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
