import React from 'react'
import styled from 'styled-components'
import Idea from '../../image/roadmap/idea.png'
import Arrow from '../../image/roadmap/arrow.png'
import Search from '../../image/roadmap/search.png'
import Design from '../../image/roadmap/design_nor.png'
import CheckBoxIcon from '../../image/roadmap/check-mark-button.png'

const Wrapper = styled.div`
  width: 100%;
  min-height: 700px;
  margin: 150px 0;
  //padding: 0 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 1100px) {
    height: fit-content;
  }
`

const RoadmapContainer = styled.div`
  max-width: 1200px;
  width: calc(100% - 40px);
  margin-left: auto;
  margin-right: auto;
`


const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;


  .title {
    text-align: center;
    font-size: 3.5em;
    background: linear-gradient(90deg,  #4effd2, #3efff6 40%, #3376ff);
    -webkit-background-clip: text;
    color: transparent;
  }
  
  @media screen and (max-width: 1100px) {
  
  }
`


const ItemBorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  width: 100%;



  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }

`


const ItemContainer = styled.div`
  width: 272px;
  height: auto;  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`

const IconArea = styled.div`
  position: relative;
  width: 100%;
  height: 124px;
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
    height: 200px;
  }
`

const InfoArea = styled.div`
  width: 100%;
  text-align: left;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  
`

const Row = styled.div<{ isChecked? : boolean}>`
  font-size: 1.4em;
  margin-top: 18px;
  display: flex;
  align-items: flex-start;
  
  .empty {
    width: 35px;
  }

  ${props => props.isChecked && `
    img {
      height: 20px;
      width: 20px;
      margin-right: 15px;
    }`
}
  
  .info {
    color: ${props => props.isChecked ? '#2FD709' : '#fff'};
    font-weight: 100;
    font-family: GothamRndMedium;
  }
`

type mapItem = {
  icon:any
  year:string
  describe:string
  title: string
  label: any[]
}


const Roadmap: React.FC = () => {

  const items: mapItem[] = [
    {
      icon: Idea,
      year:'2021',
      describe:'Q4',
      title:'Milestone 1',
      label:[
        {
          isComplete: true,
          info:'1. Hello World'
        },
        {
          isComplete: true,
          info:'2. (Beta) NFT Marketplace'
        },
        {
          isComplete: false,
          info:'3.Genesis-NFT launch'
        }
      ]
    },
    {
      icon: Idea,
      year:'2021',
      describe:'Q4',
      title:'Milestone 1',
      label:[
        {
          isComplete: true,
          info:'1. Hello World'
        },
        {
          isComplete: true,
          info:'2. (Beta) NFT Marketplace'
        },
        {
          isComplete: false,
          info:'3.Genesis-NFT launch'
        }
      ]
    },
    {
      icon: Idea,
      year:'2021',
      describe:'Q4',
      title:'Milestone 1',
      label:[
        {
          isComplete: true,
          info:'1. Hello World'
        },
        {
          isComplete: true,
          info:'2. (Beta) NFT Marketplace'
        },
        {
          isComplete: false,
          info:'3.Genesis-NFT launch'
        }
      ]
    },
    {
      icon: Idea,
      year:'2021',
      describe:'Q4',
      title:'Milestone 1',
      label:[
        {
          isComplete: true,
          info:'1. Hello World'
        },
        {
          isComplete: true,
          info:'2. (Beta) NFT Marketplace'
        },
        {
          isComplete: false,
          info:'3.Genesis-NFT launch'
        }
      ]
    },


  ]
  return (
    <div className="section" id="Roadmap">
      <Wrapper>
        <RoadmapContainer>
          <Title>
            <div className="title">Roadmap</div>
          </Title>
          <ItemBorder>
            {
              items.map((item, index) => (
                <ItemContainer key={index}>
                  <IconArea>
                    <div className="describe"> {item.describe} </div>
                    <div className="title"> {item.title} </div>

                  </IconArea>
                  <InfoArea >
                    {
                      item.label.map((road, index) => (
                        <Row key={index} isChecked={road.isComplete}>
                          {
                            road.isComplete ? <img src={CheckBoxIcon} /> : <div className="empty" />
                          }
                          <div className="info"> {road.info} </div>
                        </Row>
                      ))
                    }
                  </InfoArea>
                </ItemContainer>
              ))

            }
          </ItemBorder>
        </RoadmapContainer>
      </Wrapper>
    </div>
  )
}

export default Roadmap
