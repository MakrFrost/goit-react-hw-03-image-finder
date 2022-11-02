import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ pictures }) {
  return (
    <ul>
      <ImageGalleryItem picture={pictures} />
    </ul>
  );
}

export default ImageGallery;
