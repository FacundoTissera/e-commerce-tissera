import React from 'react';
import { useState } from 'react';


function ItemCount() {

    //contador de productos
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
        }
        
    };


    // boton de agregar al carrito con alerta para agragado
 
  return (
    <div>
        <div  className='container-min-plus'>
            <button className='btn-count' onClick={contadorMinus}>➖ </button>
            <span>{count}</span>
            <button className='btn-count' onClick={contadorAdd}>➕ </button>
        </div>

        {/* <button className='btn-add' onClick={addProduct}>AGREGAR AL CARRITO</button>
                
        <button className='btn-add' ><a href="/item"> IR AL DETALLE </a></button> */}
    </div>
  )
}

export default ItemCount