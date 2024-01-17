import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo: localStorage.getItem("userInfo") ? JSON.parse
    (localStorage.getItem("userInfo")) : null
}

const sliceAuth = createSlice({
name: "auth",
initialState,
reducers: {
    setCredentials: (state, action) => {
        state.userInfo = action.payload
        localStorage.setItem("userInfo", JSON.stringify(action.payload))
    },
    logout: (state, action) => {
        state.userInfo = null 
        localStorage.removeItem("userInfo")
    }
}
})

export const authSlice = () => {
  return (
    <div>authSlice</div>
  )
}
