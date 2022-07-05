import React from 'react'
import JoinUsCube from '../../image/joinUs/joinUs-cube.png'
import { Box, styled } from '@mui/material'
import { Boxes, HalfBoxes } from '../chains/index.style'
import { CustomizeButton } from '../top'

const Wrapper = styled('div')`
  width: 100%;
  background: #F0F5FF;
  position: relative;
  box-sizing: border-box;
  padding-bottom: 120px;
`

const Background = styled('div')`
  width: 100%;
  max-height:  500px;
  height: 42vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  
  
  .background {
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, #50008C 0%, #A000D2 100%);
    position: relative;
    
  }

  img {
    max-width: 500px;
    right: 10px;
    top: -150px;
    position: absolute;
  }

`

const TextContainer = styled('div')`
    position: relative;
  font-family: Righteous-Regular;
  color: white;
 display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
 
  
`
const Text = styled('div')`
  max-width: 1800px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 46px;

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 60px;
  }

`



const JoinUs: React.FC = () => {

  return (

    <Wrapper>
      <Box sx={{ position:'relative', overflow:'hidden', display:'flex', justifyContent:'flex-start', }}>
        <HalfBoxes />
        <HalfBoxes />
        <HalfBoxes />
        <Boxes color={'#7864E6'} />
      </Box>
      <Background >

        <div className={'background'} >
          <Box sx={{ display:'flex', justifyContent:'flex-start', left:'5vw', top:'0' }}>
            <HalfBoxes />
            <Boxes color={'#D25AE6'} />
          </Box>

          <TextContainer>
            <Text>
              Partner with Forart.ai
              <CustomizeButton>Launch dapp</CustomizeButton>
            </Text>

          </TextContainer>
        </div>
        <img src={ JoinUsCube} />


      </Background>
    </Wrapper>

  )
}

export default JoinUs
