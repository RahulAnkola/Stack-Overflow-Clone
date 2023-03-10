import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestions from './pages/AskQuestions/AskQuestions'
import DisplayQuestion from './pages/Questions/DisplayQuestion'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Auth' element={<Auth/>}></Route>
        <Route path='/Questions' element={<Questions/>}></Route>
        <Route path='/AskQuestions' element={<AskQuestions/>}></Route>
        <Route path='/Questions/:id' element={<DisplayQuestion/>}></Route>
    </Routes>
  )
}

export default AllRoutes