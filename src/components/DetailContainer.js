import React from 'react'
import ItemDetail from './ItemDetail';
import productos from './productos.json';
import { useState, useEffect } from 'react';

function DetailContainer() {

  const [producto, setProducto] = useState([]);

  useEffect(() => {

    setTimeout(() => {
      let promesaProducto = new Promise((resolve, reject) => {
        resolve(productos);
      })
      promesaProducto.then(data => {
        // console.log(data);
        setProducto(data);
      })
      .catch(err => {
        console.log(err);
      })
    }, 1000);
      
  }, []);


  return (
    <>
        {producto.length === 0 && <p>Cargando...</p>}
        {
            producto.map((detail)=>{
                return (
                      <ItemDetail data={detail} />
                )
            })
        }
    

    </>
  )
}

export default DetailContainer;