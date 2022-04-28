import ItemCount from "./ItemCount";


function Item({data}) {

 
    
  return (
    <div className='container-productos' key={data.id}>
          <div >
            <h3>{data.nombre}</h3>
            <p>${data.precio}</p>
            <p>{data.categoria}</p>
            <p>El stock de este Producto es de {data.stock}</p>

            <ItemCount />
            {/* <button className='btn-add' onClick={addProduct}>AGREGAR AL CARRITO</button>
            <button className='btn-add' ><a href="/item"> IR AL DETALLE </a></button> */}
          </div>    
                        
                    
                            
    </div>
  )
}

export default Item;