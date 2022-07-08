import React from 'react'
import { Box, styled } from '@mui/material'
import News1 from '../../image/news/news1.jpeg'
import News2 from '../../image/news/news2.png'
import News3 from '../../image/news/news3.png'
import NewsBorder from '../../image/news/news-border.png'


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

  img {
    width: 70%;
    max-width: 500px;
  }
`

const Title = styled('div')`
  margin-bottom: 20px;
  font-family: Righteous-Regular;
  text-align: center;




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

const NewsContainer = styled('div')`
  display: flex;
  justify-content: center;
  gap: 20px;
  
  ${({ theme }) => theme.breakpoints.down('lg')} {
    flex-direction: column;
    align-items: center;
  }
  
`

const Item = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 440px;
  max-height: 260px;
  width: 440px;
  height: 260px;
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    max-width: 380px;
    max-height: 220px;
    width: 380px;
    height: 220px;
  }
  
`

const Detail = styled('div')`
  color: #1450B4;
  font-family: d-din-bold;
  font-size: 22px;
  
`

const Border = styled('div')`
  width: 100%;
  height: 100%;
  background: url(${NewsBorder}) no-repeat center;
  background-size: contain;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
padding: 20px;
  img {
    width: 100%;
    height: 100%;
    border-top-right-radius: 26px;
    border-bottom-left-radius: 1rem;

    cursor: pointer;
  }
`

type NewsType = {
    image: any,
    title: string,
    link: string
}

const newsList: NewsType[] =[
  {
    image:News1,
    title:' Development Update Of May',
    link: 'https://medium.com/@Forart.ai/development-update-of-may-5d4ee739562f'
  },
  {
    image:News2,
    title:'Forart.ai: ‘Create to earn’ may go viral in the P2E field after STEPN',
    link: 'https://medium.com/@Forart.ai/forart-ai-create-to-earn-may-go-viral-in-the-p2e-field-after-stepn-292f84ccc3ed'
  },
  {
    image:News3,
    title:'Donate Guide',
    link: 'https://medium.com/@Forart.ai/donate-guide-fdd7a631a23a'
  }
]

const NewsPage:React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          <div className={'title'}>News</div>
        </Title>

        <NewsContainer>
          {
            newsList.map(item => (
              <Box key={item.link} sx={{ display: 'flex', flexDirection:'column', maxWidth:'440px' }}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <Item>
                    <Border >
                      <img src={item.image} />
                    </Border>
                  </Item>
                </a>
                <Detail>{item.title}</Detail>
              </Box>
            ))
          }
        </NewsContainer>
      </Container>
    </Wrapper>
  )
}

export default NewsPage
