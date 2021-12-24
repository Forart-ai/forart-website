import styled from 'styled-components'
import React from 'react'
import Gift from '../../image/mint/gifts.png'
import Upgrade from '../../image/mint/upgrade.png'
import Coin from '../../image/mint/coins.png'


const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 150px 0;
  //padding: 0 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  @media screen and (max-width: 1100px) {
    //padding: 0 5px;
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
  
  @media screen and (max-width: 1100px) {}
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
  width: 308px;
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
  height: 350px;
  z-index: 2;
  background: #282c34;
  border-radius: 10px;
  margin-bottom: 20px;
  max-width: 308px;


  img {
    width:100%;
  }
  
  @media screen and (max-width: 1100px) {
    height: 200px;
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

    .item-title {
      font-size: 1.6em;
    }
    
    .item-detail {
      margin-top: 10px;
      font-size: 1.2em;
    }
  }
`



type PlayItem = {
  image:any
  title: string
  detail:string
}

const Mint: React.FC = () => {

  const items: PlayItem[] = [
    {
      image: '',
      title:'NFT Creation startup',
      detail: 'NFT Artist Creates NFT creation material library on a certain theme.'
    },
    {
      image: '',
      title:'Mint NFT',
      detail: 'NFT Mintor selects his favorite creative combinations for minting '
    },
    {
      image: '',
      title:'NFTs Launch',
      detail: 'AI-Powered SaaS helps NFT Mintors to optimize creation and launch.'
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
