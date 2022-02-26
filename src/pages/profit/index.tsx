import React from 'react'
import styled from 'styled-components'
import DoughnutChart from './components/charts/DoughnutChart'

const Wrapper = styled.div`
  width: 100%;
  min-height: 650px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1100px) {
    height: fit-content;
  }
`

const ProfitContainer = styled.div`
  max-width: 1200px;
  width: calc(100% - 40px);
  margin-left: auto;
  margin-right: auto;
`

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;


  .title {
    text-align: center;
    font-size: 3.5em;
    background: linear-gradient(90deg,  #4effd2, #3efff6 40%, #3376ff);
    -webkit-background-clip: text;
    color: transparent;
  }
  
  @media screen and (max-width: 1100px) {
  
  }
`

const ChartBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1100px) {
    max-width: 100vw;
  }
`

const Profit: React.FC = () => {



  return (
    <Wrapper>
      <ProfitContainer>
        <Title>
          <div className="title">Economic Profit</div>
        </Title>
        <ChartBox>
          <DoughnutChart />
        </ChartBox>

      </ProfitContainer>
    </Wrapper>
  )
}

export default Profit
