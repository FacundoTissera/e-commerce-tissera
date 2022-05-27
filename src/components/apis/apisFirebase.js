// importo la base de datos
// db es la referencia de la base de datos 
import { db } from '../firebase';
// collection es una funcion que nos da una referencia a una coleccion de la base de datos
import { collection, getDoc, doc, getDocs, addDoc, query, where } from 'firebase/firestore';



export const mostrarDetalleProducto = (id) => {
    
    const productosCollection =  collection(db, 'productos');
    const docResultado = doc(productosCollection, id);
    const consulta =  getDoc(docResultado)

     consulta 
        .then(resultado =>{
            const producto = resultado.data()
            console.log({producto})
            return producto
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            console.log('consulta finalizada');
        })
}