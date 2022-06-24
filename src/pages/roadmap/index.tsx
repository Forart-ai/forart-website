import React from 'react'
import Wave from '../../image/roadmap/wave.png'
import { styled } from '@mui/material'

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  //background: url(${Wave}) no-repeat center #F0F5FF;
  background-color: #F0F5FF;
  background-size: cover;


 
`

const RoadmapContainer = styled('div')`
  max-width: 1200px;
  width: calc(100% - 40px);
  margin-left: auto;
  margin-right: auto;
`



const ItemBorder = styled('div')`
  display: flex;
  justify-content: space-between;
  color: #fff;
  width: 100%;



  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }

`


const ItemContainer = styled('div')`
  width: 220px;
  height: auto;  
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`

const IconArea = styled('div')`
  position: relative;
  width: 100%;
  height: 110px;
  max-width: 308px;

  background: #060c21;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  
  &:before {
    content: "";
    border-radius: 10px;
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -2;
    filter: blur(10px);
  }
  
  &:before, &:after {
    background: linear-gradient(60deg, #3376ff, #3efff6 65%, #4effd2);
  }
  
  
  .describe{
    font-size: 1.8em;
  }
  
  .title {
    font-size: 1.6em;
  }
  
  img {
    width: 100%;
  }

  @media screen and (max-width: 1100px) {
    height: 100px;
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


const Row = styled('div')<{ isChecked? : boolean}>`
  font-size: 1.3em;
  margin-top: 18px;
  display: flex;
  align-items: baseline;
  font-family: GothamRndMedium;

  .empty {
  }

  ${props => props.isChecked && `
    img {
      height: 20px;
      width: 20px;
      margin-right: 15px;
    }`
}
  
  .isComplete{
    display: flex;
    align-items: baseline;

    .info {
      color: ${props => props.isChecked ? '#2FD709' : '#fff'};
      font-weight: 100;
    }
  }
  
  .notComplete {
    margin-left: 35px;
  }
  
  
`


const Roadmap: React.FC = () => {


  return (
    <Wrapper>
      <Title>
        <div className="title">Roadmap</div>
      </Title>


      {/*<RoadmapContainer>*/}
      {/*  <Title>*/}
      {/*    <div className="title">Roadmap</div>*/}
      {/*  </Title>*/}
      {/*  <ItemBorder>*/}
      {/*    {*/}
      {/*      items.map((item, index) => (*/}
      {/*        <ItemContainer key={index}>*/}
      {/*          <IconArea>*/}
      {/*            <div className="describe"> {item.describe} </div>*/}
      {/*            <div className="title"> {item.title} </div>*/}

      {/*          </IconArea>*/}
      {/*          <InfoArea >*/}
      {/*            {*/}
      {/*              item.label.map((road, index) => (*/}
      {/*                <Row key={index} isChecked={road.isComplete}>*/}
      {/*                  {*/}
      {/*                    road.isComplete ? (*/}
      {/*                      <div className="isComplete">*/}
      {/*                        <img src={CheckBoxIcon} />*/}
      {/*                        <div className="info"> {road.info} </div>*/}
      {/*                      </div>*/}
      {/*                    ) :*/}
      {/*                      <div className="notComplete">*/}
      {/*                        <div className="info"> {road.info} </div>*/}
      {/*                      </div>*/}
      {/*                  }*/}
      {/*                </Row>*/}
      {/*              ))*/}
      {/*            }*/}
      {/*          </InfoArea>*/}
      {/*        </ItemContainer>*/}
      {/*      ))*/}

      {/*    }*/}
      {/*  </ItemBorder>*/}
      {/*</RoadmapContainer>*/}
    </Wrapper>
  )
}

export default Roadmap
