import { React, useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
// import swAlert from "@sweetalert/with-react";
import Swal from 'sweetalert2';
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
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debes completar todos los campos',
      });
        return;
      }
  
      if (email !== "" && !regexEmail.test(email)) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debes completar con un email valido',
      });
  
        return;
      }
  
      if (email !== administrador || password !== "Sorribas0106") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Las credenciales no son correctas',
      });
        
        return;
      }
      
      if (email === administrador && password === contrasena) {
        
        const tokenRecibido = `${administrador}${contrasena}`;
        // set item guarda en el navegador la info
        sessionStorage.setItem("token", tokenRecibido);
        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Logueado Correctamente'
        })
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