
import {React, useContext } from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
import { contexto } from '../ProviderContext';
function Admin() {


  let token = sessionStorage.getItem('token');

  const { setAdmin } = useContext(contexto);

  let history = useNavigate();


  const cerrarCesion = () => {
    sessionStorage.removeItem('token');
    history('/');
    setAdmin(false);
  }

  return (

    <>
     { !token && <Navigate  to="/" />}
        <div>Admin</div>

        <button onClick={cerrarCesion}>cerrar cesion</button>
    </>
  )
}

export default Admin