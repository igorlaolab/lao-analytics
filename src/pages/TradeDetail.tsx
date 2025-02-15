import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Paper, 
  Button,
  styled 
} from '@mui/material';

const ActionButton = styled(Button)({
  width: '45%',
  padding: '12px',
});

const TradeDetail: React.FC = () => {
  const { symbol } = useParams<{ symbol: string }>();

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {symbol?.toUpperCase()} Analysis
      </Typography>

      {/* Здесь будет график */}
      <Paper 
        sx={{ 
          height: '300px', 
          mb: 2, 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography>Chart Placeholder</Typography>
      </Paper>

      {/* AI Анализ */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>AI Analysis</Typography>
        <Typography variant="body2">
          Based on current market conditions and technical analysis, 
          our AI predicts a bullish trend with 78% probability. 
          Key indicators show strong buying pressure and positive momentum.
        </Typography>
      </Paper>

      {/* Позиции */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>Your Positions</Typography>
        <Typography variant="body2" color="text.secondary">
          No open positions
        </Typography>
      </Paper>

      {/* Кнопки действий */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        position: 'fixed',
        bottom: 70,
        left: 0,
        right: 0,
        padding: 2,
        backgroundColor: 'white'
      }}>
        <ActionButton 
          variant="contained" 
          color="success"
        >
          Long
        </ActionButton>
        <ActionButton 
          variant="contained" 
          color="error"
        >
          Short
        </ActionButton>
      </Box>
    </Box>
  );
};

export default TradeDetail; 