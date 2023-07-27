import React from 'react'
import { useState,useEffect } from 'react';
import CardsFooterProps from '../CardsFooter.interaface';

export const LikeCardsFooter = ({icon,id}:CardsFooterProps) => {
    const [vote, setVote] = useState(0);
    
    useEffect(() => {
        const voteStored = localStorage.getItem(`votes_${id}`);
        if (voteStored) {
          setVote(parseInt(voteStored));
        }
      }, [id]);
    
      useEffect(() => {
        localStorage.setItem(`votes_${id}`, vote.toString());
      }, [vote, id]);


    const incrementVote = () => {
      setVote((vote) => vote + 1);
    };
  
  return (
    <div>
      <button onClick={incrementVote}>{icon}</button>
      <span className="ml-2">{vote}</span>
    </div>
  )
}
