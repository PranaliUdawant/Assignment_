import React from 'react'
import Home from './Components/Home'
import Journey from './Components/Journey'
import Features from './Components/Services'
import Services from './Components/Services'
import NewsEvents from './Components/NewsEvents'
import Request from './Components/Request'

function App() {
  return (
    <div 
    style={{backgroundColor: "rgb(0 0 0)"}}
    >
      <Home/>
      <Journey/>
      <Services/>
      <NewsEvents/>
      <Request/>
    </div>
  )
}

export default App