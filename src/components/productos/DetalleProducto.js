import React from 'react'

function DetalleProducto({data}) {
    
  return (
    <>
    {
        data && 
        
        <>
                <div>
                    <h4>{data.title}</h4>
                    <img src={data.image} alt={data.title} />
                    <p>${data.price}</p>
                    <p>{data.category}</p>

                </div>
            </>
    }
    </>
  )
}

export default DetalleProducto;