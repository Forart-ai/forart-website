import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 150px 0;
  min-width: 1200px;

  @media screen and (max-width: 1100px) {
    min-width: 100vw;
  }
`

export const Container = styled.div`
  width:100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  @media screen and (max-width: 1100px) {
    width: 85vw;
    height: fit-content;
    padding-top: 0;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 26px;
  p {
    font-size: 3.5em;
    text-align: center;
    background: linear-gradient(90deg,  #4effd2, #3efff6 40%, #3376ff);
    -webkit-background-clip: text;
    color: transparent;
  }
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 42px;

  .cardBox {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 23px;
    width: 360px;
    height: 260px;
    border-radius: 20px;
    padding: 3px;
    background: linear-gradient(110deg, #3376ff, #3efff6 65%, #4effd2);
  }

  .card-1 {
    animation: style_move1__4te_F 6s ease-in 3s infinite;
  }

  .card-2 {
    animation: style_move2__4te_F 6s ease-in 3s infinite;
  }

  @keyframes style_move1__4te_F {
    0% {
      transform: translateY(0);
    }
    
    ${(Math.random() * 10 + 35) + '%'} { 
      transform: translateY(-12px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes style_move2__4te_F {
    0% {
      transform: translateX(0);
    }
    ${(Math.random() * 10 + 45) + '%'} {
      transform: translateX(-12px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 1100px) {
   flex-direction: column;
    width: 100%;
    
  }
`


export const CardBoxContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #303f5d;
  border-radius: 20px;
  padding: 24px 40px 28px 24px;
  
`

export const SocialHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  img {
    width: 56px;
    height: 56px;
    margin-right: 12px
  }
  .user-info {
    display: flex;
    flex-direction: column;
    text-align: left;


    .username {
      font-size: 1.5em;
      color: #fff;
    }
    
    .address {
      font-size: 1em;
      color:#b2b2b2
    }
  }
`

export const SocialBody = styled.div `
  font-size: 1.2em;
  line-height: 24px;
  color: #fff;
  text-align: left;
  font-family: GothamRndMedium;
`

export const SocialFoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 58px;
  position: absolute;
  left: 0;
  bottom: 28px;
  
 

`

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 48px;
  padding: 2px;
  border-radius: 13px;
  background: linear-gradient(110deg, #4effd2, #3efff6 65%, #3376ff);
  color: #fff;
  font-size: 1.3em;
  
  
  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 13px;
    background-color: #303f5d;
  }
`

export const BlurLayer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 68px;
  filter: blur(8px);
  opacity: .8;
  background: linear-gradient(120deg, #5e7bff, #89ffd3);
`

export const CardTips = styled.div`
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

export const CardTipsBox_1 = styled.div`
  width: 105px;
  height: 57px;
  top: 165px;
  right: 320px;
  position: absolute;
  animation: style_move1__4te_F 5s ease-in 2.5s infinite;

  .card-tips{
   
  }
`

export const CardTipsBox_2 = styled.div`
  width: 105px;
  height: 57px;
  position: absolute;
  right: -30px;
  top: -22px;
  animation: style_move1__4te_F 5s ease-in 2.5s infinite;

`
