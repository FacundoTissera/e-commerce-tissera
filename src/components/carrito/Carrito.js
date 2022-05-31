import { useContext, useState } from 'react';
import swAlert from "@sweetalert/with-react";
import { useNavigate } from 'react-router-dom';
import { contexto } from '../ProviderContext';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

// estilos

import '../../assets/sass/carrito.scss'

function Carrito() {

  const navigate = useNavigate();
  const { carrito, precioTotal, eliminarProducto, vaciarCarrito } = useContext(contexto);
  // estado para mostrar el formulario de datos del cliente
  const [ formulario, setFormulario ] = useState(false);


  // funcion para enviar el pedido a la base de datos 
  const submitHandler = (e) => {
    e.preventDefault();
    
    const nombre = e.target.nombre.value;
    const apellido = e.target.apellido.value;
    const direccion = e.target.direccion.value;
    const telefono = e.target.telefono.value;
    const email = e.target.email.value;

    if (nombre === "" || apellido === "" || telefono === "" ) {
      swAlert(
        <div>
          <h2>Los campos estan vacios</h2>
          <p>Por favor llene todos los campos</p>
          <p>los campos de Nombre, Apellido y Telefono no pueden estar vacios</p>
        </div>
      );
      return;
    }

    const ordenesCollection = collection(db, 'ventas');
    const orden = {
      buyer: {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email,
        direccion: direccion
      },
      items: carrito,
      total: `${precioTotal}`,
      fecha: new Date().toLocaleString(),
    }

    const consulta = addDoc(ordenesCollection, orden)

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
      .catch((e) => { console.log(e) })

      setFormulario(false)
      vaciarCarrito();
      navigate('/')
    }










  // terminar compra y mandar a la pagina de pago

  const confirmarCompra = () => {
    setFormulario(true)
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
          <button onClick={volverInicio}>volver al inicio</button>
        </div>
      }

  {
    carrito.length > 0 &&
        formulario === true  &&
    <>
      <h3>Para finalizar tu pedido completa con tus datos</h3>
        <form onSubmit={submitHandler}>
          <div className="">
              <div className="" >
                <label className="">
                  <span>Nombre:</span>
                  <br />
                  <input className="" type="text" name="nombre" />
                </label>
              </div>
                <br />

              <div className="">
                  <label className="">
                      <span>Apellido:</span>
                      <br />
                      <input className="" type="text" name="apellido" />
                  </label>
              </div>
                  <br />

              <div className="">
                  <label className="">
                      <span>Telefono:</span>
                      <br />
                      <input className="" type="number" name="telefono" />
                    </label>
              </div>
                  <br />

                  <div className="">
                      <label className="">
                          <span>Direccion:</span>
                          <br />
                          <input className="" type="text" name="direccion" />
                          </label>
                  </div>
                  <br />

                  <div className="">
                      <label className="l">
                          <span>Correo electronico:</span>
                          <br />
                          <input className="" type="email" name="email" />
                      </label>
                  </div>
              </div>
              
              <button className="" type="submit">FINALIZAR MI COMPRA</button>
          </form>
        </>
      }
      


      {/* MUESTRO LOS PRODUCTOS EN EL CARRITO */}
      <div className='container-carrito-principal'>
        
        {
          carrito.map((item, i) => {
            // console.log(item.producto.id);
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