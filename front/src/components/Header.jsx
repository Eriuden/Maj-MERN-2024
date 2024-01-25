import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"
import { useLogoutMutation } from '../slices/usersApiSlice'
import { logout } from "../slices/authSlice"

export const Header = () => {

  const {userInfo} = useSelector((state)=> state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [logoutApiCall] = useLogoutMutation()

  const logoutHandler = async() => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate("/")
    } catch (error) {
      console.log(err)
    }
  }
  return (
    <div>
        <h1>MERN app</h1>
        <nav>
          {userInfo ? (
            <>
              <h3>Bienvenue {userInfo.name}</h3>
              <Link to={"/profile"}>Profil</Link>
              <h3 onClick={logoutHandler}>Déconnexion</h3>
            </>) : (
            <Link to={"/login"}>Se connecter</Link>
          )}
        </nav>
    </div>
  )
}
