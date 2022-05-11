import React from 'react';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import axios from 'axios';
import DetalleProducto from './DetalleProducto';
import BeatLoader from "react-spinners/BeatLoader";

// import productos from '../productos.json';

function ProductoDetalleContainer() {

    let query = new URLSearchParams(window.location.search);

    let productoID = query.get('productoID');

    console.log(productoID);

    const [productocount, setProductocount] = useState(null);

    useEffect(() =>  {   
        toast.info("Cargando productos...")
  
        setTimeout(() => {

            const URL = `https://fakestoreapi.com/products/${productoID}`;
            axios.get(URL)
                .then(response => {
                    toast.dismiss();
                    setProductocount(response.data);
                    toast.success("Productos cargados!")
                })
                .catch(err => {
                    console.log(err);
                })

                
        // COMO QUEDARIA CON LA CREACION DE UNA PROMESA 

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
        },100);
        
    } , [productoID]);

// console.log(productocount);

  return (
    <div>
        
        <DetalleProducto data={productocount} />
        {!productocount  && <BeatLoader /> }
    </div>
  )
}

export default ProductoDetalleContainer;