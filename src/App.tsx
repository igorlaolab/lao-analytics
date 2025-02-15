import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Trade from './pages/Trade';
import TradeDetail from './pages/TradeDetail';
import Friends from './pages/Friends';
import './App.css'
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/trade/:symbol" element={<TradeDetail />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
