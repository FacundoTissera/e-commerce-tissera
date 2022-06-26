
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { toast } from "react-toastify";
import Swal from 'sweetalert2'


function ResultadoBusqueda() {
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
                
                
                //encontrar por categoria
                // let categoriaEncontrada = [];
                // for(let producto of productos){
                    
                //     let categoria = producto.categoria.toLowerCase().trim();
                   
                //         if(categoria.indexOf(productosResultado.categoria) !== -1){


                //              categoriaEncontrada.push(producto); 
                //             }
                            
                //             setProductosCategorias(categoriaEncontrada);
                //         } 
                // })
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
    }, []);

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
                console.log(producto.categoria);
                console.log(productosResultado);

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
        {
            productosResultado.length === 0 ?  <h3>No se encontraron resultados</h3>:   
               

               
                        <div key={productosResultado.id}>
                            <h4>{productosResultado.nombre}</h4>
                            <p>{productosResultado.descripcion}</p>
                            <p>{productosResultado.precio}</p>
                            <img width='100px' src={productosResultado.imagen} alt={productosResultado.nombre} />
                        </div>
                  
                
                  
                

            // productosResultado.length === 0 ? <p>no encontre nada puto</p> : 
            
            // productosResultado.map(producto => {
            //     return (
            //         <div key={producto.id}>
            //             <p>{producto.nombre}</p>
            //             <p>{producto.categoria}</p>
            //             <img width='200' src={producto.imagen} alt= {producto.nombre} />
            //         </div>
            //     )
            // }
            // ) 
            
        }
    </div>

    <div> 
        <h3>Otros productos relacionados con tu busqueda</h3>
        {
            productosCategorias.map(producto => {
                return (
                    <div key={producto.id}>
                        <p>{producto.nombre}</p>
                        <p>{producto.categoria}</p>
                        <img width='200' src={producto.imagen} alt= {producto.nombre} />
                    </div>
                )
            })
        }
    </div>

      
    </>
  )
}

export default ResultadoBusqueda;