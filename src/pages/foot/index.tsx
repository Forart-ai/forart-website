import React from 'react'
import LogoIcon from '../../image/top/logo.png'
import TwitterIcon from '../../image/foot/twitter.png'
import GithubIcon from '../../image/foot/github.png'
import DiscordIcon from '../../image/foot/discord.png'
import Telegram from '../../image/foot/telegram.png'
import Email from '../../image/foot/email.png'
import { Box, styled, useMediaQuery, useTheme } from '@mui/material'


const FootContent = styled('div')`
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
    margin-top: -15vh;
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

  .parallax > use:nth-of-type(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }

  .parallax > use:nth-of-type(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }

  .parallax > use:nth-of-type(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }

  .parallax > use:nth-of-type(4) {
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

const Content = styled('div')`
  position: relative;
  height: 30vh;
  max-height: 300px;
  text-align: center;
  background-color:rgb(79, 0, 139);
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 50vh;
   max-height: 600px;
  }
`

const ContentContainer = styled('div')`
  max-width: 1600px;
  width: 85%;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
    width: 95%;
    justify-content: center;
    align-items: flex-start;
    height: fit-content;
    gap: 30px;
  }
`

const Row = styled('div')`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 150px;
  margin-top: 40px;
`

const Col = styled('div')`
  max-width: 36%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;

  .logo {
    width: 120px;
    object-fit: contain;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    max-width: 100%;
    justify-content: flex-start;
  }
`

const Label = styled('div')`
  font-size: 18px;
  font-family: d-din;
  text-align: left;

  a{
    color: white;
  }
`

const LabelBold = styled('div')`
  font-size: 18px;
  font-family: d-din-bold;
`

const Text = styled('div')`
  font-size: 16px;
  font-family: d-din;
  text-align: left;
  
  white-space: nowrap;
`

const Links = styled('div')`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  
  a {
    width: 12%;
    max-width: 40px;
    display: flex;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
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

  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))



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


      <Content>
        <ContentContainer>
          {
            !mobile ? (
              <>
                <Col>
                  <img className={'logo'} src={LogoIcon} />
                  <Box sx={{ display:'flex', flexDirection:'column', alignItems:'flex-start', marginTop:'20px' }}>
                    <Label>AI-powered Social NFT</Label>
                    <Text>©2022 Forart.ai - All Rights Reserved</Text>
                  </Box>

                </Col>

                <Row>
                  <Col>
                    <LabelBold>About</LabelBold>
                    <Label><a href="https://simons-mcc.gitbook.io/forart/" target="_blank" rel="noreferrer">Whitepaper</a></Label>
                    <Label><a href="https://medium.com/@Forart.ai" target="_blank" rel="noreferrer">Medium</a></Label>
                    <Label>&nbsp;</Label>
                  </Col>

                  <Col>
                    <Box sx={{ display:'flex',
                      flexDirection:'column',
                      alignItems:'flex-start',
                      width:'100%',
                      justifyContent: 'flex-start' }}
                    >
                      <LabelBold>Community</LabelBold>
                      <Links>
                        {
                          EXTERNAL_LINKS.map(item => (
                            <a  key={item.title} href={item.link} target="_blank" rel="noreferrer">
                              <img  src={item.icon} alt={item.link} />
                            </a>
                          ))
                        }
                      </Links>
                    </Box>
                  </Col>
                </Row>
              </>
            ): (
              <>
                <Col>

                  <img className={'logo'} src={LogoIcon} />

                  <Box sx={{ display:'flex', flexDirection:'column' }}>
                    <Label>AI-powered Social NFT</Label>
                    <Text>©2022 Forart.ai - All Rights Reserved</Text>
                  </Box>
                </Col>

                <Col>
                  <LabelBold>About</LabelBold>
                  <Label><a href="https://simons-mcc.gitbook.io/forart/" target="_blank" rel="noreferrer">Whitepaper</a></Label>
                  <Label><a href="https://medium.com/@Forart.ai" target="_blank" rel="noreferrer">Medium</a></Label>
                  <Label>&nbsp;</Label>
                </Col>

                <Col>
                  <Box sx={{ display:'flex',
                    flexDirection:'column',
                    alignItems:'flex-start',
                    width:'100%',
                    justifyContent: 'flex-start' }}
                  >
                    <LabelBold>Community</LabelBold>
                    <Links>
                      {
                        EXTERNAL_LINKS.map(item => (
                          <a  key={item.title} href={item.link} target="_blank" rel="noreferrer">
                            <img  src={item.icon} alt={item.link} />
                          </a>
                        ))
                      }
                    </Links>
                  </Box>
                </Col>
              </>
            )

          }
        </ContentContainer>
      </Content>

    </FootContent>
  )
}

export default Foot
