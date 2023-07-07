import React from 'react';
import CardsProps from './Cards.interface';

function Cards({ title, subTitle }: CardsProps) {
  return (
    <div className="border border-red-400 rounded-md">
      <p>{title}</p>
      <p>{subTitle}</p>
    </div>
  );
}

export default Cards;
