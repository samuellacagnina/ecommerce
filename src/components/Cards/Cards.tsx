import React, { useState } from 'react';
import CardsProps from './Cards.interface';
import { CardsFooter } from '../CardsFooter/CardsFooter';
import Image from 'next/image';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Cards({ title, url, id,view,handleView }: CardsProps) {

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
};

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div>
      <div
        className="rounded-md relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleView}
      >
        <Image
          src={url}
          alt="image"
          width={500}
          height={500}
        />
        {isHover && (
          <h3 className="absolute inset-0 flex text-white font-bold">
            {title}
          </h3>
        )}
      </div>
      <CardsFooter
        icon={
          <FontAwesomeIcon
            icon={faHeart}
            color="red"
          />
        }
        id={id}
        view={view}
      />
    </div>
  );
}

export default Cards;
