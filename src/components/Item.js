import React from 'react'

function Item({data, contadormas, contadormenos, agregar, count}) {
    
  return (
    <div className='container-productos' key={data.id}>
                    <div >
                        <p>{data.nombre}</p>
                        <p>${data.precio}</p>
                        <p>{data.categoria}</p>
                        <p>El stock de este Producto es de {data.stock}</p>
                    </div>    
                        
                    <div  className='container-min-plus'>
                        <button className='btn-count' onClick={contadormenos}>➖ </button>
                            <span>{count}</span>
                        <button className='btn-count' onClick={contadormas}>➕ </button>
                    </div>
                        <button className='btn-add' onClick={agregar}>AGREGAR AL CARRITO</button>
                                    
                        <button className='btn-add' ><a href="/item"> IR AL DETALLE </a></button>
                            
    </div>
  )
}

export default Item;