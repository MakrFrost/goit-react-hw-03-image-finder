import React, { Component } from 'react';

import API from './API/PixabayApi';
import Searchbar from './Searchbar/Searchbar';
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
      <section className="app">
        <Searchbar onSubmit={this.onFormSubmit} />
        <API toFind={this.state.toFind} page={this.state.page} />

        {/* <ImageGallery /> */}
        {/* <ImageGalleryItem /> */}
        {/* <Modal /> */}
        {/* <Button /> */}
      </section>
    );
  }
}

export default ImageFinder;
