import React from 'react'
import { Routes , Route } from 'react-router-dom'
import RegisterUser from './pages/RegisterUser'
import LoginUser from './pages/LoginUser'
import RegisterFoodPartner from './pages/RegisterFoodPartner'
import LoginFoodPartner from './pages/LoginFoodPartner'
import Home from './pages/Home'

const App = () => {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <Routes>
      <Route path='/user/register' element={<RegisterUser/>} />
      <Route path='/user/login' element={<LoginUser/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/foodPartner/register' element={<RegisterFoodPartner/>} />
      <Route path='/foodPartner/login' element={<LoginFoodPartner/>} />
    </Routes>
    </div>

    </>
  )
}

export default App