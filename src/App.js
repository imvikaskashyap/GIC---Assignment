import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import CatList from './components/CatList/CatList'

const App = () => {
  return (
  <Router>
  <Header/>
  <Routes>
    <Route path='/' element={<CatList/>}/>
  </Routes>

  </Router>
  )
}

export default App
