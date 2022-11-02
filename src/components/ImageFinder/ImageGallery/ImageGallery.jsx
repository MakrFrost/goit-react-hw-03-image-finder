import React from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
// import css from '.../';

function ImageGallery({ pictures }) {
  return (
    <ul className="image-gallery">
      <ImageGalleryItem picture={pictures} />
    </ul>
  );
}

export default ImageGallery;
