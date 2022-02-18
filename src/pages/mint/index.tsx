import styled from 'styled-components'
import React from 'react'
import CO1 from '../../image/mint/co-1.png'
import CO2 from '../../image/mint/co-2.png'
import CO3 from '../../image/mint/co-3.png'



const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  margin: 100px 0;
  //padding: 0 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  @media screen and (max-width: 1100px) {
    min-height: 100vh;
    margin: 50px 0;
  }
`

const Container = styled.div`
  max-width: 1400px;
  width: calc(100% - 40px);
  margin-left: auto;
  margin-right: auto;
  
  @media screen and (max-width: 1100px) {
    margin-left: auto;
    margin-right: auto;
    height: auto;
  }
`

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 70px;
  
  .title {
    .row {
      text-align: left;
      font-size: 3.5em;
      background: linear-gradient(90deg,  #4effd2, #3efff6 40%, #3376ff);
      -webkit-background-clip: text;
      color: transparent;
      line-height: 1em;
    }
  }

  @media screen and (max-width: 1100px) {
    .title{
     .row{
       font-size: 2.7em;
     }
    }
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
    justify-content: center;
    align-items: center;
  }

`

const ItemContainer = styled.div`
  width: 308px;
  height: 650px;  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 40px;


  @media screen and (max-width: 1100px) {
    width: 100%;
  
  }
`

const IconArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 350px;
  z-index: 2;
  border-radius: 10px;
  margin-bottom: 20px;
  max-width: 308px;


  img {
    width:100%;
    object-fit: contain;
  }
  
  @media screen and (max-width: 1100px) {
    height: 200px;
    justify-content: center;
    align-items: center;
    img {
      width: 80%;
      object-fit: contain;
    }
  }
`

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  text-align: left;
  width: 100%;
  
  .item-title{
    font-weight: 600;
    font-size: 2em;
    color: #fff;
  }
  .item-detail {
    font-size: 1.4em;
    opacity: .7;
    color: #fff;
    margin-top: 18px;
    font-family: GothamRndMedium;
  }
  
  @media screen and (max-width: 1100px) {
    width: 100%;
    height: 120px;
    align-items: center;

    .item-title {
      font-size: 1.6em;
    }
    
    .item-detail {
      margin-top: 10px;
      font-size: 1.2em;
      text-align: center;
    }
  }
`



type PlayItem = {
  image:any
  title: string
  detail: any
}

const Mint: React.FC = () => {

  const items: PlayItem[] = [
    {
      image: CO1,
      title:'Artist creates the traits library',
      detail: 'Artist provide the traits of themes'
    },
    {
      image: CO2,
      title:'Creation from users',
      detail: 'Users can select the favorite traits to create NFT artworks.'
    },
    {
      image: CO3,
      title:'NFT Launch',
      detail: <p> All the NFTs will launch multiple marketplace to mint and trade. Artist and creators benefit from the listing and royalties</p>
    }
  ]

  return (
    <Wrapper id="Mint">
      <Container>
        <Title >
          <div className="title">
            <div className="row">NFT CO-Creation</div>
          </div>
        </Title>

        <ItemBorder>
          {
            items.map(item => (
              <ItemContainer key={item.title}>
                <IconArea><img src={item.image} /> </IconArea>
                <ItemText>
                  <div className="item-title">{item.title}</div>
                  <div className="item-detail">{item.detail}</div>
                </ItemText>
              </ItemContainer>
            ))
          }
        </ItemBorder>
      </Container>
    </Wrapper>
  )
}

export default Mint
