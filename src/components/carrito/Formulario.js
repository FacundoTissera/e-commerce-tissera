import React from 'react'

function Formulario() {
    const submitHandler = (e) => {
       e.preventDefault();
       console.log(e.target.nombre.value);
       console.log(e.target.email.value);
       console.log(e.target.telefono.value);
       console.log(e.target.apellido.value);
    
       }
    return (
      <>
        
      <form onSubmit={submitHandler}>
        <div className="mb-3">
            <div className="mb-3" >
            <label className="form-label">
                <span>Nombre:</span>
                <br />
                <input className="form-control" type="text" name="nombre" />
            </label>
            </div>
            <br />
            <div className="mb-3">
            <label className="form-label">
                <span>Apellido:</span>
                <br />
                <input className="form-control" type="text" name="apellido" />
            </label>
            </div>
            <br />
            <div className="mb-3">
                <label className="form-label">
                    <span>Telefono:</span>
                    <br />
                    <input className="form-control" type="number" name="telefono" />
                    </label>
            </div>
            <br />
            <div className="mb-3">
                <label className="form-label">
                    <span>Correo electronico:</span>
                    <br />
                    <input className="form-control" type="email" name="email" />
                </label>
            </div>
        </div>

        <button className="btn btn-primary" type="submit">FINALIZAR MI COMPRA</button>
      </form>
      </>
  )
}

export default Formulario