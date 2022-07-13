import React from 'react'
import { Box, styled } from '@mui/material'
import ArtistBanner from '../../image/artist/artist-banner.png'
import { Boxes } from '../chains/index.style'

const Wrapper = styled('div')`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F0F5FF;
  position: relative;
  overflow: hidden;

`

const Container = styled('div')`
  width: 85%;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;


  img {
    width: 60%;
    max-width: 500px;
  }
  
  ${({ theme }) => theme.breakpoints.down('lg')} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;

    img {
      width: 80%;
      max-width: 500px;
    }
  }
`

const Title = styled('div')`
  margin-bottom: 20px;
  text-align: left;
  font-family: Righteous-Regular;




  .title {
    color: #333333;
    font-family: Righteous-Regular;
    font-size: 60px;

    ${({ theme }) => theme.breakpoints.down('md')} {
      font-size: 40px; 
      margin-top: 30px;
    }
  }

  .sub-title {
    color: #1450B4;
    font-family: d-din-bold;
    font-size: 22px;

    ${({ theme }) => theme.breakpoints.down('md')} {
      font-size: 16px;
    }
  }
`

export const ButtonWithCorner = styled('div')`
  padding: 12px 0px;
  width: 150px;
  font-size: 16px;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.2s linear 0s;
  background-image: linear-gradient(90deg, #00A1FF 0%, #00FF8F 100%);
  color: black;
  text-align: center;
  position: relative;
  cursor: pointer;
  margin-top: 30px;

  a {
    color: rgba(0, 0, 0, 1);
  }

  ::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    right: 0;
    bottom: 0;
    border: 8px solid #F0F5FF;
    border-top-color: transparent;
    border-left-color: transparent;
  }

  ::after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    left: 0;
    top: 0;
    border: 8px solid #F0F5FF;
    border-bottom-color: transparent;
    border-right-color: transparent;
  }

`



const Artist:React.FC = () => {
  return (
    <Wrapper>
      <Box sx={{ position:'absolute', width:'100%', display:'flex',flexDirection:'column', justifyContent:'flex-end', alignItems:'flex-end', top:'0' }}>
        <Box sx={{ position:'relative', width:'100%', display:'flex', justifyContent:'flex-end', alignItems:'flex-end' }}>
          <Boxes color={'#F5C864'} />
          <Boxes color={''} />
        </Box>
        <Boxes color={'#50008C'} />
      </Box>
      <Container >
        <img src={ArtistBanner} data-aos={'fade-right'} />
        <Title data-aos={'fade-left'}>
          <div className={'title'}>Become an artist on Forart.ai</div>
          <div className={'sub-title'} >Join us to showcase your creations and engage more fans Co-creation and exchange of NFTs.</div>
          <a href={'https://airtable.com/shrZrqgHKtAr2BPuV'} target="_blank" rel="noreferrer">
            <ButtonWithCorner className={'cover'}>
              Apply to join
            </ButtonWithCorner>
          </a>
        </Title>
      </Container>
    </Wrapper>
  )
}

export default Artist
