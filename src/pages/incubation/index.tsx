import React from 'react'
import styled from 'styled-components'

import One from '../../image/incubation/number-1.png'
import Two from '../../image/incubation/number-2.png'
import Three from '../../image/incubation/number-3.png'
import Four from '../../image/incubation/number-4.png'
import Owner from '../../image/incubation/owner.png'
import Paint from '../../image/incubation/paint.png'
import Saas from '../../image/incubation/saas.png'
import SecurityIcon from '../../image/incubation/security.png'
import LikeIcon from '../../image/incubation/tip12.svg'

import SocialIcon from '../../image/incubation/mask.svg'
import { Wrapper, Container, Title, Row, CardBoxContainer, SocialHeader, SocialBody, SocialFoot,
  ButtonWrapper, BlurLayer, CardTips,
  CardTipsBox_1, CardTipsBox_2 } from './social.style'




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
      image:Paint,
      title:'Deep Learning Artworks',
      detail: 'According to different artistic style needs, Deep Learning Kit can generate corresponding artworks or elements to assist the artist in the creation of NFT / Metaverse. '
    },
    {
      image:Saas,
      title:'NFT SaaS',
      detail: 'Provide standard NFT / Metaverse creation specifications and agreements to form a "SaaS" service, and provide fast NFT Airdrop services for project parties and third-party platforms.'
    },
    {
      image:Owner,
      title:'Ownership certification',
      detail: 'Provide ownership certification for the NFT / Metaverse created by the platform to ensure its uniqueness and scarcity.'
    },
    {
      image:SecurityIcon,
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
                <img src={SocialIcon} />
                <div className="user-info">
                  <div className="username"> Fusion of different NFTs</div>
                </div>
              </SocialHeader>
              <SocialBody>Using Neural Style Transferring Tech for combining different NFTs to a fully new one.</SocialBody>
              <SocialFoot>
                <ButtonWrapper>
                  <div className="button-container">Join Us</div>
                </ButtonWrapper>
              </SocialFoot>
            </CardBoxContainer>
          </div>

          <div className="cardBox card-2">
            <CardBoxContainer>
              <SocialHeader >
                <img src={SocialIcon} />
                <div className="user-info">
                  <div className="username">AI Generating NFTs</div>
                </div>
              </SocialHeader>
              <SocialBody>Text-To-NFT that creates NFTs reflecting the meaning of textual descriptions. </SocialBody>
              <SocialFoot>
                <ButtonWrapper>
                  <div className="button-container">Join Us</div>
                </ButtonWrapper>
              </SocialFoot>
            </CardBoxContainer>
          </div>

          <div className="cardBox card-1">
            <CardBoxContainer>
              <SocialHeader >
                <img src={SocialIcon} />
                <div className="user-info">
                  <div className="username" />
                </div>
              </SocialHeader>
              <SocialBody>The functions for NFT staking, farming</SocialBody>
              <SocialFoot>
                <ButtonWrapper>
                  <div className="button-container">Join Us</div>
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
