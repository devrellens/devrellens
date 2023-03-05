import react from 'react'
import './App.css'

import Hero from './components/Hero'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Hero />
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default App
