import { useContext } from 'react';

import { contexto } from '../ProviderContext';

function Carrito() {

    const { cantidad_total, carrito } = useContext(contexto);
    // console.log(carrito.forEach(element => element.producto.title));
    // console.log(cantidad_total);

  return (
    <div>
      <h1>Carrito</h1>
      <p> Total de productos en Carrito es de {cantidad_total} </p> 
      <p> los productos en el carrito son: </p>
        <ul>
            {
              carrito.map((element, i)=>{
                return(
                  <li key={i}>
                    {element.producto.title}
                  </li>
                )
              })
            }
        </ul>
     
        
      
    </div>
  );
}

export default Carrito;