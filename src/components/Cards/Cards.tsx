import React from 'react';
import CardsProps from './Cards.interface';

function Cards({ title, subTitle, userId,id }: CardsProps) {
  return (
    <div key={id} className="border border-red-400 ">
      <p>{userId}</p>
      <p>{title}</p>
      <p>{subTitle}</p>
    </div>
  );
}

export default Cards;
