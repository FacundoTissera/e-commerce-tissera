import React from 'react';
import {  useNavigate } from 'react-router-dom';


import '../../assets/sass/inicio.scss'

function InicioItemDetail({data}) {

    const navigate = useNavigate();

  const verDetalle = () => {
    navigate(`/detalle?productoID=${data.id}`);
  }
  return (
   
    <>
    <div className='productos' >      
              <h3 className='titulo-producto'>{data.title}</h3>
              <img className='img-product' src={data.image} alt={data.title} />
              <p className='precio-productos' >Price: ${data.price}</p>
              {/* <p>Category: {data.category}</p> */}
              <button className='btn-ver-detalle' onClick={verDetalle}>Ver Detalle</button>

    </div>
    </>
  )
}

export default InicioItemDetail;