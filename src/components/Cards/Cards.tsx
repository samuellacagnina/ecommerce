import React, { useState } from 'react';
import CardsProps from './Cards.interface';
import { CardsFooter } from '../CardsFooter/CardsFooter';

import Image from 'next/image';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Cards({ title, url, id }: CardsProps) {
  const [isHover, setIsHover] = useState(false);
  const handleHover = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div>
      <div
        className="border border-red-400 rounded-md"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={url}
          alt="image"
          width={500}
          height={500}
        />
        <div className="card-content">
          {isHover ? (
            <div className="hover-content">
              <h3>{title}</h3>
            </div>
          ) : null}
        </div>
      </div>
      <CardsFooter
        icon={
          <FontAwesomeIcon
            icon={faHeart}
            color="red"
          />
        }
      />
    </div>
  );
}

export default Cards;
