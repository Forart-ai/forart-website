import React from 'react'
import Navbar from './navbar'

import Cube from '../../image/top/cube3.png'

import Underline from '../../image/top/underline.png'
import {  styled, Typography } from '@mui/material'
import ForartTheme from '../../contexts/config/dark'
import { useOverviewData } from '../../hooks/query/useOverviewData'
import GradientButton from '../../image/button.png'
import useMintedAmount from '../../hooks/query/aiGeneralQuery'
import CountUp from 'react-countup'




const Wrapper = styled('div')`
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(${Cube}) no-repeat center;
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
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    background: url(${Cube}) no-repeat ;
    background-size: 210%;
    background-position: bottom right 28%;
    background-color: rgb(27,0,53);
  }
  
   
`

const Container = styled('div')`
  max-width: 1800px;
  width: 85%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
    justify-content: flex-start;
    align-items: flex-start;
  }
  
`



const Info = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;


  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 50px;
    height: 90%;
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
  transform: scale(0.94);
  //animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  img{
    position: absolute;
    opacity: 0;
    filter: blur(4px);
    animation: fade-in 1s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);

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

  @keyframes scale {
    100% {
      transform: scale(1);
    }
  }

  @keyframes fade-in {
    100% {
    
       opacity: 1;
       filter: blur(0);
     
    }
  }
  
  
`

const Slogan = styled('div')`
  font-family: Righteous-Regular;
  transform: scale(0.94);
  color: #fff;
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  span {
    display: inline-block;
    opacity: 0;
    filter: blur(4px);
    display: flex;
    .highlight {
      color: #00EBA4;
    }
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

  span:nth-child(1) {
    animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(2) {
    animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(3) {
    animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(4) {
    animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  @keyframes scale {
    100% {
      transform: scale(1);
    }
  }

  @keyframes fade-in {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }


`

const Highlight = styled('div')`
  font-family: Righteous-Regular;
  transform: scale(0.94);
  color: #fff;
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  span {
    display: inline-block;
    opacity: 0;
    filter: blur(4px);
  }

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

  span:nth-child(1) {
    animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(2) {
    animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(3) {
    animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(4) {
    animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  @keyframes scale {
    100% {
      transform: scale(1);
    }
  }

  @keyframes fade-in {
    100% {
      opacity: 1;
      filter: blur(0);
    }
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
  margin-top: 40px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: row;
    gap: unset;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`



export const ButtonWithCorner = styled('div')`
  padding: 12px 0px;
  width: 150px;
  font-size: 16px;
  text-decoration: none;
  overflow: hidden;
  background: url(${GradientButton}) no-repeat center;
  background-size: contain;
  color: black;
  text-align: center;
  position: relative;
  cursor: pointer;

  
`

const BlurContainer = styled('div')`
  width: 20%;
  height: 20%;
  max-width: 350px;
  max-height: 350px;
  position: absolute;
  z-index: 3;
  overflow: hidden;
  left: -190px;
  top: 1.4%;

  .blur-purple {
    width: 100%;
    height: 100%;
    background: radial-gradient(closest-side circle, rgba(123,12,140, 1),  rgba(123,12,140, .6),  rgba(123,12,140, .4), transparent);
  }
  
`



const Top: React.FC = () => {
  const { data: overviewData } = useOverviewData()
  const aiGeneralAmount = useMintedAmount()


  return (
    <Wrapper theme={ForartTheme}>

      <BlurContainer >
        <div className={'blur-purple'} />
      </BlurContainer>
      <Container>

        <Info>
          <Title>
            <img src={Underline} />
            <Slogan ><span>Web 3.0</span></Slogan>
            <Highlight  > <span>AI-Powered</span></Highlight>
            <Slogan > <span>Social &nbsp;<div className={'highlight'}>NFT</div></span></Slogan>

            {/*<CustomizeButton className={'cover'}>Launch Dapp</CustomizeButton>*/}


            <a href="https://app.forart.ai/" target="_blank" rel="noreferrer">
              <ButtonWithCorner className={'cover'}>
                Launch Dapp
              </ButtonWithCorner>
            </a>
          </Title>


          <DataContainer>
            <div className={'col'}>
              <DataValue sx={{ fontSize: { xs: 40, md: 50, xl: 60 } }}><CountUp end={overviewData?.created || 0} duration={2.55} separator={','} /> </DataValue>
              <DataLabel sx={{ fontSize: { xs: 20, md: 20, xl: 30 } }}>CO-NFTs</DataLabel>
            </div>

            <div className={'col'}>
              <DataValue sx={{ fontSize: { xs: 40, md: 50, xl: 60 } }}><CountUp end={overviewData?.creator || 0} duration={2.55} separator={','} /></DataValue>
              <DataLabel sx={{ fontSize: { xs: 20, md: 20, xl: 30 } }}>Creators</DataLabel>
            </div>

            <div className={'col'}>
              <DataValue sx={{ fontSize: { xs: 40, md: 50, xl: 60 } }}><CountUp end={aiGeneralAmount?.data || 0} duration={2.55} separator={','} /></DataValue>
              <DataLabel sx={{ fontSize: { xs: 20, md: 20, xl: 30 } }}>AI-Generate</DataLabel>
            </div>
          </DataContainer>

        </Info>



      </Container>
    </Wrapper>

  )
}

export default Top
