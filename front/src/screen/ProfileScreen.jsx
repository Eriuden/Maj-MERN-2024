import React from 'react'
import { useState, useEffect } from 'react'
import { FormContainer } from '../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import { setCredentials } from '../slices/authSlice'
import { useNavigate } from 'react-router-dom'

export const ProfileScreen = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passwordControl, setPasswordControl] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {userInfo} = useSelector((state)=> state.auth)

    useEffect(()=> {
        setName(userInfo.name) 
        setEmail(userInfo.email)
        
    }, [ userInfo.setName, userInfo.setEmail])

    const submitHandler = async(e) => {
        e.preventDefault()
        if (password !== passwordControl) {
            window.alert("Les mots de passe ne correspondent pas")
        } else {
            
        }
    }
  return (
    <div>
        <FormContainer>
            <h1>Mettre à jour le profil</h1>

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

            </form>
        </FormContainer>
    </div>
  )
}