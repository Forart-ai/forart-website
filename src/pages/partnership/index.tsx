import React from 'react'
import { styled } from '@mui/material'
import BigBrain from '../../image/partnership/big-brain.png'
import Star from '../../image/partnership/celo.png'
import ChainLink from '../../image/partnership/chainlink.png'
import Slop from '../../image/partnership/slop.png'

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F0F5FF;
  position: relative;
  box-sizing: border-box;
  min-height: 500px;
  max-height: fit-content;
  overflow: hidden;
`

const Container = styled('div')`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;

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
      font-size: 34px;
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


  ${({ theme }) => theme.breakpoints.down('md')} {
    white-space: pre-line;
    word-break: break-word;

  }


`

const Row = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  gap: 50px;  
  
  img {
    width: 280px;
    height: 90px;
    border: 2px rgba(120,100,230, .5) solid;
    border-radius: .6rem;
    box-sizing: border-box;
    object-fit: contain;
    padding: 10px;
  }
  

  ${({ theme }) => theme.breakpoints.down('lg')} {
    flex-wrap: wrap;
    gap: 10px;
    img {
      width: 45%;
    }

   
  }
`

const PartnershipPage:React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          <div className={'title'}>Inventors & Partnership</div>
        </Title>
        <Row data-aos={'fade-down'} >
          <a href="https://www.bigbrain.holdings/" target="_blank" rel="noreferrer"> <img src={BigBrain} alt={'big-brain'} /></a>
          <a href="https://celostarter.net/" target="_blank" rel="noreferrer"> <img className={'star'} src={Star} alt={''} /> </a>
          <a href="https://chain.link/" target="_blank" rel="noreferrer"> <img src={ChainLink} alt={'chain-link'} /> </a>
          <a href="https://slope.finance/" target="_blank" rel="noreferrer"> <img src={Slop} alt={'slop'} /></a>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default PartnershipPage
