import React from 'react'
import styled from 'styled-components'
import Navbar from './navbar'
import BannerImage from '../../image/top/banner.jpg'
import { Button } from 'antd'
import SolonaIcon from '../../image/top/solana-logo.svg'
import Celo from '../../image/incubation/celo.svg'
import Avax from '../../image/top/avax.png'


const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
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
  width: 80%;


  @media screen and (max-width: 1100px) {
    width: 95%;
  }
`

const Title = styled.div`
  text-align: center;
  width: 100%;

  .slogan {
    font-weight: 600;
    font-size: 4.4em;
    color: #fff;
    user-select: none;
    background: linear-gradient(90deg,  #4effd2, #3efff6 40%, #3376ff);
    -webkit-background-clip: text;
    color: transparent;
    line-height: 1.4em;
   
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
    letter-spacing: 2px;
  }
  
  .item-detail {
    color: #BEC2CA;
    font-size: 0.9rem;
    font-family: GothamRndMedium;

  }
  `

const BuiltContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  
`

const BuiltItems = styled.div`
  display: flex;
  align-items: center;
  margin: 0 30px;
  position: relative;

  .icon-image {
    width: 64px;
    height: 64px;
    background: #1d2025;
    border-radius: 20px;
    padding: 10px;
    position: relative;
    
  }
  
  .info {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    text-align: left;
  }
  
  .name {
    font-size: 1.8em;
  }
  
  .type {
    font-size: 1.4em;
    color: #82858e;
    font-family: GothamRndMedium;
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
      title: ' AI-Powered SaaS',
      detail: ' '
    },
    {
      image: SolonaIcon,
      title: 'CO-NFT',
      detail: ''
    },
    {
      image: SolonaIcon,
      title: 'Social NFT',
      detail: ''
    }
  ]
  const Built: Mission[] = [
    {
      image: Celo,
      title: 'Celo',
      detail: 'wallet'
    },
    {
      image: SolonaIcon,
      title: 'Solona',
      detail: 'Community'
    },
    {
      image: Avax,
      title: 'Avax',
      detail: 'Community'
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
              <div className="slogan">The First AI-Powered NFT</div>
              <div className="slogan"> SaaS for Social</div>
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
            {
              Built.map((item, index) => (
                <BuiltItems key={index}>
                  <img className="icon-image" src={item.image} />
                  <div className="info">
                    <div className="name"> {item.title} </div>
                    <div className="type"> {item.detail} </div>
                  </div>
                </BuiltItems>
              ))
            }

          </BuiltContainer>
        </Border>
      </Container>
    </Wrapper>

  )
}

export default Top
