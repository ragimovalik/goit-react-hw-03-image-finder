import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
// import Button from './components/Button';
// import Modal from './components/Modal';
import './App.css';

const useStyles = createUseStyles({
  App: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: 16,
    paddingBottom: 24,
  },
});

const App = () => {
  const [collection, setCollection] = useState([
    { id: '', lilPicUrl: '', bigPicUrl: '', tags: '' },
  ]);

  const classes = useStyles();

  const API_KEY = '20179181-b536d7b2e359c0533f6f56cb7';
  const baseUrl = 'https://pixabay.com/api/';
  const pageNumber = 1;
  const pageCapacity = 12;

  const inputSubmitHandler = query => {
    const url = `${baseUrl}/?q=${query}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${pageCapacity} `;

    fetch(url)
      .then((response, reject) => response.json())
      .then(({ hits }) => {
        console.log(hits);
        setCollection(
          hits.map(el => ({
            id: el.id,
            lilPicUrl: el.webformatURL,
            bigPicUrl: el.largeImageURL,
            tags: el.tags,
          })),
        );
      })
      .catch(error => console.log(error));
  };

  return (
    <div className={classes.App}>
      <h1>Image Finder</h1>

      <Searchbar onSubmit={inputSubmitHandler} />
      <ImageGallery collection={collection} />
      {/* <Button /> */}
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
