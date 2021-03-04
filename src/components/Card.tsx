import React from 'react';
import { Delete, Edit } from '@material-ui/icons';

import '../styles/card.scss';

interface CardInterface {
  name: string;
  job: string;
  photo: string;
}

const Card: React.FC<CardInterface> = ({ photo, name, job }: CardInterface) => {
  return (
    <article className='people-card col-lg-3'>
      <figure className='people-card__image'>
        <img src={photo} alt={name} />
      </figure>
      <div className='people-card__info'>
        <p className='bold'>{name}</p>
        <p className='light'>{job}</p>
      </div>
      <div className='people-card__action'>
        <Delete />
        <Edit />
      </div>
    </article>
  );
};

export default Card;
