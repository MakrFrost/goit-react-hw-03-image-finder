function ImageGalleryItem({ picture }) {
  return (
    <div className="image-gallery">
      {picture.hits.map(({ id, webformatURL }) => (
        <li key={id} className="image-gallery-item">
          <img
            src={webformatURL}
            className="image-gallery-item-image"
            alt="img"
          />
        </li>
      ))}
    </div>
  );
}

export default ImageGalleryItem;
