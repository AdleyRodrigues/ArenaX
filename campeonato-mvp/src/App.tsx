import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home/index.tsx';
import Tournaments from './pages/Tournaments/index.tsx';
import TournamentDetails from './pages/TournamentDetails/index.tsx';
import Teams from './pages/Teams/index.tsx';
import Profile from './pages/Profile/index.tsx';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/tournaments/:id" element={<TournamentDetails />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
