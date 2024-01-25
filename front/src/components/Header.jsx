import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"

export const Header = () => {

  const {userInfo} = useSelector((state)=> state.auth)
  return (
    <div>
        <h1>MERN app</h1>
        <nav>
          {userInfo ? (
            <>
              <h3>Bienvenue {userInfo.name}</h3>
              <Link to={"/profile"}>Profil</Link>
              <h3>Déconnexion</h3>
            </>) : (
            <Link to={"/login"}>Se connecter</Link>
          )}
        </nav>
    </div>
  )
}
