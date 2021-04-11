import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ collection, onClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {collection.map(picture => (
        <li
          key={picture.id}
          onClick={() => onClick(picture.bigPicUrl)}
          className={styles.ImageGalleryItem}
        >
          <ImageGalleryItem
            id={picture.id}
            lilPicUrl={picture.lilPicUrl}
            bigPicUrl={picture.bigPicUrl}
            tags={picture.tags}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
