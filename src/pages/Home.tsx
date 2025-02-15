// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { initTelegram } from '../telegram';
import { Box, Avatar, Grid, Typography, Paper, styled } from '@mui/material';

const StatsBlock = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const NewsItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1),
}));

const PositionItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1),
}));

const Home: React.FC = () => {
  const [tgUser, setTgUser] = useState<string | null>(null);

  useEffect(() => {
    const tg = initTelegram();
    if (tg && tg.initData) {
      // Здесь можно распарсить tg.initData для получения информации о пользователе,
      // например, с помощью URLSearchParams, если данные приходят в таком виде.
      console.log("Данные Telegram:", tg.initData);
      setTgUser(tg.initData);
    }
  }, []);

  // Генерация случайного аватара
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random()}`;

  return (
    <Box sx={{ p: 2 }}>
      {/* Профиль */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Avatar
          src={avatarUrl}
          sx={{ width: 80, height: 80 }}
        />
      </Box>

      {/* Статистика */}
      <StatsBlock>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="caption">Winrate</Typography>
            <Typography variant="h6">65%</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="caption">Balance</Typography>
            <Typography variant="h6">$1,234</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="caption">Friends</Typography>
            <Typography variant="h6">42</Typography>
          </Grid>
        </Grid>
      </StatsBlock>

      {/* Новости */}
      <Typography variant="h6" sx={{ mb: 1 }}>News</Typography>
      <NewsItem>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Bitcoin shows strong momentum as institutional investors continue to show interest in cryptocurrency markets...
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="caption">BTC</Typography>
          <Typography variant="caption">2024-02-20</Typography>
        </Box>
      </NewsItem>

      {/* Позиции */}
      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Your Positions</Typography>
      <PositionItem>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Typography variant="body2">BTC</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body2">$45,000</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body2">$46,000</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body2" color="success.main">+2.2%</Typography>
          </Grid>
        </Grid>
      </PositionItem>

      <Link to="/analytics">Перейти к аналитике</Link>
    </Box>
  );
};

export default Home;
