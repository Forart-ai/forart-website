import styled from 'styled-components'
import React from 'react'
import Gift from '../../image/mint/gifts.png'
import Upgrade from '../../image/mint/upgrade.png'
import Coin from '../../image/mint/coins.png'


const Wrapper = styled.div`
  max-width: 1400px;
  height: auto;
  margin: auto;
  font-family: DriveExtraBold;
  padding: 0 80px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  @media screen and (max-width: 1100px) {
    min-width: 100vw;
    padding: 0 5px;
  }
`

const Container = styled.div`
  max-width: 1900px;
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
  margin-bottom: 30px;
  .title {
    .row {
      text-align: left;
      font-size: 3em;
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
  max-width: 1440px;

  @media screen and (max-width: 1100px) {
    margin: 0;
    flex-direction: column;
  }

`

const ItemContainer = styled.div`
  width: 308px;
  height: auto;  
  display: flex;
  flex-direction: column;
  align-items: center;
  

  @media screen and (max-width: 1100px) {
    min-width: 280px;
    height: 130px;
    
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
  
  img {
    width:100%;
  }
  
  @media screen and (max-width: 1100px) {
    width: 90px;
    
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
    font-family: campton;
    opacity: .7;
    color: #fff;
    margin-top: 18px;
  }
  
  @media screen and (max-width: 1100px) {
    width: 70%;
    height: 120px;

    .item-title {
      font-size: 16px;
    }
    
    .item-detail {
      margin-top: 10px;
      font-size: 12px;
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
      title:'Airdrop NFTs',
      detail: 'The platform will airdrop limited NFTs, which can be used for NFT mining on the platform to obtain native tokens.'
    },
    {
      image: '',
      title:'Upgrade NFTs',
      detail: 'Two NFTs can be upgraded with AI, minted with native tokens, and get new scarce NFTs.'
    },
    {
      image: '',
      title:'Financial NFTs',
      detail: 'The platform provides part of the financial value guarantee for scarce NFTs.'
    }
  ]

  return (
    <Wrapper id="Mint">
      <Container>
        <Title >
          <div className="title">
            <div className="row">DeFi + NFT</div>
            <div className="row"> For Scarce NFTs</div>
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
