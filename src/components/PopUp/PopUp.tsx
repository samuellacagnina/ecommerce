import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

export const PopUp = ({ setShowPopup, showPopup }: any) => {
  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 10000);
  }, [setShowPopup]);

  if (!showPopup) {
    return null;
  }

  const closePopUp = () => {
    setShowPopup(false);
  };

  const popUp = document.getElementById('portal') as Element;

  return ReactDOM.createPortal(
    <div className="border border-red-700">
      <h1>CIAO</h1>
      <button onClick={closePopUp}>Close</button>
    </div>,
    popUp
  );
};
