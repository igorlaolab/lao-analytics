import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  List, 
  ListItem, 
  ListItemText, 
  Box, 
  Typography, 
  Avatar,
  styled,
  ListItemButton
} from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';

const StyledListItem = styled(ListItem)({
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  '&:last-child': {
    borderBottom: 'none',
  },
});

interface CoinPrediction {
  symbol: string;
  name: string;
  prediction: 'Bullish' | 'Bearish';
  probability: number;
  icon: string;
}

const predictions: CoinPrediction[] = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    prediction: 'Bullish',
    probability: 78,
    icon: '₿',
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    prediction: 'Bearish',
    probability: 65,
    icon: 'Ξ',
  },
  // Добавьте больше монет по необходимости
];

const Trade: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ pb: 2 }}>
      <Typography variant="h6" sx={{ p: 2, pb: 1 }}>
        AI Predictions
      </Typography>
      
      <List>
        {predictions.map((coin) => (
          <ListItemButton 
            key={coin.symbol}
            onClick={() => navigate(`/trade/${coin.symbol.toLowerCase()}`)}
            sx={{ 
              borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
              '&:last-child': { borderBottom: 'none' }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                {coin.icon}
              </Avatar>
              <ListItemText 
                primary={coin.name}
                secondary={coin.symbol}
              />
            </Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              color: coin.prediction === 'Bullish' ? 'success.main' : 'error.main'
            }}>
              {coin.prediction === 'Bullish' ? <TrendingUp /> : <TrendingDown />}
              <Typography variant="body2" sx={{ ml: 1 }}>
                {coin.probability}%
              </Typography>
            </Box>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Trade; 