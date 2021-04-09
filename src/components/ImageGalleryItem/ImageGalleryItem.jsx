import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, lilPicUrl, bigPicUrl, tags }) => {
  return (
    <>
      <img
        className={styles['ImageGalleryItem__image']}
        src={lilPicUrl}
        alt={tags}
        data={bigPicUrl}
      />
    </>
  );
};

export default ImageGalleryItem;
