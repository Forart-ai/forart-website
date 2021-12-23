import React from 'react'
import styled from 'styled-components'
import Navbar from './navbar'
import BannerImage from '../../image/top/banner.jpg'
import { Button } from 'antd'
import SolonaIcon from '../../image/top/solana-logo.svg'

import solana from '../../image/incubation/solana.svg'
import celo from '../../image/incubation/celo.svg'
import avax from '../../image/top/avax.svg'


const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  
  .filter {
    height: fit-content;
    //backdrop-filter: blur(4px);
  }
  
  @media screen and (max-width: 1100px) {
    height: 1000px;
  }
`

const Container = styled.div`
  max-width: 1400px;
  height: auto;
  margin: auto;
  padding-top: 150px;


  @media screen and (max-width: 1100px) {
    margin-left: 0;
    height: auto;
    width: 100vw;
  }
`

const Border = styled.div`
  max-width: 1900px;
  width: calc(100% - 40px);
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`

const Info = styled.div`
  width: 65%;

  @media screen and (max-width: 1100px) {
    width: 95%;
  }
`

const Title = styled.div`
  text-align: center;
  width: 100%;

  .slogan {
    font-weight: 600;
    font-size: 3rem;
    color: #fff;
    text-shadow: 0 0 10px #52f6c5,
    0 0 20px #03bcf4,
    0 0 40px #03bcf4,
    0 0 80px #03bcf4,
    0 0 160px #03bcf4;
    user-select: none;
    //-webkit-box-reflect: below 1px linear-gradient(transparent, #0008);
    //line-height: 0.7em;
    //animation: animate 5s linear infinite;
  }

  @keyframes animate {
    0%, 18%, 20%, 50.1%, 60%, 65.1%, 90%, 92% {
      color: #0e3742
    }

    18.1%, 20.1%, 50.1%, 60%, 65.1%, 80%, 90.1%, 100% {
      color: #fff;
      text-shadow: 0 0 10px #03bcf4,
      0 0 20px #03bcf4,
      0 0 40px #03bcf4,
      0 0 80px #03bcf4,
      0 0 160px #03bcf4;
    }

  }

  @media screen and (max-width: 1100px) {
    text-align: center;


    .slogan {
      //width: 100vw;
      font-size: 1.8rem;
      line-height: 50px;
    }
  }

`

const StyledButton = styled(Button)`
  background-image: linear-gradient(to right, #00EBA4, #02A6F5);
  height: 40px;
  border: none;
  font-size: 1.2rem;
  color: white;
  border-radius: 5px;
  
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  
  @media screen and (max-width: 1100px) {
    justify-content: center;
  }
`

const MissionGroup = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`

const Item = styled.div`
  height: 120px;
  width: 450px;
  background: rgba(31, 41, 55, 0.6);
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 30%);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid rgba(85, 102, 128, 0.2);
  margin: 10px;

  @media screen and (max-width: 1100px) {
    width: 340px;
  }
  
`

const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 20px 10px;


  img {
    height: auto;
    width: 15%;
  }
`

const ItemText = styled.div`
  width: 80%;
  text-align: left;
  
  .item-title {
    font-size: 1.5rem;
    color: #fff;
    font-weight: bold;
    letter-spacing: 2px;
  }
  
  .item-detail {
    color: #BEC2CA;
    font-size: 0.9rem;
  }
  `

const BuiltContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  color: #fff;
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  
  span{
    margin-right: 20px;
  }
  
  .built-icons {
    .celo {
      width: 50px;
    }
    .solana {
      margin:0  40px;
      width: 180px;
    }
    .avax {
      width: 160px;
    }
  }
 
  
    
`

type Mission = {
  image: any
  title: string
  detail:string
}

const Top: React.FC = () => {

  // const toApp = () => {
  //   window.location.href='https://app.forart.co'
  // }

  const missions: Mission[] = [
    {
      image: SolonaIcon,
      title: 'Hello World',
      detail: 'The fastest blockchain in the'
    },
    {
      image: SolonaIcon,
      title: 'Hello World',
      detail: 'The fastest blockchain in the world, with 50k TPS'
    },
    {
      image: SolonaIcon,
      title: 'Hello World',
      detail: 'The fastest blockchain in the world, with 50k TPS'
    }
  ]

  return (
    <Wrapper>
      <div className="filter">
        <Navbar />
      </div>

      <Container>
        <Border>
          <Info>
            <Title>
              <div>
                <div className="slogan">Make NFT / Metaverse creation easier and more intresting</div>
                {/*<div className="foot">Built on</div>*/}
              </div>
            </Title>
            <ButtonContainer>
              <a href="https://app.forart.co" target="_blank" rel="noreferrer"><StyledButton>Launch App</StyledButton></a>
            </ButtonContainer>

          </Info>
          <MissionGroup>
            {
              missions.map((mission, index) => (
                <Item key={index}>
                  <ItemContainer>
                    <img src={mission.image} />
                    <ItemText>
                      <div className="item-title">{mission.title}</div>
                      <div className="item-detail">{mission.detail}</div>
                    </ItemText>
                  </ItemContainer>
                </Item>
              ))
            }
          </MissionGroup>

          <BuiltContainer>
            <span>Built On</span>
            <div className="built-icons">
              <img className="celo" src={celo} />Celo
              <img className="solana" src={solana} />
              <img className="avax" src={avax} />
            </div>
          </BuiltContainer>
        </Border>
      </Container>
    </Wrapper>

  )
}

export default Top
