import { useContext } from 'react';

import { contexto } from '../ProviderContext';

function Carrito() {

    const { carrito, precioTotal } = useContext(contexto);
    // console.log(carrito.forEach(element => element.producto.title));
    // console.log(cantidad_total);

  return (
    <div>
      <h1>Carrito</h1>

    
        <p> los productos en el carrito son: </p>
      <ul>
      {

        carrito.map(item => {
          return (
            <div key={item.producto.id}>
              <li>
                <p>{item.producto.title}</p>
                <p>{item.stock}</p>
                <p>$ {item.producto.price}</p>
              </li>
            </div>
            
            )
          })
        }
        </ul>
       
      <p> el precio total a pagar es de: $ {precioTotal} </p>
     
        
      
    </div>
  );
}

export default Carrito;