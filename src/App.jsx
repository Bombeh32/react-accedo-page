import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div style={{width: '100%', maxWidth: '100%'}}>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
