import React from 'react'
import styled from 'styled-components'
import Idea from '../../image/roadmap/idea.png'
import Arrow from '../../image/roadmap/arrow.png'
import Search from '../../image/roadmap/search.png'
import Design from '../../image/roadmap/design_nor.png'
import Launch from '../../image/roadmap/launch.png'


const Wrapper = styled.div`
  width: 100%;
  height: 1300px;
  padding-top: 30px;
  background: radial-gradient(#00EBA4 5%, #000000 45%);
  
  @media screen and (max-width: 1100px) {
    height: fit-content;
  }
`

const RoadmapContainer = styled.div`
  display: flex;
  justify-content: center;
`

const RoadmapBorder = styled.div`

  width: 800px;
  height: 1000px;
  
`

const Title = styled.div`
  font-weight: 600;
  font-size: 38px;
  line-height: 46px;
  color: #fff;
  margin-bottom: 100px;

  span {
    padding: 0 16px;
    font-weight: 600;
    font-size: 65px;
    line-height: 80px;
    color: #00EBA4;
    opacity: .96;
  }
`

const RoadmapItem = styled.div`
  width: 100%;
  height: 250px;
  color: white;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 5px;
  
 

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(90deg,#00EBA4,#02A6F5);
    opacity: .4;
    left: 0;
    top: 0;

  }


  &:nth-child(4) {
    .arrow {
      display: none;
    }
  }
  


`

const LeftArea = styled.div`
  width: 30%;
  height: 100%;
  position: relative;

  .describe {
    width: 145px;
    text-align: center;
    position: absolute;
    bottom: 145px;
    font-weight: 600;
    left: 70px;
  }

  .icon {
    width: 50px;
    padding: 20px;
    border-radius: 90px;
    background: linear-gradient(270deg, #67ebba, #67eaba .34%, #69c2ce 15.61%, #6ba1de 31.22%, #6c87ea 47.25%, #6d75f3 63.72%, #6e6af8 80.92%, #6e66fa);
    position: absolute;
    box-shadow: -5px 5px 5px #212121;
    bottom: 200px;
    right: 55px;
  }

  .arrow {
    position: absolute;
    width: 50px;
    top: 110px;
    right: 75px;
    
   
    
  }
  
`

const RightArea = styled.div`
  width: 500px;
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  position: relative;
  
  .item-title{
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #fff;
    margin: 20px;

  }
  
  .item-detail {
    margin: 20px;
    font-size: 16px;
    line-height: 19px;
    color: #fff;
    font-weight: 500;
  }
  
`
type mapItem = {
  icon:any
  year:string
  describe:string
  title: string
  detail:string
}


const Roadmap: React.FC = () => {

  const items: mapItem[] = [
    {
      icon: Idea,
      year:'2021',
      describe:'IDEA GENERATION',
      title:'Title1',
      detail:'Outline the road to success using this eye-catching Neon Product Roadmap Template. Apply your own choice of colors, icons and font styles. For more creative roadmap templates, check out Venngages templates library!'
    },
    {
      icon: Search,
      year:'2021',
      describe:'RESEARCH',
      title:'Title2',
      detail:'Outline the road to success using this eye-catching Neon Product Roadmap Template. Apply your own choice of colors, icons and font styles. For more creative roadmap templates, check out Venngages templates library!'
    },
    {
      icon: Design,
      year:'2021',
      describe:'DESIGN',
      title:'Title3',
      detail:'Outline the road to success using this eye-catching Neon Product Roadmap Template. Apply your own choice of colors, icons and font styles. For more creative roadmap templates, check out Venngages templates library!'
    },
    {
      icon: Launch,
      year:'2021',
      describe:'LAUNCH',
      title:'Title4',
      detail:'Outline the road to success using this eye-catching Neon Product Roadmap Template. Apply your own choice of colors, icons and font styles. For more creative roadmap templates, check out Venngages templates library!'
    }
  ]
  return (
    <div className="section" id="Roadmap">
      <Wrapper >
        <Title><span>Roadmap</span></Title>
        <RoadmapContainer >
          <RoadmapBorder>

            {
              items.map(item => (
                <RoadmapItem key={item.title}>
                  <LeftArea>
                    <img className="icon" src={item.icon} />
                    <div className="describe">
                      <div>{item.year}</div>
                      <div>{item.describe}</div>
                    </div>
                    <img className="arrow" src={Arrow} />


                  </LeftArea>
                  <RightArea >
                    <div className="item-title">{item.title}</div>
                    <div className="item-detail" >{item.detail}</div>
                  </RightArea>
                </RoadmapItem>
              ))
            }


          </RoadmapBorder>
        </RoadmapContainer>
      </Wrapper>
    </div>
  )
}

export default Roadmap