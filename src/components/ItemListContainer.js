import ItemList from "./ItemList";
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
      "stock": "80",
      "categoria": "Bebidas"
      
  },
  {
      "id": "4",
      "nombre": "Pepsi",
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
      <ItemList productos={productos} />    
    </div>

  )
}

export default ItemListContainer;