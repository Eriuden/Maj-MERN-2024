import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { homeScreen } from './screen/homeScreen'

function App() {

  return (
    <>
      <Header/>
      <homeScreen/>
    </>
  )
}

export default App
