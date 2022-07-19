import React from 'react'
import styled from 'styled-components'
import LogoIcon from '../../image/top/logo.png'
import telegram from '../../image/foot/telegram.png'
import twitter from '../../image/foot/twitter.png'
import DiscordIcon from '../../image/top/discord.svg'

// import Email from '../../image/top/email.svg'

// function scrollToPart(anchorName: string) {
//   if (anchorName) {
//     const anchorElement = document.getElementById(anchorName)
//     if (anchorElement) {
//       anchorElement.scrollIntoView(
//         { behavior: 'smooth', block: 'center' }
//       )
//     }
//   }
// }

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1600px;
  width: 90%;
  justify-content: space-between;
  height: 70px;
  //position: fixed;
  //background-color: black;
  z-index: 999;
  
  
`



const Logo = styled.div`
  width: 130px;
  background-size: 100%;

  img {
    width: 100%;
  }
  

`

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 450px;

  li {
    list-style: none;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    
    a{
      color: white;
    }
    
  
  }

  
`

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo className="logo">
        <img src={LogoIcon} />
      </Logo>
      <NavLinksContainer id="NavLinksContainer">
        <li />
        <li />
        <li />
        <li />
        {/*<li><a href="https://app.forart.ai/" target="_blank" rel="noreferrer">Dapp</a></li>*/}
        <li><a href="https://simons-mcc.gitbook.io/forart/" target="_blank" rel="noreferrer">White Paper</a></li>
        <li><a href="https://medium.com/@Forart.ai" target="_blank" rel="noreferrer">Medium</a></li>
        {/*<li><a onClick={() => scrollToPart('MetaPlus')}>MetaPlus</a></li>*/}
        {/*<li><a onClick={() => scrollToPart('Airdrop')}>Airdrop</a></li>*/}
        {/*<li><a onClick={() => scrollToPart('Roadmap')}>Roadmap</a></li>*/}

        {/*<li><a href={'https://twitter.com/forart_ai'} target="_blank" rel="noreferrer"><img className="twitter" src={twitter} /></a></li>*/}
        {/*<li><a href={'https://discord.gg/RDaUkaW39S'} target="_blank" rel="noreferrer"><img className="discord" src={DiscordIcon} /></a></li>*/}

        {/*<li><a href={'mailto://contact@forart.ai'} target="_blank" rel="noreferrer"><img className="twitter" src={Email} /></a></li>*/}

      </NavLinksContainer>
    </NavbarContainer>
  )
}

export default Navbar

