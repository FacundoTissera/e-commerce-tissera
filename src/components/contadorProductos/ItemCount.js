import React from 'react';
import { useState } from 'react';
import swAlert from "@sweetalert/with-react";
import { toast } from "react-toastify";

import '../../assets/sass/itemCount.scss';

    // 
function ItemCount({onAdd , init, stock}) {
    
    ;
    // estado contador de productos
    const [count, setCount] =  useState(init);



    
    const addToCart = () => {
        onAdd(count);
        toast.success("Productos cargados al carrito!");
        setTimeout(() => {
            toast.dismiss();
        }, 1500);
    }
    
    

     // contador mas e implementacion de swalert para agregar productos al carrito
    const contadorAdd =  () => {
        if(count < stock){
            setCount(count + 1);
        }else{
            swAlert({
                title: "No hay stock",
                text: "No hay stock disponible",
                icon: "warning",
                button: "OK",
                dangerMode: true
            });
        }
    }



     // contador menos e implementacion eliminar contador productos del carrito
     const contadorMinus =  () => {

        if (count < 2) {
            setCount(0); 
        }else{
            setCount(count - 1);

    };
    }



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
            <button className='btn-agregar-carrito' onClick={addToCart}>AGREGAR AL CARRITO</button> 

        {/* <button className='btn-add' onClick={addProduct}>AGREGAR AL CARRITO</button>
        <button className='btn-add' onClick={addProduct}>AGREGAR AL CARRITO</button>

        <button className='btn-add' ><a href="/item"> IR AL DETALLE </a></button> */}
        {/* <button className='btn-add' ><a href="/item"> IR AL DETALLE </a></button> */}
    </div>
  )
}

export default ItemCount;