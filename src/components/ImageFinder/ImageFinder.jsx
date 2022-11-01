import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import axios from 'axios';

// import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
// import Modal from './Modal/Modal';
// import Button from './Button/Button';

class ImageFinder extends Component {
  state = {
    name: '',
    page: 1,
  };

  onFormSubmit = value => {
    this.setState({ name: value, page: 1 });
  };

  render() {
    return (
      <section>
        {/* <Loader /> */}
        <Searchbar onSubmit={this.onFormSubmit} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="dark"
        />
        {/* <ImageGallery /> */}
        {/* <ImageGalleryItem /> */}
        {/* <Modal /> */}
        {/* <Button /> */}
      </section>
    );
  }
}

export default ImageFinder;
