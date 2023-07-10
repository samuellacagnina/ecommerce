import React, { useEffect, useState } from 'react';
import CardsFooterProps from './CardsFooter.interaface';
import { LikeCardsFooter } from './LikeCardsFooter/LikeCardsFooter';
import { ViewCardsFooter } from './ViewCardsFooter/VIewCardsFooter';


export const CardsFooter = ({ icon, id, view }: CardsFooterProps) => {

 return (
    <div className="flex">
      <LikeCardsFooter icon={icon} id={id} />
      <ViewCardsFooter  view={view}/>
    </div>
  );
};
