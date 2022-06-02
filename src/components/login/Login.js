import { React, useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import swAlert from "@sweetalert/with-react";
import { contexto } from '../ProviderContext';

function Login() {
  
  const history = useNavigate();
  const { setAdmin } = useContext(contexto);
  
    const submitHandler = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
  
      const administrador = 'maxiKioscoSorribas@gmail.com';
      const contrasena = 'Sorribas0106';
      const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      //password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,//8 a 15 digitos tiene que tener una mayuscula y un numero minimo.
      
      if (email === "" || password === "") {
        swAlert(
          <div>
            <h2>Los campos no pueden estar vacios</h2>
            <p>los campos de email y contraseña estan vacios</p>
          </div>
        );
        return;
      }
  
      if (email !== "" && !regexEmail.test(email)) {
        swAlert(
          <div>
            <h2>debes escribir un email valido</h2>
          </div>
        );
  
        return;
      }
  
      if (email !== administrador || password !== "Sorribas0106") {
        swAlert(
          <div>
            <h2>Credenciales invalidas</h2>
          </div>
        );
        return;
      }
      
      if (email === administrador && password === contrasena) {
        const tokenRecibido = `${administrador}${contrasena}`;
        // set item guarda en el navegador la info
        sessionStorage.setItem("token", tokenRecibido);
        // con sessionStorage.getItem nos trae la info de el set item
        setAdmin(true);

        history("/login/admin");
        // loginAdmin();
      }
    };
     const token = sessionStorage.getItem("token");
      
    return (
      <>
      { token === <Navigate to="/login/admin" /> }

        <h2>Formulario Login Solo Admins</h2>
  
        <form onSubmit={submitHandler}>
          <div className="mb-3">
  
            <label className="form-label">
              <span>Correo electronico:</span>
              <br />
              <input className="form-control" type="email" name="email" />
            </label>
  
          </div>
  
          <br />
  
          <div className="mb-3" >
  
            <label className="form-label">
              <span>Contraseña:</span>
              <br />
              <input className="form-control" type="password" name="password" />
            </label>
  
          </div>
          <br />
          <br />
          <button className="btn btn-primary" type="submit">INGRESAR</button>
        </form>
      </>
    );
  
}
export default Login;