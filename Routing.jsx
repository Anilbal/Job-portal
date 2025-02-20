import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navbar,Footer } from './src/components'
import {Home, Jobs, Login, PageNotFound, Profile, Register} from './src/pages/indexing'
const Routing = () => {
  return (
    <>
    <Router>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<PageNotFound/>}/>
            <Route path='/jobs' element={<Jobs/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default Routing