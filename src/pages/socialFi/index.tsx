import React from 'react'
import styled from 'styled-components'



const Wrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  
  
  @media screen and (max-width: 1100px) {
    height: 1000px;
  }
`

const Container = styled.div`
  max-width: 1400px;
  width: calc(100% - 40px);
  margin-left: auto;
  margin-right: auto;

`

const Title = styled.div`
  width: 100%;
  margin-bottom: 50px;
  text-align: left;

  .title {
    font-size: 3.5em;
    background: linear-gradient(90deg,  #4effd2, #3efff6 40%, #3376ff);
    -webkit-background-clip: text;
    color: transparent;
  }
  
  @media screen and (max-width: 1100px) {
  
  }
`


const ItemBorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;



  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }

`

const LeftArea = styled.div`
  width: 65%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  
  .row:nth-child(1) {
    margin-bottom: 250px;
  }
  
  .row {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

`


const SocialItem = styled.div`
  width: 300px;
  height: 250px;
  background: #282c34;
  border-radius: 10px
`


const SocialFi: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          <div className="title">SocialFi</div>
        </Title>
        <ItemBorder>
          <LeftArea>
            <div className="row">
              <SocialItem />
              <SocialItem />
            </div>
            <div className="row">
              <SocialItem />
              <SocialItem />
            </div>
          </LeftArea>
        </ItemBorder>
      </Container>
    </Wrapper>
  )
}

export default SocialFi
