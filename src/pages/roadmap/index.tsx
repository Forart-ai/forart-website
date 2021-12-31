import React from 'react'
import styled from 'styled-components'
import CheckBoxIcon from '../../image/roadmap/check-mark-button.png'

const Wrapper = styled.div`
  width: 100%;
  min-height: 1000px;
  display: flex;
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
  justify-content: space-between;
  color: #fff;
  width: 100%;



  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }

`


const ItemContainer = styled.div`
  width: 220px;
  height: auto;  
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`

const IconArea = styled.div`
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
    height: 200px;
  }
`

const InfoArea = styled.div`
  width: 100%;
  text-align: left;
  height: auto;
  display: flex;
  flex-direction: column;

`

const Row = styled.div<{ isChecked? : boolean}>`
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
      icon: '',
      year:'2021',
      describe:'Q3',
      title:'2021',
      label:[
        {
          isComplete: true,
          info:'1. Project Kickstart'
        },
        {
          isComplete: true,
          info:'2. Market research'
        }
      ]
    },
    {
      icon: '',
      year:'2021',
      describe:'Q4',
      title:'2021',
      label:[
        {
          isComplete: true,
          info: '1. Deployment of the NFTs Creation Smart Contract to Celo\'s Alfajores'
        },
        {
          isComplete: true,
          info:'2. Launch Style transferred NFT creation on testnet'
        },
        {
          isComplete: false,
          info: '3. Implement of Text-To-NFT Function'
        },
        {
          isComplete: false,
          info: '4. Release NFT Marketplace Function'
        }
      ]
    },
    {
      icon: '',
      year:'2022',
      describe:'Q1',
      title:'2022',
      label:[
        {
          isComplete: false,
          info:'1. Launch CO-NFT Function on Celo and Solana Mainnet'
        },
        {
          isComplete: false,
          info:'2. Implement of Social NFT'
        },
        {
          isComplete: false,
          info: '3. CO-NFTs Public Sale'
        }
      ]
    },
    {
      icon: '',
      year:'2022',
      describe:'Q2',
      title:'2022',
      label:[
        {
          isComplete: false,
          info:'1. SaaS service API deployment.'
        },
        {
          isComplete: false,
          info:'2. Launch Social NFT Function on CELO and Solana Mainnet'
        },
        {
          isComplete: false,
          info:'3. Launch Text-To-NFT Function on Mainnet'
        }
      ]
    },
    {
      icon: '',
      year:'2022',
      describe:'Q3',
      title:'2022',
      label:[
        {
          isComplete: false,
          info:'1. Launch Functions on multi-chains'
        },
        {
          isComplete: false,
          info:'2. Implement of Forart functions with Metaverse'
        },
        {
          isComplete: false,
          info:'3. IDO'
        },
        {
          isComplete: false,
          info:'4. Listing'
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
                            road.isComplete ? (
                              <div className="isComplete">
                                <img src={CheckBoxIcon} />
                                <div className="info"> {road.info} </div>
                              </div>
                            ) :
                              <div className="notComplete">
                                <div className="info"> {road.info} </div>
                              </div>
                          }
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
