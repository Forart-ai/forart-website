import React from 'react'
import Top from '../top'
import Chains from '../chains'
import Mint from '../AiPower'
import CONFT from '../conft'
import Artist from '../artist'
import JoinUs from '../joinUs'
import PartnershipPage from '../partnership'
import NewsPage from '../news'
import Roadmap from '../roadmap'


const Home:React.FC = () => {
  return (
    <>
      <Top />
      <Chains />
      <Mint />

      <CONFT />
      <Artist />
      <JoinUs />
      <PartnershipPage />
      <NewsPage />
      <Roadmap />
    </>
  )
}

export default Home
