import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    h2: {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: '#fff',
      marginBottom: '10px'
    },
    body2: {
      fontSize: '11px',
      color: '#fff'
    },
    caption: {
      fontSize: '10px'
    }
  },
  components: {
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          maxWidth: '120px',
          minWidth: '60px',
          color: '#67819B',
          '&.Mui-selected': {
            color: '#fff'
          }
        }
      }
    }
  }
}); 