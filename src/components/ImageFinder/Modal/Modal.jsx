import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.modalClick();
    }
  };
  onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.modalClick();
    }
  };

  render() {
    const { modalClick, largeImg } = this.props;

    return createPortal(
      <div className="overlay" onClick={this.onOverlayClick}>
        <div className="modal">
          <img onClick={modalClick} src={largeImg} alt="img" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
