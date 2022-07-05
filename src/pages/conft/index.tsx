import React from 'react'
import { Box, styled } from '@mui/material'
import Conft from '../../image/conft/co-nft.png'
import SocialNFT from '../../image/conft/social-nft.png'
import Whale from '../../image/conft/whale.png'
import { Boxes } from '../chains/index.style'





const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #F0F5FF;
  position: relative;



`

const Container = styled('div')`
  width: 85%;
  max-width: 1400px;
  margin: 0 auto;

  img {
    width: 60%;
    max-width: 700px;
  }
`

const Title = styled('div')`
  width: 100%;
  white-space: nowrap;
  margin-bottom: 20px;




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

const Item = styled('div')`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`




const CONFT: React.FC = () => {

  return (
    <Wrapper>

      <Container>
        <Item>
          <Title>
            <div className="title">CO-NFT</div>
            <div className="sub-title">Create NFTs together with artists and ‘Create to earn’</div>
          </Title>
          <img src={Conft} />
        </Item>

        <Item>
          <Title>
            <div className="title">Social NFT</div>
            <div className="sub-title">NFT co-creation social platform</div>
          </Title>
          <img src={SocialNFT} />
        </Item>

        <Item>
          <Title>
            <div className="title">Talking Whale</div>
            <div className="sub-title">Create NFTs together with artists and ‘Create to earn’</div>
          </Title>
          <img src={Whale} />
        </Item>

      </Container>
    </Wrapper>
  )
}

export default CONFT
