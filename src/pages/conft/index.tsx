import React from 'react'
import { Box, styled } from '@mui/material'
import Conft from '../../image/conft/co-nft.png'
import SocialNFT from '../../image/conft/social-nft.png'
import Whale from '../../image/conft/whale.png'
import { Boxes } from '../chains/index.style'
import Blur4 from '../../image/blur/blur4.png'
import Blur5 from '../../image/blur/blur5.png'
import Blur6 from '../../image/blur/blur6.png'

import Conft1 from '../../image/conft/index/Rectangle.png'
import Conft2 from '../../image/conft/index/Rectangle-1.png'
import Conft3 from '../../image/conft/index/Rectangle-2.png'

import Card1 from '../../image/conft/social/card1.png'
import Card2 from '../../image/conft/social/card2.png'
import Card3 from '../../image/conft/social/card3.png'
import Mobile from '../../image/conft/social/card4.png'


const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F0F5FF;
  position: relative;
  height: 2250px;
  max-height: fit-content;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    height: 1500px;
  }
`

const Container = styled('div')`
  width: 85%;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;

  
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 95%;
  }
`

const Title = styled('div')`
  width: 100%;
  white-space: nowrap;
  margin-bottom: 3rem;




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
    font-family: d-din-bold;
    font-size: 22px;

    ${({ theme }) => theme.breakpoints.down('md')} {
      font-size: 16px;
    }
  }
  
  
`

const Item = styled('div')<{blur?: any}>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background: url(${({ blur }) => blur}) no-repeat top;
  background-size: 50%;
  margin-top: 100px;
  margin-bottom: 5rem;
`

const CoNftImage = styled('div')`
  width: 100%;
  max-height: 550px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;


  img {
    max-width: 320px;
    width: 50%;
    object-fit: contain;
  }

  .stairs {
    position: absolute;
    width: 40%;
    max-width: 320px;
  }
  
  .stairs1 {
   left: 25%;
  }

  .stairs3{
    right: 20%;
    
  }
  
  .stairs2 {
    position: relative;
    top: 80px;
  }
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    .stairs1 {
      left:0;
    }
    .stairs2 {
      top: 38px;
      right: 5%;
    }

    .stairs3{
      right: 0%;

    }
  }
  
`

const SocialImages = styled('div')`
  width: 100%;
  max-height: 450px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  
  img {
    max-width: 400px;
    width: 60%;
    object-fit: contain;
  }
  
  .card {
    position: absolute;
    width: 40%;
    max-width: 320px;
  }
  
  .mobile {
    position: relative;
  }

  .card1 {
    left: 16%;
    top: 10%;
  }

  .card2 {
    right: 15%;
  }

  .card3 {
    bottom: 3%;
    right: 17%;
  }


  ${({ theme }) => theme.breakpoints.down('md')} {
    .card1 {
      left: 0;
      top: 10%;
    }

    .card2 {
      right: 0;
    }

    .card3 {
      bottom: 3%;
      right: 0;
    }
  }
`

const WhaleImage = styled('div')`
  
  img {
    width: 80%;

  }
`

const CONFT: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Item blur={Blur6}>
          <Title>
            <div className="title">CO-NFT</div>
            <div className="sub-title">Create NFTs together with artists and &apos;Create to earn&apos;</div>
          </Title>
          <CoNftImage>
            <img className={'stairs stairs1'}
              src={Conft1}
              data-aos="fade-down"
              data-aos-delay="500"
            />
            <img className={'stairs stairs2'}
              src={Conft2}
              data-aos="fade-down"
              data-aos-delay="1000"
            />
            <img className={'stairs stairs3'}
              src={Conft3}
              data-aos="fade-down"
              data-aos-delay="1500"
            />
          </CoNftImage>
        </Item>

        <Item blur={Blur4}>
          <Title>
            <div className="title">Social NFT</div>
            <div className="sub-title">NFT co-creation social platform</div>
          </Title>
          <SocialImages>
            <img className={'card card1'} src={Card1}  data-aos="fade-right" />
            <img className={'mobile'} src={Mobile} data-aos="fade-down"  />
            <img className={'card card2'} src={Card2} data-aos="fade-left" />
            <img className={'card card3'} src={Card3} data-aos="fade-left" />

          </SocialImages>
        </Item>

        <Item blur={Blur5}>
          <Title>
            <div className="title">Talking Whale</div>
            <div className="sub-title">Create NFTs together with artists and &apos;Create to earn&apos;</div>
          </Title>
          <WhaleImage data-aos="fade-down"     data-aos-offset="500">
            <img src={Whale}  />
          </WhaleImage>
        </Item>

      </Container>
    </Wrapper>
  )
}

export default CONFT
