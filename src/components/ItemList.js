import React from 'react';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import swAlert from "@sweetalert/with-react";
import "../assets/sass/itemCount.scss";



function ItemCount({ productos }) {
    const [count, setCount] =  useState(0);
    
    const [productosCount, setProductosCount] = useState([]);
    
    const [agregar, setAgregar] = useState(false);

    
    const contadorAdd =  () => {
        productos.forEach(element => {
            if(element.stock < count){
                swAlert({
                    title: "No hay stock",
                    text: "No hay stock disponible",
                    icon: "error",
                    button: "Aceptar",
                });
            }else{
                setCount(count + 1);
            
            }
        });
    }
    
    const contadorMinus =  () => {
        
        if (count < 1) {
            setCount(1); 
        }else{
            setCount(count - 1);
        }
        
    };
    
    const addProduct = () => {
        setAgregar(true);
        swAlert({
            title: "Producto Agregado",
            text: "El producto se ha agregado al carrito",
            icon: "success",
            button: "Aceptar",
        });
    }
    
   
        
     useEffect(() => {
         setTimeout(() => {
            setProductosCount(productos)

         }, 3000);
        
     },[productos]);
    
    
    
    // let promesa = new Promise((resolve, reject) => {

    //     console.log("Promesa pendiente");

    //     setTimeout(() => {
    //         resolve(productos);
    //     }, 2000);
    //     setTimeout(() => {
    //         reject("Promesa rechazada");
    //     }, 3000);
    // });
     
    // promesa
    //         .then((response) => {
    //             console.log('response:', response);
    //         })
    //         .catch((error) => {
    //             console.log('error:', error); 
    //         });

    return (
        <>

        <div className='container-btns'>
            {productosCount.length === 0 && <p>Cargando...</p>}
            {
                productosCount.map((producto, i) => {
                    return (
                        <div className='container-productos' key={i}>
                            <div >
                                <p>{producto.nombre}</p>
                                <p>${producto.precio}</p>
                                <p>{producto.categoria}</p>
                                <p>El stock de este producto es de {producto.stock}</p>
                            </div>    
                        
                            <div  className='container-min-plus'>

                                <button className='btn-count' onClick={contadorMinus}>➖ </button>
                                    <span>{count}</span>
                                <button className='btn-count' onClick={contadorAdd}>➕ </button>
                            </div>
                            <button className='btn-add' onClick={addProduct}>AGREGAR AL CARRITO</button>
                                
                            <button className='btn-add' ><a href="/item"> IR AL DETALLE </a></button>
                            
                        </div>
                    )
                })
            }
                
        </div>
        </>
    )
}

export default ItemCount