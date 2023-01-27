import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Navbar/Menu'
import Home from './components/Home/Home'
import Contacto from './components/Contacto/Contacto'

function RoutesApp() {
  return (
    <div>
        <BrowserRouter>
         <Menu />
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/contacto' element={ <Contacto/> }/>
            </Routes> 
        </BrowserRouter>
    </div>
  )
}

export default RoutesApp