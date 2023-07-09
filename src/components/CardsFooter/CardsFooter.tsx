import React, { useEffect, useState } from 'react';
import CardsFooterProps from './CardsFooter.interaface';

export const CardsFooter = ({ icon, id }: CardsFooterProps) => {
  const [vote, setVote] = useState(0);

  const incrementVote = () => {
    setVote((vote) => vote + 1);
  };

  useEffect(() => {
    const voteStored = localStorage.getItem(`votes_${id}`);
    console.log(voteStored);
    if (voteStored) {
      setVote(parseInt(voteStored));
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem(`votes_${id}`, vote.toString());
  }, [vote, id]);

  return (
    <div>
      <button onClick={incrementVote}>{icon}</button>
      <span className="ml-2">{vote}</span>
    </div>
  );
};
