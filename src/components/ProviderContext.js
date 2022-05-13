import { createContext, useState } from 'react';

export const  contexto = createContext();
const { Provider } = contexto;

function ProviderContext({ children }) {

    const [ carrito, setCarrito ] = useState([]);
    const [ cantidadTotal, setCantidadTotal ] = useState(0);
    const [ precioTotal, setPrecioTotal ] = useState(0);


    // AGREGO PRODUCTO AL CARRITO
console.log(carrito);
console.log(precioTotal);
    const agregarProducto = (producto, cantidad) => {

      console.log(cantidad);
        console.log(producto);

        if(estaEnCarrito(producto.id)){
          const newCarrito = [...carrito];
          
            setCarrito(newCarrito);
            
          }else{
            
            setCarrito([...carrito,{producto, cantidad} ]);
            setCantidadTotal(cantidadTotal + cantidad);
            setPrecioTotal(precioTotal + (producto.price * cantidad));
            // setPrecioTotal(producto.price * cantidad);
          }
      }

      // producto.cantidad + cantidad
      // ELIMINO PRODUCTO DEL CARRITO


    const eliminarProducto = (id) => {
      

      const newCarrito = [...carrito];
      const index = newCarrito.findIndex(item => item.producto.id === id);
      const eliminado = newCarrito.splice(index, 1);

      setCarrito(newCarrito);
      setCantidadTotal(cantidadTotal - eliminado[0].cantidad);
      setPrecioTotal(precioTotal - (eliminado[0].producto.price * eliminado[0].cantidad));


    }

    // ELIMINO TODO EL CARRITO
    const vaciarCarrito = () => {
        setCarrito([]);
    }

    // ESTA EN EL CARRITO
    const estaEnCarrito = (id) => {
      
      return carrito.find((producto) => producto.producto.id === id);
 
    }

    // VALORES DE CONTEXTO PARA PASARLO COMO VALUE
    
    const valorDelContexto = {
        carrito,
        cantidadTotal,
        precioTotal,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
        estaEnCarrito

    }

  return (
    <Provider value={valorDelContexto}>
        {children}
    </Provider>
  )
}

export default ProviderContext;