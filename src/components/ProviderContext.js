import { createContext, useState } from 'react';



export const contexto = createContext();
const { Provider } = contexto;

function ProviderContext({ children }) {

  const [carrito, setCarrito] = useState([]);
  const [cantidadTotal, setCantidadTotal] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);

  

  // AGREGO PRODUCTO AL CARRITO
  const agregarProducto = (producto, cantidad) => {
    // si el pruducto esta en carrito sumar la cantidad
    if (estaEnCarrito(producto.id)) {

      setCarrito(carrito.map(item => item.producto.id === producto.id ? {
        producto,
        cantidad: item.cantidad + cantidad
      } : item));

      setCantidadTotal(cantidadTotal + cantidad);
      setPrecioTotal(precioTotal + (producto.precio * cantidad));

    } else {

      setCarrito([...carrito, { producto, cantidad }]);
      setCantidadTotal(cantidadTotal + cantidad);
      setPrecioTotal(precioTotal + (producto.precio * cantidad));

    }
  }

  // ELIMINO UN PRODUCTO DEL CARRITO
  const eliminarProducto = (producto) => {
    const newCarrito = [...carrito];
    let idProducto = producto.target.getAttribute('id');
    const index = newCarrito.findIndex(item => item.producto.id === idProducto);
    const eliminado = newCarrito.splice(index, 1);

    setCarrito([...newCarrito]);
    setCantidadTotal(cantidadTotal - eliminado[0].cantidad);
    setPrecioTotal(precioTotal - (eliminado[0].producto.precio * eliminado[0].cantidad));
  }

  // ELIMINO TODO EL CARRITO
  const vaciarCarrito = () => {
    setCarrito([]);
    setCantidadTotal(0);
  }

  // EL PRODUCTO ESTA EN EL CARRITO
  const estaEnCarrito = (id) => {

    const item = carrito.find((producto) => producto.producto.id === id);
    return item !== undefined;
  }


  // LOGIN DE ADMINISTRADORES
  const [admin, setAdmin] = useState(false);
 
//  estado para saber si se muestra el formulario al finalizar la compra
  const [formularioCliente, setFormularioCliente] = useState(false);

  


  // VALORES DE CONTEXTO PARA PASARLO COMO VALUE A LOS COMPONENTES

  const valorDelContexto = {
    carrito,
    cantidadTotal,
    precioTotal,
    agregarProducto,
    eliminarProducto,
    vaciarCarrito,
    estaEnCarrito,
    admin,
    setAdmin,
    formularioCliente,
    setFormularioCliente

  }

  return (
    <Provider value={valorDelContexto}>
      {children}
    </Provider>
  )
}

export default ProviderContext;