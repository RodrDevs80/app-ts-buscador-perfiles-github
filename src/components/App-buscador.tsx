import { useState } from "react";
import logoGithub from "../assets/img/github.svg";
import UserGithub from "./UserGithub";
import axios from "axios";

function App() {
  
  const [userBuscado,setUserBuscado]= useState<string>("");
  const [user,setUser]= useState(null);
 
  const getUserGithub =async ()=>{
    try {
      const res = await axios.get(`https://api.github.com/users/${userBuscado}`);
      console.log(res.data);
      setUser(res.data);
      setUserBuscado("");
    } catch (err) {
      setUser(null);
      console.error("Error",err)
    }
  }
  return (
    <>
      <h1>Buscador de Perfiles de GITHUB <span><img src={logoGithub} alt="logo github" /></span></h1>
      <div className="container"> 
      <input type="text" 
      onChange={(e)=>setUserBuscado(e.target.value)}
      value={userBuscado}
      />
      <button onClick={getUserGithub}>Buscar</button>
      </div> 
      
      {user ?<UserGithub user={user}/>:<h2>No se encontró ningún usuario con ese nombre de usuario 🚨</h2>}
    </> 
      
  )
}

export default App
