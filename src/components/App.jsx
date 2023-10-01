
import '../CSS/App.css'
import '../CSS/carousel.css';
import Navbar from '../components/navbar'
import Carousel from './Carousel';
import QuienesSomos from './QuienesSomos'
import Producto from './Producto'; 


function App() {
  return (
    <div className="app-container">
      <Navbar />
        <div className="main-content">
          <Carousel />
            <div className="history-section">
              <QuienesSomos />
            </div>
              <Producto />
        </div>
    </div>
  );
}

export default App
