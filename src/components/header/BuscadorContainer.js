import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import Swal from 'sweetalert2'
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' 
import { faMagnifyingGlass, faArrowRight } from '@fortawesome/free-solid-svg-icons'



function BuscadorContainer() {

    const history = useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const keyword = e.currentTarget.keyword.value.toLowerCase().trim();
        if(keyword.length === 0){
            Swal.fire({
                title: 'Error',
                text: 'Ingrese una palabra clave',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }else if(keyword.length < 4){
            Swal.fire({
                title: 'Error',
                text: 'Ingrese una palabra clave con mas de 4 caracteres',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }else{
            e.currentTarget.keyword.value = '';
            history(`/busqueda?keyword=${keyword}`);
        }
    }
    //     // busco el producto en la base de datos
    //     const productosEnBusqueda = collection(db, 'productos');
    //     const consulta = getDocs(productosEnBusqueda);
    //     consulta
    //         .then(resultado => {
    //             const productos = resultado.docs.map(items => {
    //                 const productosConId = {
    //                     ...items.data(),
    //                     id: items.id
    //                 }
    //                 return (productosConId)
    //             })
            

    //             // filtro los productos que coincidan con la busqueda
    //             productos.forEach(producto => {
    //                 if (producto.nombre.toLowerCase().trim() === busqueda.toLowerCase().trim()) {

    //                     setProductoEncontrado(producto);
    //                     setNavegarBusqueda(true);
    //                     history('/busqueda');

    //                 }
    //             })
    //         }
            


    //         )
    //         .catch(error => {
    //             console.log(error)
    //         })

    // }



    return (
        <div className="contenedor-buscador">
            <form onSubmit={handleSubmit} >
                <FontAwesomeIcon icon={faMagnifyingGlass} />

            <input type="text" placeholder="Buscar productos" name='keyword'/>

               <button>
                <FontAwesomeIcon icon={faArrowRight}  />
                </button> 
                
                    
            </form>
            
        </div>
    )
}

export default BuscadorContainer;