import { AppBar, Toolbar, Typography, Button, Box, Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore.ts';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { label: 'Home', path: '/', icon: <HomeIcon /> },
    { label: 'Campeonatos', path: '/tournaments', icon: <EmojiEventsIcon /> },
    { label: 'Times', path: '/teams', icon: <GroupsIcon /> },
  ];

  return (
    <AppBar position="sticky" color="inherit" elevation={0}>
      <Toolbar sx={{ py: 1 }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 0,
            fontWeight: 800,
            textDecoration: 'none',
            color: 'primary.main',
            mr: 6,
            fontSize: '1.5rem',
            background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          🏆 Campeonato MVP
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              startIcon={item.icon}
              sx={{
                color: isActive(item.path) ? 'primary.main' : 'text.secondary',
                fontWeight: isActive(item.path) ? 700 : 500,
                px: 2,
                '&:hover': {
                  bgcolor: 'rgba(25, 118, 210, 0.04)',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {isAuthenticated && user ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography 
              variant="body2" 
              fontWeight={600}
              sx={{ display: { xs: 'none', sm: 'block' }, color: 'text.primary' }}
            >
              {user.name}
            </Typography>
            <IconButton onClick={handleMenu} size="small" sx={{ p: 0 }}>
              <Avatar
                src={user.avatar}
                alt={user.name}
                sx={{ 
                  width: 40, 
                  height: 40,
                  border: '2px solid',
                  borderColor: 'primary.main',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              PaperProps={{
                elevation: 3,
                sx: {
                  mt: 1.5,
                  minWidth: 180,
                  borderRadius: 2,
                },
              }}
            >
              <MenuItem 
                onClick={() => { navigate('/profile'); handleClose(); }}
                sx={{ fontWeight: 500, py: 1.5 }}
              >
                Meu Perfil
              </MenuItem>
              <MenuItem 
                onClick={handleLogout}
                sx={{ fontWeight: 500, py: 1.5, color: 'error.main' }}
              >
                Sair
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Button 
            color="primary" 
            variant="contained"
            sx={{ ml: 'auto' }}
          >
            Entrar
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
