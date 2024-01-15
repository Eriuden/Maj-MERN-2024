import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FormContainer } from '../components/FormContainer'

export const RegisterScreen = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passwordControl, setPasswordControl] = useState("")

    const submitHandler = async(e) => {
        e.preventDefault()
        console.log("submit")
    }
  return (
    <div>
        <FormContainer>
            <h1>Inscription</h1>

            <form onSubmit={submitHandler}>

                <label> Nom </label>
                <input type="text" placeholder='Votre nom' value={name}
                onChange={(e)=> setName(e.target.value)}></input>

                <label> Adresse mail </label>
                <input type="email" placeholder='Votre adresse mail' value={email}
                onChange={(e)=> setEmail(e.target.value)}></input>

                <label> Mot de passe </label>
                <input type="text" placeholder='Votre mot de passe' value={password}
                onChange={(e)=> setPassword(e.target.value)}></input>

                <label> Confirmer mot de passe </label>
                <input type="text" placeholder='Confirmer votre mot de passe' value={passwordControl}
                onChange={(e)=> setPasswordControl(e.target.value)}></input>
                
                <input type="submit">Valider</input>

                <p>Déjà inscrit ? <Link to={'/login'}>connection</Link></p>
            </form>
        </FormContainer>
    </div>
  )
}