import Recetas from '../components/recetas';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Producto from './Producto';




function Home() {
    return (
      <div>
        <Carousel />
        <Producto />
       <Recetas />
       <Footer />
      </div>
    );
  }
  export default Home