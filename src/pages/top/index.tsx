import React from 'react'
import Navbar from './navbar'
import SolonaIcon from '../../image/top/solana-logo.svg'
import Celo from '../../image/incubation/celo.svg'
import Avax from '../../image/top/avax.png'
import COIcon from '../../image/top/top1.png'
import SaaSIcon from '../../image/top/top2.png'
import SocialIcon from '../../image/top/top3.png'
import Binance from '../../image/top/Binance.png'
import Cronos from '../../image/top/cronos.svg'
import TopBackground from '../../image/top/TopBackground.svg'
import Underline from '../../image/top/underline.png'
import TopTitle from '../../image/top/TopTitle.png'
import { Box, styled, Typography } from '@mui/material'
import ForartTheme from '../../contexts/config/dark'





const Wrapper = styled('div')`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(${TopBackground}) no-repeat center;
  background-size: contain;
  background-color: rgb(27,0,53);
  .filter {
    height: fit-content;
    //backdrop-filter: blur(4px);
  }
  
  
`

const Container = styled('div')`
  max-width: 1800px;
  width: 85%;
  height: auto;
  margin: auto;
`



const Info = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
  }
  
  
  
`

const Title = styled('div')`
  font-family: Righteous-Regular;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  white-space: nowrap;
  position: relative;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    img {
      position: absolute;
      top: 210px;
      left: -30px;
    }
  }

  ${({ theme }) => theme.breakpoints.between('sm','xl')} {
    img {
      position: absolute;
      top: 210px;
      left: -30px;
    }
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    img {
      position: absolute;
      top: 280px;
      left: -30px;
    }
  }
  
  
  
  
`

const Slogan = styled('div')`
  font-family: Righteous-Regular;
  
  span {
    color: #00EBA4;
  }
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 40px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','xl')} {
    font-size: 70px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 90px;
  }
`

const Highlight = styled('div')`
  font-family: Righteous-Regular;


  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 50px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','xl')} {
    font-size: 80px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 110px;
  }
`

const DataValue = styled(Typography)`
  font-family: Righteous-Regular;
`

const DataLabel = styled(Typography)`
  font-family: d-din;
`


const DataContainer = styled('div')`
  color: #ffffff;
  line-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
`

const CustomizeButton = styled('div')`
  width: 200px;
  height: 60px;
  background: #58a;

    position: relative;
  ::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    right: 0;
    bottom: 0;
    border: 10px solid rgb(27,0,53);
    border-top-color: transparent;
    border-left-color: transparent;
  }
  ::after{
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    left: 0;
    top: 0;
    border: 10px solid rgb(27,0,53);
    border-bottom-color: transparent;
    border-right-color: transparent;
  }

 
`

const Item = styled('div')`
  height: 120px;
  width: 450px;
  background: rgba(31, 41, 55, 0.6);
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 30%);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid rgba(85, 102, 128, 0.2);
  margin: 10px;

 
  
`

const ItemContainer = styled('div')`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 20px 10px;


  img {
    height: auto;
    width: 18%;
  }
`

const ItemText = styled('div')`
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

  }
  `

const BuiltContainer = styled('div')`
  margin-top: 100px;
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width: 1100px) {
    justify-content: space-around;
    align-items: center;
    margin: 30px auto;
  }
  
`

const BuiltItems = styled('div')`
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
      image: COIcon,
      title: 'CO-NFT',
      detail: ' '
    },
    {
      image: SaaSIcon,
      title: 'AI-Powered SaaS',
      detail: ''
    },
    {
      image: SocialIcon,
      title: 'Social NFT',
      detail: ''
    }

  ]
  const Built: Mission[] = [

    {
      image: SolonaIcon,
      title: 'Solana',
      detail: 'Chain'
    },
    {
      image: Avax,
      title: 'Avax',
      detail: 'Chain'
    },
    {
      image: Binance,
      title: 'Binance',
      detail: 'Smart Chain'
    },
    {
      image: Celo,
      title: 'Celo',
      detail: 'Wallet'
    },
    {
      image: Cronos,
      title: 'Cronos',
      detail: 'Chain'
    },
  ]

  return (
    <Wrapper theme={ForartTheme}>
      {/*<div className="filter">*/}
      {/*  <Navbar />*/}
      {/*</div>*/}

      <Container>

        <Info>
          <Title>
            <img src={Underline} />
            <Slogan >Web 3.0</Slogan>
            <Highlight  >AI-Powered</Highlight>
            <Slogan >Social <span>NFT</span></Slogan>

            <CustomizeButton className={'cover'}>OK</CustomizeButton>
          </Title>


          <DataContainer>
            <div className={'col'}>
              <DataValue sx={{ fontSize: { xs: 40, md: 50, xl: 60 } }}>2333</DataValue>
              <DataLabel sx={{ fontSize: { xs: 20, md: 20, xl: 30 } }}>CO-NFTs</DataLabel>
            </div>

            <div className={'col'}>
              <DataValue sx={{ fontSize: { xs: 40, md: 50, xl: 60 } }}>2048</DataValue>
              <DataLabel sx={{ fontSize: { xs: 20, md: 20, xl: 30 } }}>Creators</DataLabel>
            </div>

            <div className={'col'}>
              <DataValue sx={{ fontSize: { xs: 40, md: 50, xl: 60 } }}>1080</DataValue>
              <DataLabel sx={{ fontSize: { xs: 20, md: 20, xl: 30 } }}>Artist</DataLabel>
            </div>



          </DataContainer>

        </Info>



      </Container>
    </Wrapper>

  )
}

export default Top
