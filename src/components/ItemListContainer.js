import ItemCount from "./ItemCount";

function ItemListContainer({ producto  }) {

    // creacion de contador

  return (
    <div>
      {producto}
      <ItemCount stock={10} inicial={1} />    
    </div>

  )
}

export default ItemListContainer;