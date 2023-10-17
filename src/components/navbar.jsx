import { Outlet,Link } from "react-router-dom";
import "../CSS/nav.css"
import miImagen from "../assets/logo2.png"
const Navbar = () => {
    return <div>
          
        <nav className="navbar" >
            <ul className="ulnavbar">
           
                <li>
                    <Link to= "/Contacto">Contacto</Link>
                </li>
                <li>
                    <Link to="/about">Quienes somos</Link>
                </li>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <img src={miImagen} alt="Logo" className="logoimagen" />
            </ul>
        </nav>
        <hr />
        <Outlet />
        
    </div>;
}
export default Navbar;