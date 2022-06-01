import React from 'react';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { db } from '../firebase';
// collection es una funcion que nos da una referencia a una coleccion de la base de datos
import { collection, getDoc, doc, getDocs, addDoc, query, where } from 'firebase/firestore';

import DetalleProducto from './DetalleProducto';
import BeatLoader from "react-spinners/BeatLoader";

// import { mostrarDetalleProducto } from '../apis/apisFirebase'
// import productos from '../productos.json';

function ProductoDetalleContainer() {

    // le pego a la url el id del producto que le paso por parametro
    let query = new URLSearchParams(window.location.search);
    let productoID = query.get('productoID');
    
    // estado del producto
    const [ productocount, setProductocount ] = useState(null);

    // console.log(productocount);


    useEffect(() =>  {  
        toast.info("Cargando productos...");
        const productosCollection =  collection(db, 'productos');
        const docResultado = doc(productosCollection, productoID);
        const consulta =  getDoc(docResultado)

     consulta 
        .then(resultado =>{
            const producto = resultado.data()
            const productoConId = {
                ...producto,
                id: productoID
            }
            // console.log({productoConId})
            
            setProductocount(productoConId);
            toast.dismiss();
        })

        .catch(error => {
            console.log(error);
        })
        .finally(() => {
        
            toast.success("Producto cargados!");
            
            setTimeout(() => {
                toast.dismiss();
            }, 1000);
        })

    } , [productoID]);

// console.log(productocount);

  return (
    <div>
            {/* hago destructuracion para mostrar el detalle en DetalleProducto */}
        <DetalleProducto data={productocount} />
        {!productocount  && <BeatLoader /> }
    </div>
  )
}

export default ProductoDetalleContainer;