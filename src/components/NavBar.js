// rutas de otros componentes
import CartWidget from "./CartWidget";

// importacion de estilos
import "../assets/sass/navBar.scss";






function NavBar() {


  return (
    <>
        <nav>
            <div className="contenedor-img-logo">
                <img className="logo-nav-bar" src="/logo_naranja.png" alt="Logo empresa 2022" />
            </div>
            <div className="contenedor-links">
                <a href="&" className="nav-link">INICIO</a>
                <a href="&" className="nav-link">PRODUCTOS</a>
                <a href="&" className="nav-link">NOSOTROS</a>
                <a href="&" className="nav-link">LOGIN</a>
                
            <CartWidget />    
            </div>
        </nav>
    </>
  )
}

export default NavBar