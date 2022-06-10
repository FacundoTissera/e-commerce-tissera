import React from 'react';
import Swal from 'sweetalert2'


import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';


function AgregarProductos() {
  
  const AddProduct = (e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value;
    const precio = e.target.precio.value;
    const descripcion = e.target.descripcion.value;
    // const imagen = e.target.imagen.value;
    const categoria = e.target.categoria.value;
    const stock = e.target.stock.value;
    const imagen = e.target.imagen.files[0].name;
    const imagenUrl = e.target.imagen.files[0];
    console.log(imagenUrl);

// push una imagen a public/images

      if (nombre === "" || precio === "" || descripcion === "" || categoria === "" || stock === "") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debes completar todos los campos',
      });
    }else{

      
      const ProductoCollection = collection(db, 'productos');
      const OrdenAgregarProducto = {
        nombre: nombre,
        precio: precio,
        descripcion: descripcion,
        categoria: categoria,
        stock: stock,
        imagen: `../images/${imagen}`
      }

    const addProduct = addDoc(ProductoCollection, OrdenAgregarProducto);
    
    addProduct
    .then((resultado) => {
        Swal.fire({
          icon: 'success',
          title: '¡Producto Agregado!',
          text: 'El producto se ha agregado con éxito',
        });
        
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salió mal, intenta de nuevo',
        });
        
      })
      
    }
      
  };



  


  return (
    <>
    <form onSubmit={AddProduct}>
                <div className="">
                    <div className="" >
                        <label className="">
                        <span>Nombre:</span>
                        <br />
                        <input className="" type="text" name="nombre" />
                        </label>
                    </div>
                        <br />

                    <div className="">
                        <label className="">
                            <span>Categoria:</span>
                            <br />
                            <input className="" type="text" name="categoria" />
                        </label>
                    </div>
                        <br />

                    <div className="">
                        <label className="">
                            <span>Precio:</span>
                            <br />
                            <input className="" type="number" name="precio" />
                            </label>
                    </div>
                        <br />

                        <div className="">
                            <label className="">
                                <span>imagen:</span>
                                <br />
                                <input className="" type="file" name="imagen" />
                                </label>
                        </div>
                        <br />

                        <div className="">
                            <label className="l">
                                <span>Stock:</span>
                                <br />
                                <input className="" type="number" name="stock" />
                            </label>
                        </div>
                        <br />

                        <div className="">
                            <label className="">
                                <span>Descripción:</span>
                                <br />
                                <textarea name="descripcion" id="" cols="30" rows="5" placeholder='Descripción del producto' ></textarea>
                              
                            </label>
                        </div>
                    </div>
                    
                    <button className="" type="submit">CARGAR PRODUCTO</button>
                </form>
    </>
  )
}

export default AgregarProductos