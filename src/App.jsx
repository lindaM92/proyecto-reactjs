import { useState } from "react";
import "./App.css";

//importacion de modulos de firebase
import appFirebase from "../src/credenciales";
// getAuth para traer el servicio de autenticacion
//onAuthStateChanged para verificar el estado de la autenticacion del login y registro
//para saber si el usuario esta logeado o no en la aplicacion
import { getAuth, onAuthStateChanged } from "firebase/auth";
//para que sepa que la autenticacion se trae de appfirebase
const auth = getAuth(appFirebase);

//importacion de componentes 
import Login from "./components/login";
import Home from "./components/Home";

function App() {
  const [usuario, setUsuario] = useState(null);
  //funcion para conocer el estado de la autenticacion
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });
  return <div>
    {usuario ? <Home correoUsuario ={usuario.email}/> : <Login/>}
  </div>;
}

export default App;
