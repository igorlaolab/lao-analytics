// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { initTelegram } from '../telegram';
import { Box, Avatar, Typography, Paper, styled, Grid, useTheme } from '@mui/material';

const StatsBlock = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: '16px',
  marginBottom: theme.spacing(2),
  backgroundColor: 'rgba(255, 255, 255, 15%)',
  border: '1px solid rgba(255, 255, 255, 9%)',
  borderRadius: '10px',
  boxShadow: 'none',
  textAlign: 'center',
  maxWidth: '320px',
  margin: '0 auto',
}));

const NewsItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1),
  backgroundColor: 'rgba(255, 255, 255, 5%)',
  color: '#fff',
  borderRadius: '10px',
  boxShadow: 'none',
}));

const PositionItem = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(1),
  borderRadius: '10px',
  boxShadow: 'none',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
}));

const CurrencyText = styled(Typography)({
  fontSize: '16px',
  fontWeight: 600,
  color: '#fff',
  fontFamily: 'Gilroy'
});

const DateText = styled(Typography)({
  fontSize: '12px',
  color: '#67819B',
  fontFamily: 'Inter'
});

const PriceLabel = styled(Typography)({
  fontSize: '12px',
  color: '#67819B',
  fontFamily: 'Inter'
});

const PriceValue = styled(Typography)({
  fontSize: '14px',
  color: '#fff',
  fontFamily: 'Inter'
});

const ProfitBox = styled(Box)(({ profit }: { profit: boolean }) => ({
  backgroundColor: profit ? 'rgba(152, 227, 94, 15%)' : 'rgba(255, 77, 79, 15%)',
  borderRadius: '0 10px 10px 0',
  color: profit ? '#00FF47' : '#FF4747',
  fontSize: '14px',
  fontWeight: 500,
  fontFamily: 'Inter',
  width: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StatCaption = styled(Typography)({
  color: '#A1BDD9',
  fontSize: '12px',
  fontFamily: 'Noto Sans',
  fontWeight: 400
});

const StatValue = styled(Typography)({
  color: '#ECC80C',
  fontSize: '15px',
  fontFamily: 'Gilroy',
  fontWeight: 600,
});

const Home: React.FC = () => {
  const theme = useTheme();
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
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Avatar
          src={avatarUrl}
          sx={{ width: 64, height: 64 }}
        />
      </Box>
      <StatsBlock>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <StatValue>65%</StatValue>
            <StatCaption>Winrate</StatCaption>
          </Grid>
          <Grid item xs={6}>
            <StatValue>100,561.23 USDT</StatValue>
            <StatCaption>Balance</StatCaption>
          </Grid>
          <Grid item xs={3}>
            <StatValue>42</StatValue>
            <StatCaption>Friends</StatCaption>
          </Grid>
        </Grid>
      </StatsBlock>

      {/* Новости */}
      <Box sx={{ mt: '20px', mb: 4 }}>
        <Typography variant="h2">Top News</Typography>
        <NewsItem>
          <Typography variant="body2" sx={{ mb: 1, fontSize: '11px' }}>
            Ripple (XRP) surpassed $1 this November, reaching $1.20 on the 14th, gaining attention for its cross-border payment innovations.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="caption" sx={{ color: '#66B3FF' }}>XRP</Typography>
            <Typography variant="caption" sx={{ color: '#67819B' }}>11/29/2024, 10:10 AM, Google Finance</Typography>
          </Box>
        </NewsItem>
        <NewsItem>
          <Typography variant="body2" sx={{ mb: 1, fontSize: '11px' }}>
            Solana (SOL) climbed past $200 this November, setting a new high of $215 on the 14th, praised for its fast transactions.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="caption" sx={{ color: '#66B3FF' }}>SOL</Typography>
            <Typography variant="caption" sx={{ color: '#67819B' }}>11/29/2024, 10:10 AM, CNBC</Typography>
          </Box>
        </NewsItem>
        <NewsItem>
          <Typography variant="body2" sx={{ mb: 1, fontSize: '11px' }}>
            Ethereum (ETH) rose above $3,000 this November, reaching $3,250 on the 14th, driven by excitement over upcoming upgrades.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="caption" sx={{ color: '#66B3FF' }}>ETH</Typography>
            <Typography variant="caption" sx={{ color: '#67819B' }}>11/29/2024, 10:10 AM, MarketWatch</Typography>
          </Box>
        </NewsItem>
      </Box>

      {/* Позиции */}
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h2">Your Positions</Typography>
          <Typography variant="h2" sx={{ width: '60px', textAlign: 'center' }}>PnL</Typography>
        </Box>
        <PositionItem>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: 1, padding: '8px 12px' }}>
            <Box>
              <CurrencyText>BTC</CurrencyText>
              <DateText>Jun 12, 2025 13:45</DateText>
            </Box>
            <Box>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PriceLabel>Entry Price</PriceLabel>
                  <PriceValue>$105,170.88</PriceValue>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PriceLabel>Current Price</PriceLabel>
                  <PriceValue>$108,234.10</PriceValue>
                </Box>
              </Box>
            </Box>
          </Box>
          <ProfitBox profit={false}>-11.2%</ProfitBox>
        </PositionItem>

        <PositionItem>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: 1, padding: '8px 12px' }}>
            <Box>
              <CurrencyText>BTC</CurrencyText>
              <DateText>Jun 12, 2025 13:45</DateText>
            </Box>
            <Box>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PriceLabel>Entry Price</PriceLabel>
                  <PriceValue>$105,170.88</PriceValue>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PriceLabel>Current Price</PriceLabel>
                  <PriceValue>$108,234.10</PriceValue>
                </Box>
              </Box>
            </Box>
          </Box>
          <ProfitBox profit={true}>11.2%</ProfitBox>
        </PositionItem>
      </Box>
    </Box>
  );
};

export default Home;
