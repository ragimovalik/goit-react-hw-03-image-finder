import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import './App.css';

//'20179181-b536d7b2e359c0533f6f56cb7'

function App() {
  return (
    <div>
      <h1>Image Finder</h1>
      <Searchbar />
      <ImageGallery />
      <Button />
      <Modal />
    </div>
  );
}

export default App;
