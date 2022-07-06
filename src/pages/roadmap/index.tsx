import React from 'react'
import Wave from '../../image/roadmap/wave.png'
import { styled } from '@mui/material'
import RoadmapImg from '../../image/roadmap/roadmap.png'

const Wrapper = styled('div')`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${Wave}) no-repeat center #F0F5FF ;
  background-size: 100% 100%;
  padding:  0 0 140px 0;
  
  
`

const RoadmapContainer = styled('div')`
  width: 100%;
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
  margin-bottom: 60px;


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
