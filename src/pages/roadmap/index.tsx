import React from 'react'
import Wave from '../../image/roadmap/wave.png'
import { styled } from '@mui/material'
import RoadmapImg from '../../image/roadmap/roadmap.png'

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: url(${Wave}) no-repeat center #F0F5FF;
  background-size: cover;
`

const RoadmapContainer = styled('div')`
  width: 85%;
  max-width: 1400px; 
  margin: 70px auto 180px auto;
  user-select: none;
  
  img {
    width: 100%;
    object-fit: contain;
  }
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




const Roadmap: React.FC = () => {


  return (
    <Wrapper>
      <Title>
        <div className="title">Roadmap</div>
      </Title>

      <RoadmapContainer>
        <img src={RoadmapImg} />
      </RoadmapContainer>
    </Wrapper>
  )
}

export default Roadmap
