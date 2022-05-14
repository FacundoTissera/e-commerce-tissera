import React from 'react';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";

import InicioItemDetail from './InicioItemDetail';
// import productos from '../productos.json';
import axios from 'axios';

import '../../assets/sass/inicio.scss'



function InicioContainer() {

  // estado de total de productos 
    const [productosCount, setProductosCount] = useState([]);

    useEffect(() => {
      toast.info("Cargando productos...")
      
      const URL ='https://fakestoreapi.com/products';     
      axios.get(URL)
      .then(response => {
        toast.dismiss();
        setProductosCount(response.data);
        toast.success("Productos cargados!")
      })
      
      .catch(err => {
        console.log(err);
      }
      )
    }, []);
    // console.log(productosCount);
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
      <h2 className='titulo-inicio'>INICIO</h2>
          <h4 className='titulo-inicio sub-titulo'>NUESTRO CATALOGO</h4>

          {/* si no hay productos en el estado que mustre el loader */}
          {productosCount.length === 0 &&  <BeatLoader/>}
          
    <div className='container-product'>
      {
        // recorro los productos le pido que me muestre 6 productos y hago destructuracion para mostrarlos en InicioItemDetail 
        productosCount.map((producto, i) => {
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