
import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { contexto } from '../ProviderContext';


function CarritoVacio() {


    const navigate = useNavigate();
    const { carrito} = useContext(contexto);
    

     // retorno a la pagina de inicio si no hay nada en el carrito
  const volverInicio = () => {
    navigate('/');
  }

  return (
    <>
        {
        carrito.length === 0 &&
        <div className='carrito-vacio'>
            <h2 >Tu carrito está vacío</h2>
            <p>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>
            <button onClick={volverInicio}>volver al inicio</button>
        </div>
      }
    </>
  )
}

export default CarritoVacio