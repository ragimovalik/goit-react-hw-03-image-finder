import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import fetchOn from './service/ApiService';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
// import Modal from './components/Modal';

const useStyles = createUseStyles({
  App: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: 16,
    paddingBottom: 24,
  },
});

// const initialCollection = { id: '', lilPicUrl: '', bigPicUrl: '', tags: '' };

const App = () => {
  const [collection, setCollection] = useState([]);
  const [query, setQuery] = useState('');
  let [pageNumber, setPageNumber] = useState(1);
  // const [error, setError] = useState('Error')

  const classes = useStyles();

  const inputSubmitHandler = inputedText => {
    setPageNumber(1);
    setQuery(inputedText);
    setCollection([]);
  };

  useEffect(() => {
    if (!query) return;

    fetchOn(query, pageNumber)
      .then(pictures => {
        console.log(pictures);
        setCollection(prevCollection => [
          ...prevCollection,
          ...pictures.map(picture => ({
            id: picture.id,
            lilPicUrl: picture.webformatURL,
            bigPicUrl: picture.largeImageURL,
            tags: picture.tags,
          })),
        ]);
      })
      .catch(error => console.log(error));
  }, [query, pageNumber]);

  const paginationHandler = () => {
    setPageNumber(++pageNumber);
  };

  // useEffect(() => {
  //   collection.length >= 12 && setPageNumber(pageNumber++);
  // });

  return (
    <div className={classes.App}>
      <Searchbar onSubmit={inputSubmitHandler} />

      {collection ? <ImageGallery collection={collection} /> : null}

      {collection.length >= 12 && (
        <Button btnText={'load more'} onClick={paginationHandler} />
      )}
      {/* {pageNumber >= 2 && <Button />} */}

      {/* <Modal /> */}
    </div>
  );
};

export default App;

/*
Pixabay API поддерживает пагинацию, по умолчанию параметр page равен 1. 
Пусть в ответе приходит по 12 объектов, установлено в параметре per_page. 
Не забудь что при поиске по новому ключевому слову, необходимо 
сбрасывать значение page в 1.

В ответе от апи приходит массив объектов, в которых тебе интересны 
только следущие свойства.

id - уникальный идентификатор
webformatURL - ссылка на маленькое изображение для списка карточек
largeImageURL - ссылка на большое изображение для модального окна
*/
