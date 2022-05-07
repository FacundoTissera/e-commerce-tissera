
import { Route, Routes } from "react-router-dom";


// importacion de componentes 
import Header from "./header/Header";
import Inicio from "./inicio/Inicio";
import ProductoDetalleContainer from "./productos/ProductoDetalleContainer";


// importacion de estilos 
// import "../assets/sass/app.scss";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route path="/detalle" element={<ProductoDetalleContainer />} />

      </Routes>
      
    </>
  );
}

export default App;
