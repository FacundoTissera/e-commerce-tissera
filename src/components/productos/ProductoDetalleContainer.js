import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DetalleProducto from './DetalleProducto';

// import productos from '../productos.json';

function ProductoDetalleContainer() {

    let query = new URLSearchParams(window.location.search);

    let productoID = query.get('productoID');

    console.log(productoID);

    const [productocount, setProductocount] = useState(null);

    useEffect(() =>  {     
        setTimeout(() => {

            const URL = `https://fakestoreapi.com/products/${productoID}`;
            axios.get(URL)
                .then(response => {
                    setProductocount(response.data);
                })
                .catch(err => {
                    console.log(err);
                })

            // const pedido = new Promise((resolve, reject) => {
            //     resolve(productos);
            // })
            // pedido.then(data => {
            //     console.log(data);
            //     setProductocount(data);
            // })
            // .catch(err => {
            //     console.log(err);
            // })
        },2000);
        
    } , [productoID]);

// console.log(productocount);

  return (
    <div>
        <h2>DETALLE PRODUCTO</h2>
        {!productocount  && <p>Cargando...</p> }
        <DetalleProducto data={productocount} />
    </div>
  )
}

export default ProductoDetalleContainer;