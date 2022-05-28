import { useContext } from 'react';
import swAlert from "@sweetalert/with-react";
import {  useNavigate } from 'react-router-dom';
import { contexto } from '../ProviderContext';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

// estilos

import '../../assets/sass/carrito.scss'

function Carrito() {

const navigate = useNavigate();


    const { carrito, precioTotal, eliminarProducto } = useContext(contexto);
  

  // terminar compra y mandar a la pagina de pago

    const terminarCompra = () => {

        const ordenesCollection = collection(db, 'ventas');

        const orden = {
          buyer : {
            nombre: "Facundo",
            apellido: "Tissera",
            telefono: "3534813541",
            email: "facundotisserasorribas@gmail.com",
          },
            items : carrito,
            total : `${precioTotal}` ,
            fecha : new Date().toLocaleString(),
        }

        const consulta =  addDoc(ordenesCollection, orden)

        consulta
          .then((resultado) => {
            console.log(resultado);
            swAlert({
              title: "¡Compra Terminada!",
              text: "La compra se ha realizado con éxito",
              icon: "success",
              button: "OK",
          });

          })
          .catch(() => {})


  }

  // retorno a la pagina de inicio si no hay nada en el carrito
  const volverInicio = () => {
    navigate('/');
  }

// console.log(carrito);

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
                  carrito.map((item) => {
                  console.log(item.producto.id);
                    return  (
                      <div key={item.producto.id}>
                          <div className='container-producto'   >
                              <img className='img-carrito' src={item.producto.imagen} alt={item.producto.nombre} />
                              <div>
                                <h4>{ item.producto.nombre.substring(0, 20) }... </h4> 
                              </div>
                              <div>
                                <span>{ item.cantidad }</span>
                              </div>
                              <div>
                                <span> ${ item.producto.precio } </span> 
                              </div>
                            <button onClick={ eliminarProducto } >Eliminar</button>
                           
                        </div>
                          <div className='linea-separadora-productos'>
                          
                        </div>
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