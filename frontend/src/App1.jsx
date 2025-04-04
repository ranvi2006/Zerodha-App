import React from 'react'
import MainPage from './landingKitePage/MainPage'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

export default function App1() {
  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path='/kite' element={<MainPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
