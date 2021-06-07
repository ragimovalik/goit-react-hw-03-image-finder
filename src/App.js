import { useState, useEffect } from 'react';
import styled from 'styled-components';
import fetchOn from './service/ApiService';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Spinner from './components/Loader';
import TableScreen from './components/TableScreen';
import Modal from './components/Modal';
import Scroller from './components/Scroller';

const StyledAppWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

const App = () => {
  const [collection, setCollection] = useState([]);
  const [query, setQuery] = useState('');
  let [pageNumber, setPageNumber] = useState(1);
  const [totalPictures, setTotalPictures] = useState();
  const [urlForModal, setUrlForModal] = useState('');
  const [isBtnVisible, setIsBtnVisible] = useState(false);
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const [isScrollerShow, setScrollerShow] = useState(false);
  const [error, setError] = useState('');

  const inputSubmitHandler = inputedText => {
    setPageNumber(1);
    setQuery(inputedText);
    setCollection([]);
    setIsBtnVisible(false);
    setIsSpinnerVisible(true);
    setUrlForModal('');
  };

  // Set Query Word
  useEffect(() => {
    if (!query) return;

    galleryHandler();
  }, [query]); //eslint-disable-line

  // Get Images by fetching and Render Gallery
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

  // Scroller Handler (IsShow, Listener).
  const updateScrollerShow = () =>
    document.documentElement.scrollTop <= 140
      ? setScrollerShow(false)
      : setScrollerShow(true);

  useEffect(() => {
    window.addEventListener('scroll', updateScrollerShow);

    return () => {
      window.removeEventListener('scroll', updateScrollerShow);
    };
  }, []);

  // Load More Button Handler (isVisible). Condition for scrolling to new page top.
  useEffect(() => {
    collection.length > 12 &&
      window.scrollBy(0, document.documentElement.clientHeight - 140);

    collection.length / pageNumber === 12
      ? setIsBtnVisible(true)
      : setIsBtnVisible(false);
  }, [collection]); //eslint-disable-line

  // Total Pictures Quantity Screen
  const screenMessage = totalPictures
    ? `${totalPictures} images in the album`
    : error;

  // Modal Window Handler
  const clickOnImageHandler = url => setUrlForModal(url);

  const modalCloseHandler = ({ target, code }) => {
    (target.id === 'backdrop' || target.nodeName === 'BUTTON') &&
      setUrlForModal('');

    if (code !== 'Escape') return;
    code === 'Escape' && setUrlForModal('');
  };

  //============= RENDER =============

  return (
    <StyledAppWrap>
      <Searchbar onSubmit={inputSubmitHandler} />

      <TableScreen message={screenMessage} />

      {collection ? (
        <ImageGallery collection={collection} onClick={clickOnImageHandler} />
      ) : null}

      {isSpinnerVisible && <Spinner />}

      {isBtnVisible && (
        <Button btnText={'load more'} onClick={getNewPictures} />
      )}

      {isScrollerShow && <Scroller />}

      {urlForModal && <Modal url={urlForModal} onClose={modalCloseHandler} />}
    </StyledAppWrap>
  );
};

export default App;
