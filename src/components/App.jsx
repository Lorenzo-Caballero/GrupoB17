import { Routes, Route } from "react-router-dom";
import Layout from "./navbar";
import Home from './Home';
import About from "./About";
import Contacto from './Contacto'

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Contacto" element={<Contacto />} /> 
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
