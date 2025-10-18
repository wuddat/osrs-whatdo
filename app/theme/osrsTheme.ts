import { createTheme } from '@mui/material/styles';

export const osrsTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFCF3F', // yellow
      dark: '#E6A519', // gold
      contrastText: '#0F0F0F', // black
    },
    secondary: {
      main: '#694D23', // brown
      dark: '#382D1A', // darkBrown
      contrastText: '#FFCF3F', // yellow
    },
    background: {
      default: '#2E2C29', // background
      paper: '#3E3A32', // panel
    },
    text: {
      primary: '#FFCF3F', // yellow
      secondary: '#C0C0C0',
    },
    divider: '#474745', // border
  },
  typography: {
    fontFamily: 'var(--font-runescape), sans-serif',
    h3: {
      fontWeight: 700,
      fontFamily: 'var(--font-runescape-bold)',
      color: '#FFCF3F',
      textShadow: '2px 2px 0px #0F0F0F',
    },
    h5: {
      fontWeight: 700,
      fontFamily: 'var(--font-runescape-bold)',
      color: '#FFCF3F',
    },
    h6: {
      fontWeight: 600,
      fontFamily: 'var(--font-runescape-bold)',
      color: '#E6A519',
    },
    body1: {
      fontFamily: 'var(--font-runescape)',
    },
    body2: {
      fontFamily: 'var(--font-runescape-small)',
    },
    button: {
      fontFamily: 'var(--font-runescape-bold)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          borderRadius: 0,
          border: '2px solid #474745',
          '&:hover': {
            border: '2px solid #E6A519',
          },
        },
        contained: {
          backgroundColor: '#694D23',
          color: '#FFCF3F',
          '&:hover': {
            backgroundColor: '#E6A519',
            color: '#0F0F0F',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#3E3A32',
            fontFamily: 'var(--font-runescape)',
            '& fieldset': {
              borderColor: '#474745',
              borderWidth: 2,
            },
            '&:hover fieldset': {
              borderColor: '#E6A519',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FFCF3F',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#C0C0C0',
            fontFamily: 'var(--font-runescape)',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#FFCF3F',
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: '#C0C0C0',
          backgroundColor: '#3E3A32',
          border: '2px solid #474745',
          borderRadius: 0,
          fontWeight: 600,
          fontFamily: 'var(--font-runescape-bold)',
          '&:hover': {
            backgroundColor: '#694D23',
            color: '#FFCF3F',
          },
          '&.Mui-selected': {
            backgroundColor: '#694D23',
            color: '#FFCF3F',
            border: '2px solid #E6A519',
            '&:hover': {
              backgroundColor: '#E6A519',
              color: '#0F0F0F',
            },
          },
        },
      },
    },
  },
});