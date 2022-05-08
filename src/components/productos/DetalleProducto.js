import { useState, useContext } from 'react'
import { contexto } from '../ProviderContext';

import ItemCount from '../contadorProductos/ItemCount';

import '../../assets/sass/detalleProducto.scss'

function DetalleProducto({data}) {

  const [itemCarrito, setItemCarrito] = useState(0);
  const { agregarProducto } = useContext(contexto);

  const onAdd = (count) => {
    console.log(count);
    setItemCarrito(count);
    agregarProducto(data, count);
    
  }
  return (
    <>
        <h2 className="titulo-detalle-producto">DETALLE PRODUCTO</h2>

    {
        data && 
        <div className="container">
                <div className='container-detalle' >
                    <img className='img-detalle' src={data.image} alt={data.title} />
                    
                    <div className='container-hijo-detalle'>
                      <h4 className='nombre-producto' >{data.title}</h4>

                      <div className='datos-detalle'>
                        <p className='precio'>${data.price}</p>
                        <p className='categoria'>Category: {data.category}</p>
                        
                        <p className='descripcion'><span className='span-descripcion'> Description: </span>  {data.description}</p>
                        <p className='stock'>Stock del producto : {data.rating.count}</p>
                        </div>

                          {itemCarrito >=1 ? <p className='stock'>Producto agregado al carrito</p>: null}

                        <ItemCount  onAdd={onAdd} />
                    </div>
                </div>
            </div>
    }
    </>
  )
}

export default DetalleProducto;