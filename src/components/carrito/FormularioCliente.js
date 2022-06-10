import {React, useContext, useState } from 'react';

import Swal from 'sweetalert2'

import { useNavigate } from 'react-router-dom';
import { contexto } from '../ProviderContext';

import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';


function FormularioCliente() {


    const navigate = useNavigate();
    const { carrito, precioTotal, vaciarCarrito, formularioCliente, setFormularioCliente } = useContext(contexto);
    // estado para mostrar el formulario de datos del cliente
   

    
  

 // funcion para enviar el pedido a la base de datos 
    const submitHandler = (e) => {
        e.preventDefault();
        
        const nombre = e.target.nombre.value;
        const apellido = e.target.apellido.value;
        const direccion = e.target.direccion.value;
        const telefono = e.target.telefono.value;
        const email = e.target.email.value;

        if (nombre === "" || apellido === "" || telefono === "" ) {
            Swal.fire({
                icon: 'error',
                title: 'Los campos estan vacios',
                text: 'los campos de Nombre, Apellido y Telefono no pueden estar vacioss',
            });

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
            Swal.fire({
                icon: 'success',
                title: '¡Compra Terminada!',
                text: 'La compra se ha realizado con éxito',
                button: "OK",
              });   

        })
        .catch((e) => {
            console.log(e) 
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salió mal, intenta de nuevo',
            });

            })
        
        setFormularioCliente(true)
        vaciarCarrito();
        navigate('/')
        }


  return (
    <>
        
        {
            carrito.length > 0 &&
            formularioCliente === true  &&
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
        
    </>
    
    )
}

export default FormularioCliente