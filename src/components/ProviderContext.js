import { createContext, useState } from 'react';

export const  contexto = createContext();
const { Provider } = contexto;

function ProviderContext({ children }) {

    const [ carrito, setCarrito ] = useState([]);
    const [ cantidadTotal, setCantidadTotal ] = useState(0);
    const [ precioTotal, setPrecioTotal ] = useState(0);


    // AGREGO PRODUCTO AL CARRITO
// console.log(carrito);
// console.log(precioTotal);
    const agregarProducto = (producto, cantidad) => {
        
// si el pruducto esta en carrito sumar la cantidad
        if(estaEnCarrito(producto.id)){

          setCarrito(carrito.map(item => item.producto.id === producto.id ? {
            producto,
            cantidad: item.cantidad + cantidad
          } : item));
            
            setCantidadTotal(cantidadTotal + cantidad);
            setPrecioTotal(precioTotal + (producto.precio * cantidad));

          }else{
            
            setCarrito([...carrito,{producto, cantidad} ]);
            setCantidadTotal(cantidadTotal + cantidad);
            setPrecioTotal(precioTotal + (producto.precio * cantidad));
            
          }
      }

      // ELIMINO UN PRODUCTO DEL CARRITO
    const eliminarProducto = (id) => {
      
console.log(id);
      const newCarrito = [...carrito];
      console.log(newCarrito);
      const index = newCarrito.find(item => item.producto.id === id);
      console.log(index);
      const eliminado = newCarrito.splice(index, 1);

      setCarrito(newCarrito);
      setCantidadTotal(cantidadTotal - eliminado[0].cantidad);
      setPrecioTotal(precioTotal - (eliminado[0].producto.precio * eliminado[0].cantidad));
    }

    // ELIMINO TODO EL CARRITO
    const vaciarCarrito = () => {
        setCarrito([]);
    }

    // EL PRODUCTO ESTA EN EL CARRITO
    const estaEnCarrito = (id) => {
      
      const item = carrito.find((producto) => producto.producto.id === id);
          console.log(item);
        return item !== undefined;
    }

    // VALORES DE CONTEXTO PARA PASARLO COMO VALUE A LOS COMPONENTES
    
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