import React from 'react'
import styled from 'styled-components'
import LogoIcon from '../../image/top/logo.png'
import TwitterIcon from '../../image/foot/twitter.svg'
import GithubIcon from '../../image/foot/github.svg'
import DiscordIcon from '../../image/foot/discord.svg'
import Telegram from '../../image/foot/telegram.svg'
import Email from '../../image/foot/email.svg'


const FootContent = styled.div`
  height: auto;
  min-height: 380px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  padding-bottom: 24px;


  &:before {
    position: absolute;
    width: 100%;
    content: "";
    opacity: .8;
    background-color: #112046;
    height: auto;
    min-height: 380px;
  }
  
  @media screen and (max-width: 1100px) {
    &:before {
      height: auto;
      min-height: 750px;
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

const SCExternalLink = styled.a`
  img {
    width: 45px;
  }

  @media screen and (max-width: 1100px) {
    
    img {
      width: 30px;
    }
  }
`

const Row = styled.div`

  img {
    width: 20px;
    margin-right: 15px;
  }
`

const Foot:React.FC = () => {
  const EXTERNAL_LINKS: Array<{ icon?: any, title: string, link: string }> = [
    { icon: Email, title: 'Email', link: 'mailto://contact@forart.ai' },
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
      <FootMain >
        <Col>
          <ProjectIntroduce >
            <figure>
              <img className="logo" src={LogoIcon} />
              <div>AI-Powered NFT SaaS For Social</div>

            </figure>
            <InfoItem>
              <div className="strong-title">Product</div>
              {
                DOC_LINKS.map((doc, index) => (
                  <a key= {index} href= {doc.link} className= "doc" target="_blank" rel="noreferrer">
                    {doc.title}
                  </a>
                ))
              }
            </InfoItem>

            <InfoItem>
              <div className="strong-title">Community</div>
              {
                EXTERNAL_LINKS.map((item, index) => (
                  <Row key= {index}>
                    <img src={item.icon} />
                    <a  href= {item.link} className= "doc" target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                  </Row>
                ))
              }
            </InfoItem>
          </ProjectIntroduce>
          <Line />
          <div className="copyright">2021 © All Rights Reserved.</div>
        </Col>


      </FootMain>

    </FootContent>
  )
}

export default Foot
