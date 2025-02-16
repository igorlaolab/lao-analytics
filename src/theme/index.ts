import { createTheme } from '@mui/material/styles';
import { BottomNavigationStyles } from './components/BottomNavigation';
import { TypographyStyles } from './components/Typography';

export const theme = createTheme({
  typography: TypographyStyles,
  components: {
    ...BottomNavigationStyles
  }
}); 