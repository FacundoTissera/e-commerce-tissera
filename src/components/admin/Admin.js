import React from 'react'
import { Navigate } from 'react-router-dom';
function Admin() {

  let token = sessionStorage.getItem('token');
  
  return (

    <>
     { !token && <Navigate  to="/" />}
        <div>Admin</div>
    </>
  )
}

export default Admin