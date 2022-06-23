import React from 'react'
import { styled } from '@mui/material'
import Conft from '../../image/conft/cuttedpng.png'





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
    width: 70%;
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




const ItemBorder = styled('div')`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding: 0 60px;

  //background-size: contain;



`

const ItemContent = styled('div')`
  width: 350px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 50px 50px 50px;
  
  img {
    width: 200px;
    max-width: 230px;
    object-fit: contain;
  }
  
  .detail{
    font-family: GothamRndMedium;
    font-size: 1.4em;
    color: white;
    opacity: .7;
    margin-top: 18px;
  }
  
  
`




const CONFT: React.FC = () => {

  return (
    <Wrapper>
      <Container>
        <Title>
          <div className="title">CO-NFT</div>
          <div className="sub-title">Create NFTs together with artists and ‘Create to earn’</div>
        </Title>
        <img src={Conft} />

        <Title>
          <div className="title">Social NFT</div>
          <div className="sub-title">NFT co-creation social platform</div>
        </Title>
        <img src={Conft} />

        <Title>
          <div className="title">Talking Whale</div>
          <div className="sub-title">Create NFTs together with artists and ‘Create to earn’</div>
        </Title>
        <img src={Conft} />

      </Container>
    </Wrapper>
  )
}

export default CONFT
