import { styled } from '@mui/material'

export const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F0F5FF;
  position: relative;
  overflow: hidden;
`

export const BoxesContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  height: 100%;
`

export const Boxes = styled('div')<{color?: string}>`
  max-width: 130px;
  max-height: 130px;
  width: 10vw;
  height: 10vw;
  background-color: ${({ color }) => color};
`

export const HalfBoxes = styled('div')<{color?: string}>`
  max-width: calc(130px / 2);
  max-height: 130px;
  width: calc(10vw / 2);
  height: 10vw;
  background-color: ${({ color }) => color};
`

export const Container = styled('div')`
  width: 85%;
  max-width: 1600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ChainBox = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1020px;
  width: 90%;
  background-color: white;
  box-shadow: 2px 3px 7px  rgb(0, 0, 0, 0.51);
  padding: 20px 16px;
  border-radius: 10px;
  gap: 20px;
  
  img {
    object-fit: contain;
  }
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const CardTips = styled('div')`
  width: 101px;
  height: 53px;
  font-size: 28px;
  position: absolute;
  left: 50%;
  top: -8px;
  transform: translateX(-50%);
  border-radius: 68px;
  border: 2px solid #fff;
  background-color: hsla(0,0%,100%,.6);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: .8;
  color: #000;
`


