import { useContext } from 'react';
import swAlert from "@sweetalert/with-react";
import {  useNavigate } from 'react-router-dom';
import { contexto } from '../ProviderContext';

// estilos

import '../../assets/sass/carrito.scss'

function Carrito() {

const navigate = useNavigate();


    const { carrito, precioTotal, eliminarProducto } = useContext(contexto);
  

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
          <h2 className='titulo-carrito'>¡Tus productos del carrito!</h2>
      {/* EL CARRITO ESTA VACIO CON BOTON DE VOLVER AL INICO */}
      {
        carrito.length === 0 && 
          <div className='carrito-vacio'>
            <h2 >Tu carrito está vacío</h2>
            <p>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>
            <button onClick={ volverInicio }>volver al inicio</button>
          </div>
      }
       
        {/* MUESTRO LOS PRODUCTOS EN EL CARRITO */}
              <div className='container-carrito-principal'>
                {
                  carrito.map((item, i) => {
                  
                    return  (
                      <>
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
                          <div className='linea-separadora-productos'>
                          
                        </div>
                      </>
                        
                        )
                      })
                    }
           {/*     width: 80%;
    height: 2px;
    background-color: grey;
    font-size: 15px;
    /* display: flex; */
    /* flex-direction: row; */
    /* justify-content: flex-end; */
    /* font-size: 15px; */}
                    {/* 
                    SI HAY ´PRODUCTOS SUMO LA CANTIDAD TOTAL 
                    DE TODOS LOS PRODUCTOS Y PUEDE TERMINAR LA COMPRA O
                    VOLVER AL INICIO PARA SEGUIR COMPRANDO 
                     */}
                      {
                        carrito.length > 0 &&
                      <div className='container-precio-final'>
                          <div>
                            <p className='precio-final-carrito'> El precio total a pagar es de: $ { precioTotal }  </p>
                            <button  onClick={ volverInicio }>SEGUIR COMPRANDO</button>
                            <button onClick={ terminarCompra } >TERMINAR MI COMPRA</button>
                          </div>
                      </div>
                    }
                    
              </div>
             

    
        
      
    </div>
  );
}

export default Carrito;