import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

export const ArrowUp = () => {
  const ScrollTop = () => {
    window.scrollTo({top:0, behavior:'smooth'})
  }
  return (
    <div className="flex justify-end cursor-pointer" onClick={ScrollTop}><FontAwesomeIcon style={{height:'2rem'}} icon={faArrowUpLong} /></div>
  )
}
