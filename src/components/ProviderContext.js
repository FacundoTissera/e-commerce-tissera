import { createContext, useState } from 'react';

export const  contexto = createContext();
const { Provider } = contexto;

function ProviderContext({ children }) {

    const [ carrito, setCarrito ] = useState([]);
    const [ cantidadTotal, setCantidadTotal ] = useState(0);
    const [ precioTotal, setPrecioTotal ] = useState(0);


    // AGREGO PRODUCTO AL CARRITO

    const agregarProducto = (producto, stock) => {

        if(estaEnCarrito(producto.id)){
          const newCarrito = [...carrito];
          
            setCarrito(newCarrito);
            
          }else{
            setCarrito([...carrito, {producto, stock}]);
            setCantidadTotal(stock);
            setPrecioTotal(producto.price * stock);
        }
      }

      // ELIMINO PRODUCTO DEL CARRITO
    const eliminarProducto = (id) => {
      
      const newCarrito = [...carrito].map(item => item.id !== id);
      setCarrito(newCarrito);
    }

    // ELIMINO TODO EL CARRITO
    const vaciarCarrito = () => {
        setCarrito([]);
    }

    // ESTA EN EL CARRITO
    const estaEnCarrito = (id) => {
      return carrito.find(producto => producto.id === id);    
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