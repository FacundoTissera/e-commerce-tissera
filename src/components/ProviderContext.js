import { createContext, useState } from 'react';

export const  contexto = createContext();
const { Provider } = contexto;

function ProviderContext({ children }) {

    const [ carrito, setCarrito ] = useState([]);
    const [ cantidad_total, setCantidad_total ] = useState(0);
    const [ precio_total, setPrecio_total ] = useState(0);


    const agregarProducto = (producto, stock) => {

        if(estaEnCarrito(producto.id)){
          const newCarrito = [...carrito];
            for (const elemento of newCarrito) {
              if (elemento.producto.id === producto.id) {
                producto.rating.count = it.stock + stock;
              }
            }
            setCarrito(newCarrito);
            
          }else{
            setCarrito([...carrito, {producto, stock}]);
            setCantidad_total(stock);
            setPrecio_total(producto.price * stock);
        }
      }
    const eliminarProducto = (id) => {
      
      const newCarrito = [...carrito].map(item => item.id !== id);
      setCarrito(newCarrito);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const estaEnCarrito = (id) => {
      return carrito.find(producto => producto.id === id);    
    }


    const valorDelContexto = {
        carrito,
        cantidad_total,
        precio_total,
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