import ItemList from "./ItemList";
//  traigo en un json llos productos de la base de datos
import productos from "./productos.json"; 
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

import "../assets/sass/itemCount.scss";


function ItemListContainer() {

     // estado de productos de base de datos
    const [productosCount, setProductosCount] = useState([]);

     // estado de productos con 3 seg de demora como simulacion de consulta

  useEffect(() => { 

      setTimeout(() => {
        const pedido =  new Promise((res, rej) => {
          res(productos);
      })
      pedido.then(data => { 
        setProductosCount(data);
      })
      .catch(err => {
        console.log(err);
      })
    }, 3000);
        
  },[]);
        
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
    <div>
      
      <ItemList productos={productosCount} />    
    </div>

  )
}

export default ItemListContainer;