import React, { ReactElement } from 'react'
import { AccordionSummaryProps, styled } from '@mui/material'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
} from '@mui/material/AccordionSummary'
import { ArrowForwardIosRounded } from '@mui/icons-material'


const Wrapper = styled('div')`
  min-height: 100vh; 
  width: 100%;
  background-color: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 0 0 300px 0;


  .custom-shape-divider-top-1659492913 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1659492913 svg {
    position: relative;
    display: block;
    width: calc(300% + 1.3px);
    height: 100px;
  }

  .custom-shape-divider-top-1659492913 .shape-fill {
    fill: rgba(2254,245,255,1);
  }

 
`

const Border = styled('div')`
width: 100%;
  height: 220px;
  position: relative;
  background-color: rgba(254,245,255,1);
  padding: 0 10vw;
  font-family: d-din;
 

  
`

const Text = styled('div')`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 99;
  font-family: Righteous-Regular;


  .bold {
    color: #250b28;
    font-size: 40px;
  }

  span {
    color: #5c485e;
    font-size: 16px;
    letter-spacing: .7px;
  }

  .roadmap-swirly {
    position: absolute;
    top: 80px;
    left: 0;

    path {
      stroke-width: 3px;
      stroke: rgba(250, 98, 142, 0.87);
      fill-opacity: 0;
      vector-effect: non-scaling-stroke;
      stroke-dashoffset: 0;
      stroke-dasharray: 24;
      animation: strokeoffset 45s linear infinite;

    }
  }

  .roadmap-swirly path:nth-of-type(1) {
    stroke-dasharray: 0;
    animation: none;
  }

  .roadmap-swirly path:nth-of-type(2) {
    stroke: rgba(0, 0, 0, 0.72);
  }


  @keyframes strokeoffset {
    0% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 1000px;
    }
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
   align-items: center;
    justify-content: center;

    .bold {
      font-size: 32px;
    }
  }
  
`

const TitleText = styled('div')`
  color: #250b28;
  font-size: 22px;
  font-weight: bold;
  text-align: left;
  font-family: d-din-bold;

`

const DetailText = styled('div')`
  color: #5c485e;
  font-size: 16px;
  text-align: left;
  font-family: d-din;
  letter-spacing: .7px;
`



const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderTop: '1px solid #e3e3e3',
  borderBottom: '1px solid #e3e3e3',
  backgroundColor: 'transparent',
  padding:'10px 0',

  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosRounded  sx={{ fontSize: '0.9rem',color:'rgb(37,11,40)' }} />}
    {...props}
  />
))(({ theme }) => ({
  padding:0,

  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(0),
  },

  '& .MuiTypography-root': {

  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(1),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

const CollapseWrapper = styled('div')`
  max-width: 1200px;
  width: 90%;
  position: relative;
  top: 100px;
 
`

type CollapseProps = {
  title: ReactElement,
  detail: ReactElement
}


const FAQPage:React.FC = () => {

  const FAQContent:CollapseProps[] = [
    {
      title:  <>1. What&apos;s  &quot;DePainter&quot; NFT? </>,
      detail:
  <>
    It&apos;s the unique admin ticket to Forart.ai platform, the holder will enjoy:<br /><br />
    1. Participating in CO-NFT, Social NFT and AI-Generate<br />
    2. Get the whitelist of Forart.ai IDO.<br />
    3. Acquire platform Co-NFT revenue sharing.<br />
    4. Level up to get a higher yield rate.<br />
    5. Can be traded on Marketplace soon.<br />
  </>
    },
    {
      title:  <>2. As a new member, how to acquire &quot;DePainter&quot; NFT? </>,
      detail:
  <>
    Currently, mint HypeTeen is the only way to acquire &quot;Depainter&quot; WL.<br />
    The whitelist will be gradually released. Please stay tuned for upcoming events!
  </>
    },
    {
      title:  <>3. As a CO-Creator, what benefit will I enjoy?  </>,
      detail: <>10% of Co-NFT sales revenue on the launchpad, and 10% of the royalty from the later transaction.</>
    },
    {
      title:  <>4.If I&apos;m an artist, where can I submit the cooperation application?</>,
      detail:
  <>
    Welcome to join Forart.ai!<br />
    Kindly fill the related info in <a href={' https://airtable.com/shrZrqgHKtAr2BPuV'} target={'_blank'} rel="noreferrer"> https://airtable.com/shrZrqgHKtAr2BPuV</a>
  </>
    },
    {
      title:  <>5. What benefit will I enjoy as an artist on Forart.ai</>,
      detail: <>After the CO-NFT creation is completed, this collection will be launched in multiple markets. Artists will receive 60% of the revenue and royalties from the transaction.</>
    },
    {
      title:  <>6. If I am a project party, where can I submit a cooperation application?</>,
      detail:
  <>
    Your cooperation proposal is highly welcome! Kindly fill it in
    <a href={'https://airtable.com/shrBHhxpSfatrQ8nA'} target={'_blank'} rel="noreferrer"> https://airtable.com/shrBHhxpSfatrQ8nA</a>
  </>
    },
    {
      title:  <>7. How easy forart.ai platform will be accessible for Newbies?</>,
      detail:
  <>
    Forart.ai has always attached importance to the user’s sense of interactive experience.<br />
    We continuously optimize the interaction of our platform according to the feedback while moving forward.<br />
    If you have any suggestion regarding our project, welcome to drop them in our Discord community!
  </>
    },
    {
      title:  <> 8. What are the platforms where I can keep informed about the updates and progresses of your project?</>,
      detail:
  <>
    Kindly follow our official Twitter and official Medium, all the updates will be released there. <br />

    Twitter: <a href={'https://twitter.com/forart_ai'} target={'_blank'} rel="noreferrer">https://twitter.com/forart_ai</a> <br />

    Medium:  <a href={'https://medium.com/@Forart.ai'} target={'_blank'} rel="noreferrer"> https://medium.com/@Forart.ai</a> <br />

  </>
    }
  ]

  // @ts-ignore
  return (
    <>
      <Border>
        <Text data-aos={'fade-right'}>
          <div className={'bold'}>How can we help you?</div>
          <svg className="roadmap-swirly"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="none"
          >
            <path d="M5 20 l320 0"stroke="#0044c9"  />
            <path d="M5 20 l320 0" />
          </svg>
          <span>Everything you need to know about Forart.</span>
        </Text>

      </Border>
      <Wrapper>
        <div  className="custom-shape-divider-top-1659492913">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            />
          </svg>
        </div>
        <CollapseWrapper data-aos={'fade-up'}>

          {
            FAQContent.map((item,index) => (
              <Accordion key={index} >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <TitleText>{item.title}</TitleText>
                </AccordionSummary>
                <AccordionDetails>
                  <DetailText>
                    {item.detail}
                  </DetailText>
                </AccordionDetails>
              </Accordion>
            ))
          }



        </CollapseWrapper>
      </Wrapper>


    </>
  )
}

export default FAQPage

