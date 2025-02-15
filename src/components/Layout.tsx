import { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper, styled } from '@mui/material';
import { Home, ShowChart, Leaderboard, People } from '@mui/icons-material';

const StyledBottomNav = styled(BottomNavigation)({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
});

const PageContainer = styled('div')({
  paddingBottom: '56px', // Высота нижней навигации
  minHeight: '100vh',
  background: '#f5f5f5',
});

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <PageContainer>
      {children}
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