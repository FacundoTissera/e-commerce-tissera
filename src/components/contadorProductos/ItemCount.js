import React from 'react';
import { useState } from 'react';
import swAlert from "@sweetalert/with-react";

import '../../assets/sass/itemCount.scss';
import { Link } from 'react-router-dom';

function ItemCount() {

    const [count, setCount] =  useState(0);





     
    

     // contador mas e implementacion de swalert para agregar productos al carrito
    const contadorAdd =  () => {
        setCount(count + 1);
    }



     // contador menos e implementacion eliminar contador productos del carrito
     const contadorMinus =  () => {

        if (count < 2) {
            setCount(0); 
        }else{
            setCount(count - 1);

    };
    }


    // boton de agregar al carrito con alerta para agragado



        // contador menos e implementacion eliminar contador productos del carrito
     

        // boton de agregar al carrito con alerta para agragado

    //     const addProduct = () => {

    //         setAgregar(true);
    //         swAlert({
    //             title: "Producto Agregado",
    //             text: "El producto se ha agregado al carrito",
    //             icon: "success",
    //             button: "Aceptar",
    //         });
    //    }

       return (
           <div className='container-btns' >
        <div  className='container-min-plus'>
            <button className='btn-count' onClick={contadorMinus}>➖ </button>
            <span className='span-contador'>{count}</span>
            <button className='btn-count' onClick={contadorAdd}>➕ </button>

        </div>
            <Link to="/carrito"><button className='btn-agregar-carrito'>AGREGAR AL CARRITO</button></Link> 

        {/* <button className='btn-add' onClick={addProduct}>AGREGAR AL CARRITO</button>
        <button className='btn-add' onClick={addProduct}>AGREGAR AL CARRITO</button>

        <button className='btn-add' ><a href="/item"> IR AL DETALLE </a></button> */}
        {/* <button className='btn-add' ><a href="/item"> IR AL DETALLE </a></button> */}
    </div>
  )
}

export default ItemCount;