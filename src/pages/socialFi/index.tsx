import React from 'react'
import styled from 'styled-components'
import Social1 from '../../image/socialFi/social1.png'
import Social2 from '../../image/socialFi/social2.png'
import Social3 from '../../image/socialFi/social3.png'
import Social4 from '../../image/socialFi/social4.png'
import Social5 from '../../image/socialFi/social5.png'





const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 120px 0;
  display: flex;
  flex-direction: column;


  @media screen and (max-width: 1100px) {
    //height: 1000px;
  }
`

const Container = styled.div`
  max-width: 1400px;
  width: calc(100% - 40px);
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1100px) {
    height: auto;
  }
`

const Title = styled.div`
  width: 100%;
  height: 90px;
  text-align: center;
  margin-bottom: 20px;


  .title {
    width: fit-content;
    font-size: 3.5em;
    background: linear-gradient(90deg,  #4effd2, #3efff6 40%, #3376ff);
    -webkit-background-clip: text;
    color: transparent;
  }
  
  @media screen and (max-width: 1100px) {
   

  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`


const ItemBorder = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding: 0 60px;

  // background: url(${require('../../image/socialFi/roadmap-back.png').default}) no-repeat center;
  //background-size: contain;


  @media screen and (max-width: 1100px) {
  }

`

const ItemContent = styled.div`
  width: 350px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 50px 50px 50px;
  
  img {
    width: 200px;
    max-width: 230px;
    object-fit: contain;
  }
  
  .detail{
    font-family: GothamRndMedium;
    font-size: 1.4em;
    color: white;
    opacity: .7;
    margin-top: 18px;
  }
  
  @media screen and (max-width: 1100px) {
    margin: 30px 0;

    img {
      width: 150px;
      max-width: 200px;
      object-fit: contain;
    }
  }
`




const SocialFi: React.FC = () => {
  type Item = {
    image:any
    title: string
    detail:string
  }
  const Row1: Item[] = [
    {
      image: Social1,
      title:'',
      detail: '1.CO-NFTs are minted and launched.'
    },
    {
      image: Social2,
      title:'',
      detail: '2.CO-NFTs news will be published and shared in social communities.'
    },
    {
      image: Social3,
      title:'',
      detail: '3.Fans likes, donates, trading for CO-NFTs with $FTA and comments, ranking on community.'
    }
  ]

  const Row2: Item[] = [
    {
      image: Social4,
      title:'',
      detail: '4.The NFT owner displays the NFT avatar authenticated by the platform.'
    },
    {
      image: Social5,
      title:'',
      detail: '5. Artist, Mintor and owner earn splits of the platform reward.'
    }
  ]
  return (
    <Wrapper>
      <Container>
        <Title>
          <div className="title">SocialFi</div>
        </Title>
        <ItemBorder>
          <Row>
            {
              Row1.map((item, index) => (
                <ItemContent key={index}>
                  <img src={item.image} />
                  <div className="detail"> {item.detail } </div>
                </ItemContent>
              ))
            }
          </Row>
          <Row>
            {
              Row2.map((item, index) => (
                <ItemContent key={index}>
                  <img src={item.image} />
                  <div className="detail"> {item.detail } </div>
                </ItemContent>
              ))
            }
          </Row>
        </ItemBorder>

      </Container>
    </Wrapper>
  )
}

export default SocialFi
