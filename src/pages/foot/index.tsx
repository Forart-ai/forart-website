import React from 'react'
import styled from 'styled-components'
import LogoIcon from '../../image/top/logo.png'
import TwitterIcon from '../../image/foot/twitter.svg'
import GithubIcon from '../../image/foot/github.svg'
import DiscordIcon from '../../image/foot/discord.svg'
import Telegram from '../../image/foot/telegram.svg'
import Email from '../../image/foot/email.svg'


const FootContent = styled.div`
  position: relative;
  text-align: center;
  background: linear-gradient(60deg, #F0F5FF 0%, #F0F5FF 100%);
  color: white;

  .header {

  }

  

  .inner-header {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .flex { /*Flexbox for containers*/
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .waves {
    position: relative;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px; /*Fix for safari gap*/
    min-height: 100px;
    max-height: 150px;
  }

  .content {
    position: relative;
    height: 20vh;
    text-align: center;
    background-color:rgb(79, 0, 139);
  }

  /* Animation */

  .parallax > use {
    animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
  }

  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }

  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }

  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }

  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }

  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }
  /*Shrinking for mobile*/
  @media (max-width: 768px) {
    .waves {
      height: 40px;
      min-height: 40px;
    }

    .content {
      height: 30vh;
    }

    h1 {
      font-size: 24px;
    }
  }

`

const FootMain = styled.div`
  max-width: 1400px;
  width: calc(100% - 40px);
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 50px;
`

const ProjectIntroduce = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 250px;

  figure {
    display: flex;
    flex-direction: column;
    max-width: 368px;
    color: #61dafb;
    font-size: 1.2em;
    text-align: left;

    img {
      width: 176px;
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    height: 60vh;
  }

`


const Col = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  .copyright {
    text-align: left;
    color: #42a2bd;
    font-size: 1em;
    margin-top: 20px;
  }
`

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 368px;
  text-align: left;

  .strong-title {
    font-weight: bolder;
    font-size: 1.6em;
    color: #fff;
    margin-bottom: 20px;
  }

  .doc {
    color: #d2fffb;
    font-size: 1.2em;
    font-weight: normal;
    cursor: pointer;
    line-height: 30px;
  }
`

const Line = styled.div`
  border: 1px #1f3979 solid;

`

const Row = styled.div`

  img {
    width: 20px;
    margin-right: 15px;
  }
`

const Foot:React.FC = () => {
  const EXTERNAL_LINKS: Array<{ icon?: any, title: string, link: string }> = [
    { icon: Email, title: 'Email', link: 'mailto:contact@forart.ai' },
    { icon: TwitterIcon, title: 'Twitter', link: 'https://twitter.com/forart_ai' },
    { icon: Telegram, title: 'Telegram', link:'https://t.me/forart_ai' },
    { icon: GithubIcon, title: 'Github', link: 'https://github.com/Forart-ai' },
    { icon: DiscordIcon,  title: 'Discord', link: 'https://discord.gg/RDaUkaW39S' }
  ]

  const DOC_LINKS: Array<{title: string, link: string}> = [
    { title:'Docs', link:'https://simons-mcc.gitbook.io/forart/'  },
    { title:'Medium', link: 'https://medium.com/@Forart.ai'  }
  ]

  return (
    <FootContent >
      <div className="inner-header flex" />

      <div>
        <svg className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(49,10,109,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(84,3,143,0.6)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(198,83,222,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(79, 0, 139)" />
          </g>
        </svg>
      </div>


      <div className="content flex">
        <p>2022.06.24 </p>
      </div>

    </FootContent>
  )
}

export default Foot
