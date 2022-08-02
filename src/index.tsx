import React from 'react'
// @ts-ignore
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { styled, ThemeProvider } from '@mui/material'
import ForartTheme from './contexts/config/dark'
import { QueryClient, QueryClientProvider } from 'react-query'
import Navbar from './pages/top/navbar'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()

const Filter = styled('div')`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  position: absolute;
  z-index: 999;
  //background-color:rgba(27,0,53,.95) ;
`




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={ForartTheme}>
        <QueryClientProvider client={queryClient}>
          <Filter>
            <Navbar />
          </Filter>
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
  ,

  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
