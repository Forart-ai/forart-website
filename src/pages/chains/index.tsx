import React from 'react'
import Solana from '../../image/chain/solana.png'
import Avax from '../../image/chain/avax.png'
import Celo from '../../image/chain/celo.png'


import { Wrapper, Container, ChainBox, Boxes, BoxesContainer, HalfBoxes } from './index.style'
import { Box, styled } from '@mui/material'

const BlurContainer = styled('div')`
  max-width: 130px;
  max-height: 130px;
  width: 10vw;
  height: 10vw;
  position: relative;
  z-index: 3;
overflow: hidden;

  .blur-purple {
    position: absolute;
    left: -80%;
    top: -80%;
    width: 200%;
    height: 200%;
    background: radial-gradient(closest-side circle, rgba(210,90,230, .7),  rgba(210,90,230, .5),  rgba(210,90,230, .3), transparent);
  }
  
`

const Chains: React.FC = () => {


  return (
    <Wrapper >
      <BoxesContainer>
        <Box sx={{ display:'flex', justifyContent:'flex-start' }}>
          <BlurContainer ><div className={'blur-purple'} /> </BlurContainer>
          <Boxes color={'#D25AE6'} />
        </Box>
        <Boxes color={'#7864E6'} />
      </BoxesContainer>

      <Container >
        <ChainBox>
          <img src={Solana} />
          <img src={Avax} />
          <img src={Celo} />
        </ChainBox>
      </Container>

      <BoxesContainer>
        <Box sx={{ position:'relative', display:'flex', justifyContent:'flex-end', alignItems:'flex-end', bottom:'0' }}>
          <Boxes color={'#00A1FF'} />
          <HalfBoxes color={'transpent'} />
        </Box>

      </BoxesContainer>

    </Wrapper>

  )
}

export default Chains
