import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { contexto } from '../ProviderContext';

import ItemCount from '../contadorProductos/ItemCount';

import '../../assets/sass/detalleProducto.scss'

// en el parametro de DetalleProducto le pongo el producto que destructure en ProductoDetalleContainer
function DetalleProducto({data}) {
// console.log(data);

// me traigo la funcion navigate de react-router-dom para redirigir al usuario a la pagina de detalle del producto
const navigate = useNavigate();

// estado de cantidad de productos
const [itemCarrito, setItemCarrito] = useState(0);

// me traigo la funcion agregar producto del contexto
const { agregarProducto } = useContext(contexto);

// agrego el producto al carrito
const onAdd = (cantidad) => {
  
  setItemCarrito(cantidad);

    agregarProducto(data, cantidad);
  }
  // redirijo al usuario al carrito
  const goToCart = () => {
    navigate('/carrito');
  }
  return (
    <>
        <h2 className="titulo-detalle-producto">DETALLE PRODUCTO</h2>

    {
        data && 
        <div className="container">
                <div className='container-detalle' >
                    <img className='img-detalle' src={data.imagen} alt={data.nombre} />
                    
                    <div className='container-hijo-detalle'>
                      <h4 className='nombre-producto' >{data.nombre}</h4>

                      <div className='datos-detalle'>
                        <p className='precio'>${data.precio}</p>
                        <p className='categoria'>Categoria: {data.categoria}</p>
                        
                        <p className='descripcion'><span className='span-descripcion'> Description: </span>  {data.descripcion}</p>
                        {/* <p className='stock'>Stock del producto : {data.rating.count}</p> */}
                        </div>
                          {/* si hay mas de un producto en el estado 
                          itemCarrito que muestre el boton para redirigir
                           a la vista del carrito */}
                          {itemCarrito >=1 ? <button className='btn-agregar-carrito' onClick={goToCart} >IR AL CARRITO</button>: null}


                            {/* contador y agregar producto a carrito
                            y destructuro para pasarme el onAdd la iniciacion del value y el stock del producto */}
                        <ItemCount  onAdd={onAdd} init={1} stock={data.stock}/>
                    </div>
                </div>
            </div>
    }
    </>
  )
}

export default DetalleProducto;