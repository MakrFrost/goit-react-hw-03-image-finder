import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ pictures }) {
  return (
    <ul>
      {pictures.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            previewURL={webformatURL}
            modalURL={largeImageURL}
          />
        );
      })}
    </ul>
  );
}

export default ImageGallery;
