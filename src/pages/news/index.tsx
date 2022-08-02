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
  align-items: center;
  justify-content: center;
  background-color: #F0F5FF;
  position: relative;
  min-height: 630px;
  max-height: fit-content;
overflow: hidden;
`

const Container = styled('div')`
  width: 85%;
  height: 100%;
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

    ${({ theme }) => theme.breakpoints.down('lg')} {
      font-size: 40px;
    }
  }

  .sub-title {
    color: #1450B4;
    font-family: d-din-bold;
    font-size: 22px;

    ${({ theme }) => theme.breakpoints.down('lg')} {
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
    justify-content: center;
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
  
  ${({ theme }) => theme.breakpoints.down('lg')} {
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
height: 98px;

  .text {
    text-align: left;
  }
  
  .date {
    font-family: d-din;
    color: #3e3e3e;
    width: 100%;
    text-align: right;
    font-size: 18px;
  }
  
  
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
    link: string,
    date?:string
}

const newsList: NewsType[] =[
  {
    image:'https://miro.medium.com/max/700/1*V34kUfHwqmcJAn7gz0RJ7A.gif',
    title:'Development Update Of June & July',
    link: 'https://medium.com/@Forart.ai/development-update-of-june-july-dc137d455333',
    date:'Jul 29'
  },
  {
    image:'https://miro.medium.com/max/700/1*cWDUVDX6DHNSBHa9OVmzCQ.jpeg',
    title:'How to get Depainter WL and join spacetronauts NFT creation?',
    link: 'https://medium.com/@Forart.ai/how-to-get-depainter-wl-and-join-spacetronauts-nft-creation-3e5d08356579',
    date:'Jul 22'
  },
  {
    image:'https://miro.medium.com/max/700/1*fQTeoWcMOT_AFIR5UhbMqw.jpeg',
    title:'Development Update Of May',
    link: 'https://medium.com/@Forart.ai/donate-guide-fdd7a631a23a',
    date:'Jun 1'
  }
]

const NewsPage:React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          <div className={'title'}>News</div>
        </Title>

        <NewsContainer data-aos="fade-down">
          {
            newsList.map(item => (
              <Box   key={item.link} sx={{ display: 'flex', flexDirection:'column', maxWidth:'440px' }}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <Item>
                    <Border >
                      <img src={item.image} />
                    </Border>
                  </Item>
                </a>
                <Detail>
                  <div className={'text'}>
                    {item.title}
                  </div>

                  <div className={'date'}>
                    {item.date}
                  </div>
                </Detail>
              </Box>
            ))
          }
        </NewsContainer>
      </Container>
    </Wrapper>
  )
}

export default NewsPage
