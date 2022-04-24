import React from 'react';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import swAlert from "@sweetalert/with-react";
import "../assets/sass/itemCount.scss";
import Item from './Item';



function ItemCount({ productos }) {
    
    //contador de productos
    const [count, setCount] =  useState(0);
    
    // estado de productos de base de datos
    const [productosCount, setProductosCount] = useState([]);
    
    // estado de boton agregado o no 
    const [agregar, setAgregar] = useState(false);

    // contador mas e implementacion de swalert para agregar productos al carrito
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
    
    // contador menos e implementacion eliminar contador productos del carrito
    const contadorMinus =  () => {
        
        if (count < 1) {
            setCount(1); 
        }else{
            setCount(count - 1);
        }
        
    };
    
    // boton de agregar al carrito con alerta para agragado
    const addProduct = () => {
        setAgregar(true);
        swAlert({
            title: "Producto Agregado",
            text: "El producto se ha agregado al carrito",
            icon: "success",
            button: "Aceptar",
        });
    }
    
   
        // estado de productos con 3 seg de demora como simulacion de consulta
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
                        // creacion de DESTRUCTURACION para el componente Item
                        i < 8 ? <Item data={producto} key={producto.id} contadormas={contadorAdd} contadormenos={contadorMinus} agregar={addProduct} count= {count}/> : null
                        )
                    })
            }


        </div>
        </>
    )
}

export default ItemCount