import React from 'react';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";
// import axios from 'axios';

// importo la base de datos
// db es la referencia de la base de datos 
import { db } from '../firebase';
// collection es una funcion que nos da una referencia a una coleccion de la base de datos
import { collection, getDoc, doc, getDocs, addDoc, query, where } from 'firebase/firestore';


import InicioItemDetail from './InicioItemDetail';
// import productos from '../productos.json';

import '../../assets/sass/inicio.scss'



function InicioContainer() {
  
    // estado de total de productos 
      const [productos, setProductos] = useState([]);



      
      useEffect(() => {
        toast.info("Cargando productos...");
// productoscollection es una referencia a la coleccion de productos donde estan todos los documentos
    const productosCollection =  collection(db, 'productos');
    const consulta = getDocs(productosCollection);
        
        consulta 
          .then(resultado =>{
            
            const productos = resultado.docs.map(items => {
              const productosConId = {
                ...items.data(),
                id: items.id
              }
              return(productosConId)
            })
            // console.log(productos)
              
              toast.dismiss();
              setProductos(productos)
            })
            .catch(error => {
              console.log(error)
            })
            .finally(() => {
              
              toast.success("Productos cargados!")
              setTimeout(() => {
                toast.dismiss();
              }, 1000);
              
                })
                
          
          
          // getDocs() : trae un grupo de documentos, mas de uno seguro
          // getDocs(collection) : trae todo lo que esta en la collection 
          // getDocs(query) : trae algunos documentos dependiendo del query(filtro)
  },[]);
          
          
  
  return (
    <>
      <h2 className='titulo-inicio'>INICIO</h2>
          <h4 className='titulo-inicio sub-titulo'>NUESTRO CATALOGO</h4>

          {/* si no hay productos en el estado que mustre el loader */}
          {productos.length === 0 &&  <BeatLoader/>}
          
    <div className='container-product'>
      {
        // recorro los productos le pido que me muestre 6 productos y hago destructuracion para mostrarlos en InicioItemDetail 
        productos.map((producto, i) => {
          return (
            i < 6 ? <InicioItemDetail data={producto} key={producto.id} /> : null
            )
          })
        }
      </div>

    </>

  )
}
export default InicioContainer