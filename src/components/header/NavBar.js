
import { Link } from 'react-router-dom';

// rutas de otros componentes
// import CartWidget from "./CartWidget";

// importacion de estilos

import "../../assets/sass/navBar.scss";

import { useContext } from 'react';

import { contexto } from '../ProviderContext';




function NavBar() {

  const { cantidadTotal } = useContext(contexto);
  

  return (
    <>
        <nav>
            <div className="contenedor-img-logo">
                <img className="logo-nav-bar" src="/logo_naranja.png" alt="Logo empresa 2022" />
            </div>
            <div className="contenedor-links">
                <Link to="/" className="nav-link">INICIO</Link>
                {/* <Link to="/productos" className="nav-link">PRODUCTOS</Link> */}
                <Link to="/nosotros" className="nav-link">NOSOTROS</Link>
                <Link to="/login" className="nav-link">LOGIN</Link>
                
                <Link to="/carrito" className="nav-link"> CARRITO {cantidadTotal}  </Link>      
            </div>
        </nav>
    </>
  )
}

export default NavBar