import React from 'react';
import './Modal.css';

const Modal = ({ isVisible }) => {
  return (
    <div className={`Modal ${isVisible ? 'show' : 'hide'}`}>
      <h2 className='ModalTitle'>Gracias por contactarte con Digital <span>Rain</span></h2>
      <h3 className='ModalTitle'>Nos contactaremos a la brevedad!</h3>
    </div>
  );
};

export default Modal;
