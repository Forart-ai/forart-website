import React from 'react'
import { Box, styled } from '@mui/material'
import ArtistBanner from '../../image/artist/artist-banner.png'
import { CustomizeButton } from '../top'
import { Boxes } from '../chains/index.style'

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #F0F5FF;
  position: relative;
  padding: 0 0 100px 0;


`

const Container = styled('div')`
  width: 85%;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  img {
    width: 60%;
    max-width: 500px;
  }
  
  ${({ theme }) => theme.breakpoints.down('lg')} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
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


const Artist:React.FC = () => {
  return (
    <Wrapper>
      <Box sx={{ position:'relative', width:'100%', display:'flex',flexDirection:'column', justifyContent:'flex-end', alignItems:'flex-end' }}>
        <Box sx={{ position:'relative', width:'100%', display:'flex', justifyContent:'flex-end', alignItems:'flex-end' }}>
          <Boxes color={'#F5C864'} />
          <Boxes color={''} />
        </Box>
        <Boxes color={'#50008C'} />
      </Box>
      <Container>
        <img src={ArtistBanner} />
        <Title>
          <div className={'title'}>Become an artiston Forart</div>
          <div className={'sub-title'} >Join us to showcase your creations and engage more fans Co-creation and exchange of NFTs.</div>
          <CustomizeButton className={'cover'}>Launch Dapp</CustomizeButton>
        </Title>
      </Container>
    </Wrapper>
  )
}

export default Artist
