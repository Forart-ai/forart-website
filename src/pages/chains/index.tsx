import React from 'react'
import Solana from '../../image/chain/solana.png'
import Biance from '../../image/chain/biance.png'
import Avax from '../../image/chain/avax.png'
import Celo from '../../image/chain/celo.png'


import { Wrapper, Container, ChainBox, Boxes, BoxesContainer, HalfBoxes } from './index.style'
import { Box } from '@mui/material'

const Chains: React.FC = () => {


  return (
    <Wrapper >
      <BoxesContainer>
        <Box sx={{ display:'flex', justifyContent:'flex-start' }}>
          <Boxes color={'rgba(210,90,230,0.53)'} />
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
        <Box sx={{ display:'flex', justifyContent:'flex-end' }}>
          <Boxes color={'#00A1FF'} />
          <HalfBoxes color={'transpent'} />
        </Box>

      </BoxesContainer>

    </Wrapper>

  )
}

export default Chains
