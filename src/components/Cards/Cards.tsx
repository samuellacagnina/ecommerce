import React from 'react';
import CardsProps from './Cards.interface';

function Cards({ title, subTitle }: CardsProps) {
  return (
    <div>
      <p>{title}</p>
      <p>{subTitle}</p>
    </div>
  );
}

export default Cards;
