import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CloseComponents from './CloseComponents'
import HomeTableComponent from './HomeTableComponent'
import ContactComponents from './ContactComponents'

const NavigationComponents = () => {
  return (
    <div>
      


      <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeTableComponent/>}/>
      <Route path="/close" element={<CloseComponents/>}/>
      <Route path="/contact" element={<ContactComponents/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  )
}

export default NavigationComponents
