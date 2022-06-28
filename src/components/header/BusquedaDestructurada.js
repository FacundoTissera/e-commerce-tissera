import React from 'react'

function BusquedaDestructurada({busqueda, ProductosRelacionados}) {
    
  return (
    <>
     {
        <div key={busqueda.id}>
            <h4>{busqueda.nombre}</h4>
            <p>{busqueda.descripcion}</p>
            <p>{busqueda.precio}</p>
            <img width='100px' src={busqueda.imagen} alt={busqueda.nombre} />
        </div>
        }
    <div> 
        <h3>Otros productos relacionados con tu busqueda</h3>
            {
                ProductosRelacionados.map(producto => {
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

export default BusquedaDestructurada