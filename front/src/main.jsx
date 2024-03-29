import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,
        createRoutesFromElements, 
        Route, 
        RouterProvider } from 'react-router-dom'
import store from './store.js'
import {Provider} from "react-redux"
import './index.css'
import { homeScreen } from './screen/homeScreen.jsx'
import { LoginScreen } from './screen/LoginScreen.jsx'
import { RegisterScreen } from './screen/RegisterScreen.jsx'
import { ProfileScreen } from './screen/ProfileScreen.jsx'
import { PrivateRoute } from './components/PrivateRoute.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App/>}>
      <Route index={true} path='/' element={<homeScreen/>}/>
      <Route path="/login" element={<LoginScreen/>}/>
      <Route path="/register" element={<RegisterScreen/>}/>
      <Route path='' element={<PrivateRoute/>}>
        <Route path="/profile" element={<ProfileScreen/>}/>
      </Route> 
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
  </Provider>
)
