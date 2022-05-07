import React from 'react';
import { useEffect, useState } from 'react';

import InicioItemDetail from './InicioItemDetail';
// import productos from '../productos.json';
import axios from 'axios';



function InicioContainer() {

    const [productosCount, setProductosCount] = useState([]);

    useEffect(() => {
    
      const URL ='https://fakestoreapi.com/products?limit=8';     
          axios.get(URL)
            .then(response => {
              setProductosCount(response.data);
            })
        
        .catch(err => {
            console.log(err);
        }
        )
    }, []);
    console.log(productosCount);
    //     setTimeout(() => {
    //       const pedido = new Promise((resolve, reject) => {
    //         resolve(productos);
    //       })
    //       pedido.then(data => {
    //         setProductosCount(data);
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       })
    //     },3000);
    // }, [productosCount]);
  return (
    <>
    {productosCount.length === 0 && <p>Cargando...</p> }
    <div className='container-product'>
      {
        productosCount.map(producto => {
          return (
            <InicioItemDetail data={producto} key={producto.id} />
            )
          })
        }
      </div>

    </>

  )
}
export default InicioContainer