import React from 'react'
import JoinUsCube from '../../image/joinUs/cubeWithiLight.png'
import { Box, styled, useMediaQuery, useTheme } from '@mui/material'
import { Boxes, HalfBoxes } from '../chains/index.style'

const Wrapper = styled('div')`
  width: 100%;
  background: #F0F5FF;
  position: relative;
  box-sizing: border-box;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
`

const Background = styled('div')`
  width: 100%;
  max-height:  500px;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  
  
  .background {
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, #50008C 0%, #A000D2 100%);
    
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
  }


`

const TextContainer = styled('div')`
  position: relative;
  font-family: Righteous-Regular;
  color: white;
  display: flex;
  width: 100%;

 
`
const Text = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 46px;
  position: relative;
  width: fit-content;


  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 60px;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    justify-content: center;
    align-items: center;
  }
`

const Cube = styled('div')`
 width: 50%;
  position: absolute;
  right: 0;
  top: -46%;
 
  img {
    position: absolute;
    width: 100%;
    max-height: 580px;
    right: 0;
    object-fit: contain;
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    top: -20%;
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
  
  ::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    right: 0;
    bottom: 0;
    border: 8px solid rgba(139,0,191, 1);
    border-top-color: transparent;
    border-left-color: transparent;
  }
 ::after{
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    left: 0;
    top: 0;
    border: 8px solid  rgba(131,0,184, 1 );
    border-bottom-color: transparent;
    border-right-color: transparent;
  }
  
`



const JoinUs: React.FC = () => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))
  return (

    <Wrapper>
      <Box sx={{ display:'flex', justifyContent:'flex-start', }}>
        <HalfBoxes />
        <Boxes color={''} />
        <Boxes color={'#7864E6'} />
      </Box>

      <Background >

        <div className={'background'} >
          <Box sx={{ display:'flex', justifyContent:'flex-start' }}>
            <HalfBoxes color={''} />
            <Boxes color={'#D25AE6'} />
            <Boxes color={''} />
          </Box>


          <TextContainer>
            {
              !mobile &&
                <>
                  <HalfBoxes />
                  <Boxes color={''} />
                  <Boxes color={''} />
                </>
            }

            <Text >
              Partner with Forart.ai
              <a href={'https://airtable.com/shrBHhxpSfatrQ8nA'} target="_blank" rel="noreferrer">
                <ButtonWithCorner className={'cover'}>
                  Apply to join
                </ButtonWithCorner>
              </a>
            </Text>


          </TextContainer>


        </div>

        <Cube>
          <img src={ JoinUsCube} />
        </Cube>
      </Background>
    </Wrapper>

  )
}

export default JoinUs
