import React from 'react';

import Item from './Item';



function ItemList({ productos }) {
    


    return (
        <>

        <div className='container-btns'>
            {productos.length === 0 && <p>Cargando...</p>}
            {
                productos.map((producto, i) => {
                    return (
                        // creacion de DESTRUCTURACION para el componente Item
                        i < 8 ? <Item data={producto} key={producto.id} /> : null
                        )
                    })
            }
        </div>
        </>
    )
}

export default ItemList;