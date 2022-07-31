import React from 'react'
import { styled } from '@mui/material'
import BigBrain from '../../image/partnership/big-brain.png'
import Star from '../../image/partnership/celo.png'
import ChainLink from '../../image/partnership/chainlink.png'
import Slop from '../../image/partnership/slop.png'
import Kalao from '../../image/partnership/kalao.svg'

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
  max-width: 1200px;
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
  gap: 2rem;
  margin-top: 30px;
  -webkit-column-gap: 2rem;
  flex-wrap: wrap;
  

  .item {
    width: 280px;
    height: 90px;
    border: 2px rgba(120,100,230, .5) solid;
    border-radius: .6rem;
    box-sizing: border-box;
  }
  
 
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 10px;
  }
  

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 45vw);
    gap: 10px;
    
    .item {
      width: 45vw;
      height: 80px;
    }
    

   
  }
`

const PartnershipPage:React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          <div className={'title'}>Investors & Partners</div>
        </Title>
        <Row  >
          <div className={'item'}>
            <a href="https://www.bigbrain.holdings/" target="_blank" rel="noreferrer"> <img src={BigBrain} alt={'big-brain'} /></a>
          </div>
          <div className={'item'}>
            <a href="https://celostarter.net/" target="_blank" rel="noreferrer"> <img className={'star'} src={Star} alt={''} /> </a>
          </div>
          <div className={'item'}>
            <a href="https://chain.link/" target="_blank" rel="noreferrer"> <img src={ChainLink} alt={'chain-link'} /> </a>
          </div>
          <div className={'item'}>
            <a href="https://slope.finance/" target="_blank" rel="noreferrer"> <img src={Slop} alt={'slop'} /></a>
          </div>
          <div className={'item'}>
            <a href="https://marketplace.kalao.io/" target="_blank" rel="noreferrer"> <img src={Kalao} alt={'kalao'} /></a>
          </div>



        </Row>
      </Container>
    </Wrapper>
  )
}

export default PartnershipPage
