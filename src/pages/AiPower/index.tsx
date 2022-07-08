import React from 'react'
import SoulCard from '../../image/aiPower/soul-card.png'
import MagicWand from '../../image/aiPower/magic-wand.png'

import {  HalfBoxes } from '../chains/index.style'
import { Box, styled } from '@mui/material'




const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #F0F5FF;
  position: relative;
  padding-bottom: 120px;
  height: 1500px;

  
`

const Container = styled('div')`
  width: 85%;
  max-width: 1400px;
  margin: -50px auto 0 auto;
  
 
`

const Title = styled('div')`
  width: 100%;
  text-align: center;
  white-space: nowrap;


  .title {
    color: #333333;
    font-family: Righteous-Regular;
    font-size: 60px;

    ${({ theme }) => theme.breakpoints.down('md')} {
      font-size: 40px;
    }
  }
  
  .sub-title {
    color: #1450B4;
    font-family: d-din;
    font-size: 22px;

    ${({ theme }) => theme.breakpoints.down('md')} {
      font-size: 16px;
    }
  }

  

 
`

const ItemBorder = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
margin-top: 50px;
 

`

const ItemMessage = styled('div')`
  max-width: 600px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;

  .title {
    color: #333333;
    font-family: Righteous-Regular;
    white-space: nowrap;

    font-size: 40px;

    ${({ theme }) => theme.breakpoints.down('md')} {
      font-size: 30px;
    }
  }

  .text {
    color: #1450B4;
    font-family: d-din;
    font-size: 20px;

    ${({ theme }) => theme.breakpoints.down('md')} {
      font-size: 18px;
    }
  }


`

const ItemImage = styled('div')`
  width: 55%;
  position: relative;
  z-index: 2;
  
 


  img {
    width: 70%;
    object-fit: contain;
  }


`

const BlurContainer1 = styled('div')`
    width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
overflow: hidden;

  .blur-blue {
    left: 10%;
    position: absolute;
    width: 80%;
    height: 80%;
    background: radial-gradient(closest-side circle, rgba(136,209,251,1),  rgba(136,209,251, .6),  rgba(136,209,251, .3), transparent);
  }

  .blur-green {
    position: absolute;
    width: 80%;
    height: 80%;
    top: -10px;
    left: 40%;
    background: radial-gradient(closest-side circle, rgba(137,243,209,1),  rgba(137,243,209, .6),  rgba(137,243,209, .2), transparent);
  }

  .blur-yellow {
    position: absolute;
    width: 80%;
    height: 80%;
    left: 30%;
    top: 40%;
    background: radial-gradient(closest-side circle, rgba(238,226,192,1),  rgba(238,226,192, .6),  rgba(238,226,192, .2), transparent);
  }
`

const BlurContainer2 = styled('div')`
    width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;


  .blur-blue {
    left: 0%;
    position: absolute;
    width: 80%;
    height: 80%;
    background: radial-gradient(closest-side circle, rgba(136,209,251,1),  rgba(136,209,251, .6),  rgba(136,209,251, .3), transparent);
  }


  .blur-yellow {
    position: absolute;
    width: 80%;
    height: 80%;
    left: -13%;
    top: 40%;
    background: radial-gradient(closest-side circle, rgba(238,226,192,1),  rgba(238,226,192, .6),  rgba(238,226,192, .2), transparent);
  }
`




const AiPower: React.FC = () => {

  return (
    <Wrapper >
      <Box sx={{ display:'flex', justifyContent:'flex-end',  }}>
        <HalfBoxes color={'#00FF8F'} />
      </Box>
      <Container>
        <Title >
          <div className="title">AI-Powered NFT</div>
          <div className="sub-title">Presenting distinctive NFTs through AI</div>
        </Title>

        <ItemBorder>
          <ItemMessage  data-aos={'fade-right'}>
            <div className="title">Art soul card</div>
            <div className="text">Using Neural Style Transferring Tech for combining different NFTs to afully new one.</div>
          </ItemMessage>
          <ItemImage  data-aos={'fade-left'}>
            <Box sx={{ display:'flex', justifyContent: 'flex-end' }}>
              <BlurContainer1>
                <div className={'blur-blue'} />
                <div className={'blur-green'} />
                <div className={'blur-yellow'} />
              </BlurContainer1>

              <img src={SoulCard} />
            </Box>
          </ItemImage>

        </ItemBorder>

        <ItemBorder>

          <ItemImage data-aos={'fade-right'}>

            <Box sx={{ display:'flex', justifyContent: 'flex-start' }}>
              <BlurContainer2>
                <div className={'blur-blue'} />
                <div className={'blur-yellow'} />
              </BlurContainer2>
              <img src={MagicWand} />
            </Box>
          </ItemImage>

          <ItemMessage data-aos={'fade-left'}>
            <div className="title">Magic wand</div>
            <div className="text">Using Neural Style Transferring Tech for combining different NFTs to afully new one.</div>
          </ItemMessage>
        </ItemBorder>
      </Container>
    </Wrapper>
  )
}

export default AiPower
