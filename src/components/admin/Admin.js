
import {React, useContext, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
import { contexto } from '../ProviderContext';
import AgregarProductos from './AgregarProductos';



function Admin() {


  let token = sessionStorage.getItem('token');

  const { setAdmin } = useContext(contexto);

  let history = useNavigate();

  // estado para mostrar el formulario de agregar productos
    const [mostrarProducto, setMostrarProducto] = useState(false);
  // funcion para modificar el estado de agregar productos
  const agregarProducto = () => {
      if (mostrarProducto === true) {
        setMostrarProducto(false);
      }else{
        setMostrarProducto(true);
      }
    }
  

// cerrar sesion
  const cerrarSesion = () => {
    sessionStorage.removeItem('token');
    history('/');
    setAdmin(false);
  }

  return (

    <>
     { !token && <Navigate  to="/" />}
        <div>Admin</div>

        <button onClick={agregarProducto}>Agregar Producto</button>

        <button onClick={cerrarSesion}>cerrar Sesion</button>
        {
          mostrarProducto && 
          <AgregarProductos />
        }
    </>
  )
}

export default Admin