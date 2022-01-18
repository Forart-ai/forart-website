import React from 'react'
import styled from 'styled-components'
import LogoIcon from '../../image/top/logo.png'
import telegram from '../../image/top/telegram.png'
import twitter from '../../image/top/twitter.png'
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
  width: 100%;
  justify-content: center;
  height: 70px;
  //position: fixed;
  //background-color: black;
  z-index: 999;
  
  
  @media screen and (max-width: 1100px) {
    width: 100vw;
    height: 12vw;
  }
`

const Wrapper = styled.div`
  width:1300px;
  display: flex;
  height: 72px;
  justify-content: space-between;
  align-items: center;

 

`

const Logo = styled.div`
  width: 130px;
  background-size: 100%;

  img {
    width: 100%;
  }
  
  @media screen and (max-width: 1100px) {
    img {
      width: 80%;
    }
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
    
    img {
      width: 30px;
    }
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }
`

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Wrapper>
        <Logo className="logo">
          <img src={LogoIcon} />
        </Logo>
        <NavLinksContainer id="NavLinksContainer">
          <li><a href="https://app.forart.ai/" target="_blank" rel="noreferrer">Dapp</a></li>
          <li><a href="https://simons-mcc.gitbook.io/forart/" target="_blank" rel="noreferrer">Docs</a></li>
          <li><a href="https://medium.com/@Forart.ai" target="_blank" rel="noreferrer">Medium</a></li>
          {/*<li><a onClick={() => scrollToPart('MetaPlus')}>MetaPlus</a></li>*/}
          {/*<li><a onClick={() => scrollToPart('Airdrop')}>Airdrop</a></li>*/}
          {/*<li><a onClick={() => scrollToPart('Roadmap')}>Roadmap</a></li>*/}
          <li><a href={'https://t.me/forart_ai'} target="_blank" rel="noreferrer"><img className="telegram" src={telegram} /></a></li>
          <li><a href={'https://twitter.com/forart_ai'} target="_blank" rel="noreferrer"><img className="twitter" src={twitter} /></a></li>
          <li><a href={'https://discord.gg/RDaUkaW39S'} target="_blank" rel="noreferrer"><img className="discord" src={DiscordIcon} /></a></li>

          {/*<li><a href={'mailto://contact@forart.ai'} target="_blank" rel="noreferrer"><img className="twitter" src={Email} /></a></li>*/}

        </NavLinksContainer>
      </Wrapper>
    </NavbarContainer>
  )
}

export default Navbar

