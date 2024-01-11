import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <h1>MERN app</h1>
        <nav>
            <Link to={"/login"}>Se connecter</Link>
        </nav>
    </div>
  )
}
