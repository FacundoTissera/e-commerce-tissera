import { useContext } from 'react';
import swAlert from "@sweetalert/with-react";
import {  useNavigate } from 'react-router-dom';
import { contexto } from '../ProviderContext';

// estilos

import '../../assets/sass/carrito.scss'

function Carrito() {

const navigate = useNavigate();


    const { carrito, precioTotal, cantidadTotal, eliminarProducto } = useContext(contexto);
    // console.log(carrito.forEach(element => element.producto.title));
    // console.log(cantidad_total);
// console.log(carrito);

  // terminar compra y mandar a la pagina de pago

    const terminarCompra = () => {
      swAlert({
        title: "¡Compra Terminada!",
        text: "La compra se ha realizado con éxito",
        icon: "success",
        button: "OK",
    });
  }

  // retorno a la pagina de inicio si no hay nada en el carrito
  const volverInicio = () => {
    navigate('/');
  }



  return (
    <div className='container-carrito'>
      <h1 className='titulo-carrito'>CARRITO</h1>
      {
        carrito.length === 0 && 
          <div>
            <h2 >Tu carrito está vacío</h2>
            <p>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>
            <button onClick={ volverInicio }>volver al inicio</button>
          </div>
      }
       
         {/* <article className="listado-edit">
            <table className="tabla">
              <thead>
                <tr className="columnas">
                  <th scope="col">Nombre</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                </tr>
              </thead>
              <tbody>  */}
              <div className='container-carrito-principal'>
                {
                  carrito.map((item, i) => {
                    // console.log(item.producto.category);
                    return  (
                      
                          <div className='container-producto' key={item.producto.id}>
                              <img className='img-carrito' src={item.producto.image} alt={item.producto.title} />
                              <div>
                                <h4>{ item.producto.title.substring(0,20) }... </h4> 
                              </div>
                              <div>
                                <span>{ item.cantidad }</span>
                              </div>
                              <div>
                                <span> ${ item.producto.price } </span> 
                              </div>
                            <button onClick={ eliminarProducto } >Eliminar</button>
                        </div>
                        
                        
                        )
                      })
                    }
                       {/* </tbody>
            </table>
          </article> */}
                      {
                        carrito.length > 0 &&
                      <div className='container-precio-final'>
                          <div>
                            <p className='precio-final-carrito'> El precio total a pagar es de: $ { precioTotal }  </p>
                            <button onClick={ terminarCompra } >TERMINAR MI COMPRA</button>
                          </div>
                      </div>
                    }
                    
              </div>
             

    
        
      
    </div>
  );
}

export default Carrito;