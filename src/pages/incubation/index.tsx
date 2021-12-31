import React from 'react'
import styled from 'styled-components'

import Saas1 from '../../image/incubation/saas-1.png'
import Saas2 from '../../image/incubation/saas-2.png'
import Saas3 from '../../image/incubation/saas-3.png'

import { Wrapper, Container, Title, Row, CardBoxContainer, SocialHeader, SocialBody, SocialFoot, ButtonWrapper, BlurLayer, CardTips, CardTipsBox_1, CardTipsBox_2 } from './social.style'



import { useMediaQuery } from 'react-responsive'




type WalletItem = {
  image:any
  title: string
  detail:string
}


const Incubation: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1100px)' })

  const items: WalletItem[] = [
    {
      image: Saas1,
      title:'Deep Learning Artworks',
      detail: 'According to different artistic style needs, Deep Learning Kit can generate corresponding artworks or elements to assist the artist in the creation of NFT / Metaverse. '
    },
    {
      image: Saas1,
      title:'NFT SaaS',
      detail: 'Provide standard NFT / Metaverse creation specifications and agreements to form a "SaaS" service, and provide fast NFT Airdrop services for project parties and third-party platforms.'
    },
    {
      image: Saas1,
      title:'Ownership certification',
      detail: 'Provide ownership certification for the NFT / Metaverse created by the platform to ensure its uniqueness and scarcity.'
    },
    {
      image: Saas1,
      title:'Security',
      detail: 'Platform smart contracts will be audited by well-known and authoritative security certification companies in the industry to ensure the security of NFT / Metaverse transactions.'
    }
  ]
  return (
    <Wrapper >
      <Container >
        <Title>
          <p>How to Use SaaS?</p>
        </Title>
        <Row>
          <div className="cardBox card-1">
            <CardBoxContainer>
              <SocialHeader >
                <img src={Saas1} />
                <div className="user-info">
                  <div className="username"> Fusion of different NFTs</div>
                </div>
              </SocialHeader>
              <SocialBody>Using Neural Style Transferring Tech for combining different NFTs to a fully new one.</SocialBody>
              <SocialFoot>
                <ButtonWrapper>
                  <a href="https://app.forart.co" target="_blank" rel="noreferrer">
                    <div className="button-container">
                      Join Us
                    </div>
                  </a>
                </ButtonWrapper>
              </SocialFoot>
            </CardBoxContainer>
          </div>

          <div className="cardBox card-2">
            <CardBoxContainer>
              <SocialHeader >
                <img src={Saas2} />
                <div className="user-info">
                  <div className="username">AI Generating NFTs</div>
                </div>
              </SocialHeader>
              <SocialBody>Text-To-NFT that creates NFTs reflecting the meaning of textual descriptions. </SocialBody>
              <SocialFoot>
                <ButtonWrapper>
                  <a href="https://app.forart.co" target="_blank" rel="noreferrer">
                    <div className="button-container">
                      Join Us
                    </div>
                  </a>
                </ButtonWrapper>
              </SocialFoot>
            </CardBoxContainer>
          </div>

          <div className="cardBox card-1">
            <CardBoxContainer>
              <SocialHeader >
                <img src={Saas3} />
                <div className="user-info">
                  <div className="username">NFT Infrastructure</div>
                </div>
              </SocialHeader>
              <SocialBody>NFT infrastructure for NFT minting, launching, staking, and farming.</SocialBody>
              <SocialFoot>
                <ButtonWrapper>
                  <a href="https://app.forart.co" target="_blank" rel="noreferrer">

                    <div className="button-container">
                      Join Us
                    </div>
                  </a>
                </ButtonWrapper>
              </SocialFoot>
            </CardBoxContainer>
          </div>
        </Row>


      </Container>
    </Wrapper>

  )
}

export default Incubation
