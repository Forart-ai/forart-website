import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  padding-top: 150px;
  background: radial-gradient(#48A283 3%, black 45%);
  
  @media screen and (max-width: 1100px) {
    height: fit-content;
    background-size: 60%;
    background-position: top 50% left 20%;
  }
`

const Container = styled.div`
  width: 1300px;
  margin: 0 auto;
  background-size: 100% 100%;

  @media screen and (max-width: 1100px) {
    width: 85vw;
    height: fit-content;
    padding-top: 0;
  }
`

const Title = styled.div`
  font-weight: 600;
  font-size: 38px;
  line-height: 46px;
  color: #fff;

  span {
    padding: 0 16px;
    font-weight: 600;
    font-size: 65px;
    line-height: 80px;
    color: #00EBA4;
    opacity: .96;
  }
`

const TextContent = styled.div`
  font-size: 20px;
  color: white;
  margin-top: 30px;
`

const ItemBorder = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1200px;
  height: 476px;
  border-radius: 10px;
  margin: 80px auto;
  align-items: center;
  font-weight: 600;
  color: #fff;
  
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(90deg,#00EBA4,#02A6F5);
    opacity: .7;
    left: 0;
    top: 0;
  }
`

const ItemContainer = styled.div`
  padding: 20px 55px;
  width: 450px;
  height: 110px;
  text-align: left;

  .item-title {
    opacity: 1;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    position: relative;
    width: 100%;
  }
  
  .text {
    margin-top: 10px;
  }
`

const Line = styled.div`
  width: 1300px;
  height: 1px;
  margin-left: calc((100% - 1300px) / 2);
  background: linear-gradient(90deg,#00EBA4,#02A6F5);
`

type WalletItem = {
  title: string
  detail:string
}


const Wallet: React.FC = () => {

  const items: WalletItem[] = [
    {
      title:'Deep Learning Artworks',
      detail: 'According to different artistic style needs, Deep Learning Kit can generate corresponding artworks or elements to assist the artist in the creation of NFT / Metaverse. '
    },
    {
      title:'NFT SaaS',
      detail: 'Provide standard NFT / Metaverse creation specifications and agreements to form a "SaaS" service, and provide fast NFT Airdrop services for project parties and third-party platforms.'
    },
    {
      title:'Ownership certification',
      detail: 'Provide ownership certification for the NFT / Metaverse created by the platform to ensure its uniqueness and scarcity.'
    },
    {
      title:'Security',
      detail: 'Platform smart contracts will be audited by well-known and authoritative security certification companies in the industry to ensure the security of NFT / Metaverse transactions.'
    }
  ]
  return (
    <div className="section">
      <Wrapper>
        <Container>
          <Title>
            <div>
              The
              <span>First</span>
              AI-Driven NFT/Metaverse Incubation Platform
            </div>
          </Title>
          <TextContent>Provide an AI-kit and incubation platform for  artists to create NFT / Metaverse through Neura.</TextContent>
          <ItemBorder>
            {
              items.map(item => (
                <ItemContainer  key={item.title}>
                  <div className="item-title" >{item.title}</div>
                  <div className="text" >{item.detail}</div>
                </ItemContainer>
              ))
            }
            {/* <div className="item-title">
                <img src={ItemIcon} /> Access From Multiple Devices
              </div>
              <div className="item-text">Users can acess the same identiy form multiple devices through a few simple steps</div>*/}

          </ItemBorder>

        </Container>
      </Wrapper>
      <Line />
    </div>
  )
}

export default Wallet
