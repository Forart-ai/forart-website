import React from 'react'
import './App.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Top from './pages/top/index'
import Foot from './pages/foot'
import Chains from './pages/chains'
import Mint from './pages/AiPower/index'
import Roadmap from './pages/roadmap'
import CONFT from './pages/conft'
import './font/font.css'
import JoinUs from './pages/joinUs'
import PartnershipPage from './pages/partnership'
import Artist from './pages/artist'
import NewsPage from './pages/news'

const App = () => {
  AOS.init({
    duration: 1200,
    easing: 'ease-in-sine',
    delay: 200,
  })

  return (
    <div className="App" >
      <Top />
      <Chains />
      <Mint />

      <CONFT />
      <Artist />
      <JoinUs />
      <PartnershipPage />
      <NewsPage />
      <Roadmap />
      <Foot />
    </div>
  )
}

export default App
