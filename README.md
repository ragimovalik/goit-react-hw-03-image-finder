## `GoIt React HW 03 - Image Finder`

#### Описание компонента Searchbar

- Компонент принимает один проп onSubmit - функцию для передачи значения инпута
  при сабмите формы. Создает DOM-элемент следующей структуры.

```
<header className="Searchbar">
  <form className="SearchForm">
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />

  </form>
</header>
```

#### Описание компонента ImageGallery

- Список карточек изображений. Создает DOM-элемент следующей структуры.

```
<ul className="ImageGallery">
  <!-- Набор <li> с изображениями -->
</ul>
```

#### Описание компонента ImageGalleryItem

- Компонент элемента списка с изображением. Создает DOM-элемент следующей
  структуры.

```
<li className="ImageGalleryItem">
  <img src="" alt="" className="ImageGalleryItem-image" />
</li>
```

#### Описание компонента Button

- При нажатии на кнопку Load more должна догружаться следующая порция
  изображений и рендериться вместе с предыдущими. После загрузки и рендера новой
  партии изображений страница должна плавно скролиться. Для скрола используй
  следующий код.

```
window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth', });
```

- Кнопка должна рендерится только тогда, когда есть какие-то загруженные
  изобаржения. Если массив изображений пуст, кнопка не рендерится.

#### Описание компонента Loader

- Компонент спинера, отображется пока идет загрузка изобаржений. Используй любой
  готовый компонент, например react-loader-spinner или любой другой.

#### Описание компонента Modal

- При клике по элементу галереи должно открываться модальное окно с темным
  оверлеем и отображаться большая версия изображения. Модальное окно должно
  закрываться по нажатию клавиши ESC или по клику на оверлее.

- Внешний вид похож на функционал этого VanillaJS-плагина, только вместо белого
  модального окна рендерится изображение (в примере нажми Run).

- Анимацию делать не нужно!

```
<div className="Overlay">
  <div className="Modal">
    <img src="" alt="" />
  </div>
</div>
```
