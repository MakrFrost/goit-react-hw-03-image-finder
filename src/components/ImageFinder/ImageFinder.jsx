import React, { Component } from 'react';

import API from './API/PixabayApi';
// import { Loader } from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
// import Modal from './Modal/Modal';
// import Button from './Button/Button';

class ImageFinder extends Component {
  state = {
    toFind: '',
    page: 1,
  };

  onFormSubmit = value => {
    this.setState({ toFind: value, page: 1 });
  };

  render() {
    return (
      <section>
        <API toFind={this.state.toFind} />
        <Searchbar onSubmit={this.onFormSubmit} />
        {/* <Loader /> */}

        {/* <ImageGallery /> */}
        {/* <ImageGalleryItem /> */}
        {/* <Modal /> */}
        {/* <Button /> */}
      </section>
    );
  }
}

export default ImageFinder;
