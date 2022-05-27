import React from 'react';
import {  useNavigate } from 'react-router-dom';


import '../../assets/sass/inicio.scss'

// en el parametro de inicioItemDetail le pongo el producto que destructure en InicioContainer
function InicioItemDetail({data}) {
// console.log(data);
    // me traigo la funcion navigate de react-router-dom para redirigir al usuario a la pagina de detalle del producto
    const navigate = useNavigate();
    const verDetalle = () => {
      navigate(`/detalle?productoID=${data.id}`);
    }

  return (
   
    <>
    <div className='productos' >      
              <h3 className='titulo-producto'>{data.nombre}</h3>
              <img className='img-product' src={data.imagen} alt={data.nombre} />
              <p className='precio-productos' >Precio: ${data.precio}</p>
              {/* <p>Category: {data.category}</p> */}
              <button className='btn-ver-detalle' onClick={verDetalle}>Ver Detalle</button>

    </div>
    
    </>
  )
}

export default InicioItemDetail;