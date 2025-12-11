import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { UserLayout } from './components/UserLayout'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App