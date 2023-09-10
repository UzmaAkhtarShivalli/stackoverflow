import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Question/Questions'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route exact path='/Auth' element={<Auth />}/>
            <Route exact path='/Questions' element={<Questions />}/>
        </Routes>
    )
}

export default AllRoutes
