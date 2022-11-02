function ImageGalleryItem({ key, previewURL, modalURL }) {
  return (
    <li key={key} className="image-gallery-item">
      <img src={previewURL} alt="img" />
    </li>
  );
}

export default ImageGalleryItem;

// <div className="image-gallery">
//   {picture.hits.map(({ id, webformatURL }) => (
//     <li key={id} className="image-gallery-item">
//       <img
//         src={webformatURL}
//         className="image-gallery-item-image"
//         alt="img"
//       />
//     </li>
//   ))}
// </div>
