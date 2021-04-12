import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import fetchOn from './service/ApiService';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Spinner from './components/Loader';
import TableScreen from './components/TableScreen';
import Modal from './components/Modal';

const useStyles = createUseStyles({
  App: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: 16,
    paddingBottom: 24,
  },
});

const App = () => {
  const [collection, setCollection] = useState([]);
  const [query, setQuery] = useState('');
  let [pageNumber, setPageNumber] = useState(1);
  const [totalPictures, setTotalPictures] = useState();
  const [isBtnVisible, setIsBtnVisible] = useState(false);
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const [urlForModal, setUrlForModal] = useState('');
  const [error, setError] = useState('');

  const classes = useStyles();

  const inputSubmitHandler = inputedText => {
    setPageNumber(1);
    setQuery(inputedText);
    setCollection([]);
    setIsBtnVisible(false);
    setIsSpinnerVisible(true);
    setUrlForModal('');
  };

  useEffect(() => {
    if (!query) return;
    galleryHandler();
  }, [query]);

  const galleryHandler = () => {
    fetchOn(query, pageNumber)
      .then(({ totalHits, hits }) => {
        hits.length === 0 && setError('Please check your query and try again');

        setTotalPictures(totalHits);

        setCollection(prevCollection => [
          ...prevCollection,
          ...hits.map(({ id, webformatURL, largeImageURL, tags }) => ({
            id,
            lilPicUrl: webformatURL,
            bigPicUrl: largeImageURL,
            tags,
          })),
        ]);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsSpinnerVisible(false));
  };

  const getNewPictures = () => {
    setPageNumber(++pageNumber);
    setIsSpinnerVisible(true);

    galleryHandler();
  };

  useEffect(() => {
    collection.length > 12 &&
      window.scrollBy(0, document.documentElement.clientHeight - 140);

    collection.length / pageNumber === 12
      ? setIsBtnVisible(true)
      : setIsBtnVisible(false);
  }, [collection]);

  const screenMessage = totalPictures
    ? `${totalPictures} images in the album`
    : error;

  const clickOnImageHandler = url => setUrlForModal(url);

  const modalCloseHandler = ({ target, code }) => {
    (target.id === 'backdrop' || target.nodeName === 'BUTTON') &&
      setUrlForModal('');

    if (code !== 'Escape') return;
    code === 'Escape' && setUrlForModal('');
  };

  return (
    <div className={classes.App}>
      <Searchbar onSubmit={inputSubmitHandler} />
      <TableScreen message={screenMessage} />

      {collection ? (
        <ImageGallery collection={collection} onClick={clickOnImageHandler} />
      ) : null}

      {isSpinnerVisible && <Spinner />}

      {isBtnVisible && (
        <Button btnText={'load more'} onClick={getNewPictures} />
      )}

      {urlForModal && <Modal url={urlForModal} onClose={modalCloseHandler} />}
    </div>
  );
};

export default App;
