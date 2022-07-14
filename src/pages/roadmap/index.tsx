import React from 'react'
import Wave from '../../image/roadmap/wave.png'
import { styled, useMediaQuery, useTheme } from '@mui/material'
import RoadmapImg from '../../image/roadmap/roadmap.png'
import RoadmapMobileImg from '../../image/roadmap/roadmap-mobile.png'


const Wrapper = styled('div')`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${Wave}) no-repeat bottom #F0F5FF  ;
  background-size: 100% 100% ;
  padding:  50px 0 140px 0;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.down('md')} {
    background-size: 200% 40%;
  }
`

const RoadmapContainer = styled('div')`
  width: 100%;
  user-select: none;
  
  img {
    width: 100vw;
    height: 500px;
    object-fit: cover;
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

  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Wrapper>

      <Title>
        <div className="title">Roadmap</div>
      </Title>

      <RoadmapContainer>
        { !mobile && <img src={RoadmapImg} />}
        { mobile &&  <img src={RoadmapMobileImg} />}
      </RoadmapContainer>
    </Wrapper>
  )
}

export default Roadmap
