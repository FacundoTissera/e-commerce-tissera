import ItemCount from "./ItemCount";
let productos = [
  {
      "id": "1",
      "nombre": "Coca Cola",
      "precio": "2.00",
      "stock": "8",
      "categoria": "Bebidas"
      
  },
  {
      "id": "2",
      "nombre": "Fanta",
      "precio": "2.00",
      "stock": "11",
      "categoria": "Bebidas"
      
  },
  {
      "id": "3",
      "nombre": "Sprite",
      "precio": "2.00",
      "stock": "10",
      "categoria": "Bebidas"
      
  }
]
function ItemListContainer({titulo}) {

    // creacion de contador

  return (
    <div>
      {/* <h1 >{titulo}</h1> */}
      <ItemCount productos={productos} stock={10} inicial={1} />    
    </div>

  )
}

export default ItemListContainer;