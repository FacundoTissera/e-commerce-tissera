
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { toast } from "react-toastify";
import Swal from 'sweetalert2';
import BusquedaDestructurada from './BusquedaDestructurada';
// import BeatLoader from "react-spinners/BeatLoader";


function BusquedaResultado() {
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

    const [productosResultado, setProductosResultados] = useState([]);
    const [productosCategorias, setProductosCategorias] = useState([]);

    useEffect(() => {
        const productosCollection = collection(db, 'productos');
        // const consulta = where(productosCollection, 'nombre', '==', keyword);

        const consulta2 = getDocs(productosCollection);
        consulta2
            .then(resultado => {
                const productos = resultado.docs.map(items => {
                    
                    const productosConId = {
                        ...items.data(),
                        id: items.id
                    }
                    return (productosConId)
                })
                
                for(let producto of productos){
                    let nombre = producto.nombre.toLowerCase().trim();
                    if(nombre.indexOf(keyword) !== -1){
                        setProductosResultados(producto);
                    }
                }
            })

            .catch(error => {
                Swal.fire({
                    title: 'Hubo errores!',
                    text: "Intenta denuevo mas tarde..",
                    icon: "warning",
                    button: "Lo siento!"
                })
                console.log(error)
            })
            .finally(() => {
                toast.success("Productos cargados!")
                setTimeout(() => {
                    toast.dismiss();
                }, 1000);
            }
            )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword]);


    useEffect(() => {
        const productosCollection = collection(db, 'productos');
        // const consulta = where(productosCollection, 'nombre', '==', keyword);

        const consulta2 = getDocs(productosCollection);
        consulta2
            .then(resultado => {
                const productos = resultado.docs.map(items => {
                    
                    const productosConId = {
                        ...items.data(),
                        id: items.id
                    }
                    return (productosConId)
                })

                let categoriaEncontrada = productos.filter(producto => {
                    let categoria = productosResultado.categoria
                if (producto.categoria.toLowerCase().trim() === categoria) {
                        return producto;
                    }
                    
                    return null;
                })  
                setProductosCategorias(categoriaEncontrada);
                
            })
            
            .catch(error => {
                console.log(error)
            })
            

    }, [productosResultado]);

   

console.log('productos', productosResultado.categoria);
console.log('productos categorias', productosCategorias);


  return (
    <>
        <h3>buscaste : <em>{keyword} </em> </h3>
            <div>
                { productosResultado.length <= 0 &&   <p>no hay resultados para tu busqueda..</p>}
            </div>
        <BusquedaDestructurada busqueda={productosResultado} ProductosRelacionados={productosCategorias} />
    </>
  )
}

export default BusquedaResultado;