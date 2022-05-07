import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/sass/inicio.scss'

function InicioItemDetail({data}) {
  return (
    <>
    <div className='productos' >      
            
              <h3 className='title-product'>{data.title}</h3>
              <img className='img-product' src={data.image} alt={data.title} />
              <p>Price: ${data.price}</p>
              <p>Category: {data.category}</p>
              <Link to={`/detalle?productoID=${data.id}`}><button>Ver Detalle</button></Link>

    </div>
    </>
  )
}

export default InicioItemDetail;