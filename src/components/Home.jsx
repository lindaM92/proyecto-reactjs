import React from "react";
import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase)
const Home = () => {
    return(
        <div>
<h1>HOLA <button className="btn btn-primary" onClick={()=>signOut(auth)}>Logout</button></h1>
        </div>
    )
}

export default Home