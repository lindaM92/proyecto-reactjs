import React, { useState } from "react";
import imagen from "../assets/imagen1.png";
import imagen2 from "../assets/imagen2.png";
import appFirebase from "../credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth(appFirebase);
const Login = () => {
  const [registrando, setRegistrando] = useState(false);
  // funcion con async porque es asincrona y con e porque va a recibir un email
  const funAutenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.elements.email.value;
    const contraseña = e.target.elements.password.value;

  

    //si registrando es true entonces guarda
    // se coloca await porque es una peticion asincrona
    // entonces si es asi creame un email y un password con los parametro auth que es modulo de firebase
    //con correo y contraseña que son las variables
    if (registrando) {
      try {
        await createUserWithEmailAndPassword(auth, correo, contraseña);
      } catch (error) {
        alert("¿Seguro que aun no tienes registro?")
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, correo, contraseña);
      } catch (error) {
        alert ("Usuario o contraseña incorrecto")
      }
      
    }
  };

  return (
    <div className="container">
      <div className="row">
        {/* // la columna mas pequeña del formulario */}
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body shadow-lg">
              <img src={imagen2} alt="" className="estilo-profile" />
              <form onSubmit={funAutenticacion}>
                <input
                  type="text"
                  placeholder="Digite el correo"
                  className="cajatexto"
                  id="email"
                />
                <input
                  type="password"
                  placeholder="Digite la contraseña"
                  className="cajatexto"
                  id="password"
                />
                <button className="btnform">
                  {registrando ? "Registrate" : "Inicia sesion"}
                </button>
              </form>
              <h4 className="texto">
                {registrando
                  ? "¿ya tienes una cuenta?"
                  : "¿Aun no te has registrado?"}
                <button
                  className="btnswicth"
                  onClick={() => setRegistrando(!registrando)}
                >
                  {registrando ? "Inicia sesion " : "Registrate"}
                </button>
              </h4>
            </div>
          </div>
        </div>
        {/*  la columna mas grande del formulario */}
        <div className="col-md-8">
          <img src={imagen} alt="" className="tamaño-imagen" />
        </div>
      </div>
    </div>
  );
};

export default Login;
