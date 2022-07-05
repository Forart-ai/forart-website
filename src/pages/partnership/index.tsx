import React from 'react'
import { styled } from '@mui/material'
import BigBrain from '../../image/partnership/big-brain.png'
import Star from '../../image/partnership/star.png'
import ChainLink from '../../image/partnership/chainlink.png'
import Slop from '../../image/partnership/slop.png'

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #F0F5FF;
  position: relative;
  box-sizing: border-box;
  padding: 0 0 100px 0;
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


  ${({ theme }) => theme.breakpoints.down('md')} {
    white-space: pre-line;
    word-break: break-word;

  }


`

const Row = styled('div')`
    display: flex;
  justify-content: center;
  align-items: center;
  gap: 5vw;
  padding: 40px 0;
  
  img {
    width: 15vw;
    max-width: 250px;
  }
  
  .star {
    max-width: 130px;
    width: 10vw;

  }
`

const PartnershipPage:React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          <div className={'title'}>Inventors & Partnership</div>
        </Title>
        <Row>
          <img src={BigBrain} alt={'big-brain'} />
          <img className={'star'} src={Star} alt={''} />
          <img src={ChainLink} alt={'chain-link'} />
          <img src={Slop} alt={'slop'} />
        </Row>
      </Container>
    </Wrapper>
  )
}

export default PartnershipPage
