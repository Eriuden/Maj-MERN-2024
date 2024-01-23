import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FormContainer } from '../components/FormContainer'
import { useLoginMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice'
import { useEffect } from 'react'

export const LoginScreen = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading}] = useLoginMutation()

    const {userInfo} = useSelector((state)=> state.auth)

    useEffect(()=> {
        if (userInfo) {
            navigate("/")
        }
    }, [ navigate, userInfo])

    const submitHandler = async(e) => {
        e.preventDefault()
        try {
            const res = await login({ email, password}).unwrap()
            dispatch(setCredentials({...res}))
            navigate("/")
        } catch (error) {
            console.log(err?.data?.message || err.error)
        }
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
