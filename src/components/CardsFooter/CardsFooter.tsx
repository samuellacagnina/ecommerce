import React from 'react';
import CardsFooterProps from './CardsFooter.interaface';
import { useState } from 'react';

export const CardsFooter = ({ icon, votes }: CardsFooterProps) => {
  const [vote, setVote] = useState(0);

  const incrementVote = () => {
    setVote((vote) => vote + 1);
  };

  return (
    <div>
      <button onClick={incrementVote}>{icon}</button>
      <span className="ml-2">{vote}</span>
    </div>
  );
};
