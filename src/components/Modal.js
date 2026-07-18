import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Modal = ({ close, children }) => {
  return (
    <div className="overlay">
      <div className="content">
        <button onClick={close} className="modal-close" aria-label="Close dialog"><AiOutlineCloseCircle /></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
