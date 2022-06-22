import { createTheme } from '@mui/material/styles'

const ForartTheme = createTheme({

  breakpoints: {
    values: {
      xs: 370,
      sm: 576,
      md: 852,
      lg: 968,
      xl: 2000,
    },
  },
  palette: {
    mode:'dark',
    primary: {
      light: '#85fcd0',
      main: '#4fc89f',
      dark: '#009671',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ba75ff',
      main: '#8246F5',
      dark: '#5000B4',
      contrastText: '#fff',
    },
    success: {
      main: '#50dcb5',
      light: '#a1ead2',
      dark: '#00a363',
      contrastText: '#fff',
    },
    error: {
      main: '#ec1483',
      light: '#f186b8',
      dark: '#870057',
      contrastText: '#fff',
    },
    warning: {
      main: '#fb9526',
      light: '#ffd75d',
      dark: '#f97722',
      contrastText: '#fff',
    },
    info:{
      main: '#8145f5',
      light: '#b897f8',
      dark: '#5410eb',
      contrastText: ''
    },

    text:{
      primary: '#fff',
      secondary: '#A197AA',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
    background: {
      default: 'rgb(10,5,35)',
      paper: 'rgb(40,0,90)'
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#999999'
    },
    action: {
      disabled: 'rgba(255,255,255,0.4)',
    }
  },
  spacing: 10,

})

export default ForartTheme
