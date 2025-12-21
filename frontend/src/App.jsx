import React from 'react'
import { Routes , Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/user/register' element={<div>User Registration Page</div>} />
      <Route path='/user/login' element={<div>User Login Page</div>} />
      <Route path='/' element={<div>Home Page</div>} />
      <Route path='/foodPartner/register' element={<div>Food Partner Registration Page</div>} />
      <Route path='/foodPartner/login' element={<div>Food Partner Login Page</div>} />
    </Routes>

    </>
  )
}

export default App