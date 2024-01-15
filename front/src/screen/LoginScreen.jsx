import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FormContainer } from '../components/FormContainer'

export const LoginScreen = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const submitHandler = async(e) => {
        e.preventDefault()
        console.log("submit")
    }
  return (
    <div>
        <FormContainer>
            <h1>Connection</h1>

            <form onSubmit={submitHandler}>
                <label> Adresse mail </label>
                <input type="email" placeholder='Votre adresse mail' value={email}
                onChange={(e)=> setEmail(e.target.value)}></input>

                <label> Mot de passe </label>
                <input type="text" placeholder='Votre mot de passe' value={password}
                onChange={(e)=> setPassword(e.target.value)}></input>
                <input type="submit">Valider</input>

                <p>Pas encore inscrit ? <Link to={'/register'}>Inscription</Link></p>
            </form>
        </FormContainer>
    </div>
  )
}
