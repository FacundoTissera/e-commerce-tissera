

function ItemListContainer({ producto, children }) {

    // creacion de contador

  return (
    <div>
      {producto}
      {children} 
    </div>

  )
}

export default ItemListContainer;