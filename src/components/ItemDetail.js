import React from 'react';


function ItemDetail({data}) {

    console.log(data);
  return (
    <>
        <p key={data.id}>{data.detalle}</p>
    </>
  )
}

export default ItemDetail