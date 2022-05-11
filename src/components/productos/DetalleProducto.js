import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { contexto } from '../ProviderContext';

import ItemCount from '../contadorProductos/ItemCount';

import '../../assets/sass/detalleProducto.scss'

function DetalleProducto({data}) {
  const navigate = useNavigate();
  const [itemCarrito, setItemCarrito] = useState(0);
  const { agregarProducto } = useContext(contexto);

  const onAdd = (count) => {
    console.log(count);
    setItemCarrito(count);
    agregarProducto(data, count);
    
  }

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
                    <img className='img-detalle' src={data.image} alt={data.title} />
                    
                    <div className='container-hijo-detalle'>
                      <h4 className='nombre-producto' >{data.title}</h4>

                      <div className='datos-detalle'>
                        <p className='precio'>${data.price}</p>
                        <p className='categoria'>Category: {data.category}</p>
                        
                        <p className='descripcion'><span className='span-descripcion'> Description: </span>  {data.description}</p>
                        <p className='stock'>Stock del producto : {data.rating.count}</p>
                        </div>

                          {itemCarrito >=1 ? <button className='btn-agregar-carrito' onClick={goToCart} >IR AL CARRITO</button>: null}

                        <ItemCount  onAdd={onAdd} init={1} stock={data.rating.count}/>
                    </div>
                </div>
            </div>
    }
    </>
  )
}

export default DetalleProducto;