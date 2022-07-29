import React from 'react'
import Navbar from './navbar'

import Cube from '../../image/top/cube3.png'

import Underline from '../../image/top/underline.png'
import {  styled, Typography } from '@mui/material'
import ForartTheme from '../../contexts/config/dark'
import { useOverviewData } from '../../hooks/query/useOverviewData'
import GradientButton from '../../image/button.png'
import useMintedAmount from '../../hooks/query/aiGeneralQuery'




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
      <div className="filter">
        <Navbar />
      </div>
      <BlurContainer >
        <div className={'blur-purple'} />
      </BlurContainer>
      <Container>

        <Info>
          <Title>
            <img src={Underline} />
            <Slogan >Web 3.0</Slogan>
            <Highlight  >AI-Powered</Highlight>
            <Slogan >Social <span>NFT</span></Slogan>

            {/*<CustomizeButton className={'cover'}>Launch Dapp</CustomizeButton>*/}


            <a href="https://app.forart.ai/" target="_blank" rel="noreferrer">
              <ButtonWithCorner className={'cover'}>
                Launch Dapp
              </ButtonWithCorner>
            </a>
          </Title>


          <DataContainer>
            <div className={'col'}>
              <DataValue sx={{ fontSize: { xs: 40, md: 50, xl: 60 } }}>{overviewData?.created}</DataValue>
              <DataLabel sx={{ fontSize: { xs: 20, md: 20, xl: 30 } }}>CO-NFTs</DataLabel>
            </div>

            <div className={'col'}>
              <DataValue sx={{ fontSize: { xs: 40, md: 50, xl: 60 } }}>{overviewData?.creator}</DataValue>
              <DataLabel sx={{ fontSize: { xs: 20, md: 20, xl: 30 } }}>Creators</DataLabel>
            </div>

            <div className={'col'}>
              <DataValue sx={{ fontSize: { xs: 40, md: 50, xl: 60 } }}>{aiGeneralAmount?.data || 0}</DataValue>
              <DataLabel sx={{ fontSize: { xs: 20, md: 20, xl: 30 } }}>AI-Generate</DataLabel>
            </div>
          </DataContainer>

        </Info>



      </Container>
    </Wrapper>

  )
}

export default Top
