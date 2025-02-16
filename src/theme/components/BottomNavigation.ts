export const BottomNavigationStyles = {
  MuiBottomNavigationAction: {
    styleOverrides: {
      root: {
        maxWidth: '120px',
        minWidth: '60px',
        color: '#67819B',
        '&.Mui-selected': {
          color: '#fff'
        },
        '&:focus': {
          outline: 'none !important'
        },
        '&.Mui-focusVisible': {
          outline: 'none !important'
        }
      }
    }
  }
}; 