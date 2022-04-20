
// importacion de fontasome para el icono de carrito
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

// estilo de carrito 
import "../assets/sass/navBar.scss";



function CartWidget() {
  return (
    <div>
        <FontAwesomeIcon className='cart-shopping' icon={ faCartShopping } />
    </div>
  )
}

export default CartWidget;

