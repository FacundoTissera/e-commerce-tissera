import { useContext } from 'react';
import FormularioCliente from './FormularioCliente';
import CarritoVacio from './CarritoVacio';
import { useNavigate } from 'react-router-dom';
import { contexto } from '../ProviderContext';

// estilos

import '../../assets/sass/carrito.scss'

function Carrito() {

  const navigate = useNavigate();
  const { carrito, precioTotal, eliminarProducto, setFormularioCliente, formularioCliente } = useContext(contexto);
  
  // terminar compra y mandar a la pagina de pago
  const confirmarCompra = () => {
    if(formularioCliente === true){
      setFormularioCliente(false);
    }else{
      setFormularioCliente(true);
    }
  }
  // retorno a la pagina de inicio si no hay nada en el carrito
  const volverInicio = () => {
    navigate('/');
  }

  return (
    <div className='container-carrito'>
      <h1 className='titulo-carrito'>CARRITO</h1>
      <h2 className='titulo-carrito'>¡Tus productos del carrito!</h2>

      {/* EL CARRITO ESTA VACIO CON BOTON DE VOLVER AL INICO */}
      <CarritoVacio />
      {/* formulario para cliente una ves confirmada la compra */}
      <FormularioCliente />

      {/* MUESTRO LOS PRODUCTOS EN EL CARRITO */}
      <div className='container-carrito-principal'>
        {
          carrito.map((item, i) => {            
            return (
              <div key={i}>
                <div className='container-producto'   >
                  <img className='img-carrito' src={item.producto.imagen} alt={item.producto.nombre} />
                  <div>
                    <h4>{item.producto.nombre.substring(0, 20)}... </h4>
                  </div>
                  <div>
                    <span>{item.cantidad}</span>
                  </div>
                  <div>
                    <span> ${item.producto.precio} </span>
                  </div>
                  <button id={item.producto.id} onClick={eliminarProducto} >Eliminar</button>

                </div>
                  <div className='linea-separadora-productos'></div>
              </div>

            )
          })
        }

        {/* 
                    SI HAY ´PRODUCTOS SUMO LA CANTIDAD TOTAL 
                    DE TODOS LOS PRODUCTOS Y PUEDE TERMINAR LA COMPRA O
                    VOLVER AL INICIO PARA SEGUIR COMPRANDO 
                     */}
        {
          carrito.length > 0 &&
          <div className='container-precio-final'>
            <div>
              <p className='precio-final-carrito'> El precio total a pagar es de: $ {precioTotal}  </p>
              <button onClick={volverInicio}>SEGUIR COMPRANDO</button>
              <button onClick={confirmarCompra} >CONFIRMAR COMPRA</button>
            </div>
          </div>
        }

      </div>
    </div>
  );
}

export default Carrito;