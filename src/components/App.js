
import { Route, Routes } from "react-router-dom";


// importacion de componentes 
import Header from "./header/Header";
import Inicio from "./inicio/Inicio";
import ProductoDetalleContainer from "./productos/ProductoDetalleContainer";
import Carrito from "./carrito/Carrito";
import Nosotroscontainer from "./nosotros/Nosotroscontainer";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


// importacion de estilos 
 import "../assets/sass/app.scss";



function App() {
  return (
    <>
   
      <Header />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route path="/detalle" element={<ProductoDetalleContainer />} />
          <Route path="/nosotros" element={<Nosotroscontainer />} />
          <Route path="/carrito" element={<Carrito  />} />
        </Routes>
      <ToastContainer />
    
    </>
  );
}

export default App;
