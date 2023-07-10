import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardsFooterProps from '../CardsFooter.interaface'
import React, { useState } from 'react'

export const ViewCardsFooter = ({ view }:CardsFooterProps) => {


  return (
    <div>
        <FontAwesomeIcon icon={faEye} />
        <span className="ml-4">{view}</span>
    </div>
  )
}

