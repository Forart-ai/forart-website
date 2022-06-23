import React from 'react'
import Navbar from './navbar'

import TopBackground from '../../image/top/TopBackground.svg'
import Underline from '../../image/top/underline.png'
import {  styled, Typography } from '@mui/material'
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
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
    align-items: center;
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
  
  img{
    position: absolute;
  }



  ${({ theme }) => theme.breakpoints.down('sm')} {
    img {
      width: 100px;
      top: 126px;
      left: -30px;
    }
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    img {
      top: 155px;
      left: -30px;
    }
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    img {
      top: 210px;
      left: -30px;
    }
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    img {
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

  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 50px;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
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

  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 60px;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
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

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: row;
  }
`

const CustomizeButton = styled('div')`
  text-align: center;
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: #000000;
  text-transform: capitalize;
  background-image: linear-gradient(90deg, #00A1FF 0%, #00FF8F 100%);
  padding: 14px 0px;
  width: 150px;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.2s linear 0s;
  font-size: 16px;
  cursor: pointer;

  &:before {
    content: "➡";
    font-size: 15px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    top: 0;
    opacity: 0;
    height: 100%;
    width: 40px;
    transition: all 0.2s linear 0s;
  }

  &:hover {
    text-indent: -20px;

    &:before {
      opacity: 1;
      text-indent: 0px;
    }
  }
`


const Top: React.FC = () => {

  return (
    <Wrapper theme={ForartTheme}>
      <div className="filter">
        <Navbar />
      </div>

      <Container>

        <Info>
          <Title>
            <img src={Underline} />
            <Slogan >Web 3.0</Slogan>
            <Highlight  >AI-Powered</Highlight>
            <Slogan >Social <span>NFT</span></Slogan>

            <CustomizeButton className={'cover'}>Launch Dapp</CustomizeButton>
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
