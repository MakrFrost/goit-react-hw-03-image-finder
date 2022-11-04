import React from 'react';

function Modal({ modalClick, largeUrl }) {
  return (
    <div className="overlay">
      <div className="modal">
        <img onClick={modalClick} src={largeUrl} alt="img" />
      </div>
    </div>
  );
}

export default Modal;
