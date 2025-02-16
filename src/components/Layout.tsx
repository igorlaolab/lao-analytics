import { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper, styled, Box } from '@mui/material';
import { Home, ShowChart, Leaderboard, People } from '@mui/icons-material';

const StyledBottomNav = styled(BottomNavigation)({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#07192B',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
});

const PageContainer = styled('div')({
  minHeight: '100vh',
  maxWidth: '600px',
  margin: '0 auto',
});

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <PageContainer>
          <Box sx={{ 
      p: 2, 
      backgroundColor: '#07192B',
      height: 'calc(100vh - 56px)'
    }}>

      {children}
      </Box>
      <Paper elevation={3}>
        <StyledBottomNav
          value={location.pathname}
          onChange={(_, newValue) => navigate(newValue)}
        >
          <BottomNavigationAction
            label="Home"
            value="/"
            icon={<Home />}
          />
          <BottomNavigationAction
            label="Trade"
            value="/trade"
            icon={<ShowChart />}
          />
          <BottomNavigationAction
            label="Leaderboard"
            value="/leaderboard"
            icon={<Leaderboard />}
          />
          <BottomNavigationAction
            label="Friends"
            value="/friends"
            icon={<People />}
          />
        </StyledBottomNav>
      </Paper>
    </PageContainer>
  );
};

export default Layout; 