import React from 'react';
import { useState } from 'react';

import "../assets/sass/itemCount.scss";



function ItemCount({ stock, inicial, productos }) {
    const [count, setCount] =  useState(inicial);
    
   
    
    const [agregar, setAgregar] = useState(false);

  
    const contadorAdd =  () => {
        setCount(count + 1);
        
    };

    const contadorMinus =  () => {
        
        if (count < 1) {
            setCount(1); 
        }else{
            setCount(count - 1);
        }
        
    };
    
    const addProduct = () => {
        setAgregar(true);
    }

    return (
        <>
        
        <div className='container-btns'>
            {
                productos.map((producto, i) => {
                    return (
                        <div className='container-productos' key={i}>
                            <div >
                                <p>{producto.nombre}</p>
                                <p>${producto.precio}</p>
                                <p>{producto.categoria}</p>
                            </div>    
                            <div className='container-min-plus'>

                                <button className='btn-count' onClick={contadorMinus}>➖ </button>
                                    <span>{count}</span>
                                <button className='btn-count' onClick={contadorAdd}>➕ </button>
                            </div>
                        
                            <button className='btn-add' onClick={addProduct}>AGREGAR AL CARRITO</button>

                        </div>
                    )
                })
            }
                {agregar && <p>Producto agregado al carrito, la cantidad agregada es {count}</p>}
                {stock < count && <p>No hay suficiente stock para la cantidad solicitada</p>}
        </div>
        </>
    )
}

export default ItemCount