import { Container, Box, Typography, Card, CardContent, Avatar, Chip, Divider, Button } from '@mui/material';
import { useAuthStore } from '../../store/useAuthStore.ts';
import { useNavigate } from 'react-router-dom';
import { mockTeams } from '../../mock/data.ts';

const roleLabels = {
  'organizador': 'Organizador',
  'jogador': 'Jogador',
  'capitao': 'Capitão de Time',
};

export default function Profile() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  if (!user) {
    return (
      <Container maxWidth="sm" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Você não está logado
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          Fazer Login
        </Button>
      </Container>
    );
  }

  const userTeams = mockTeams.filter((team) => team.captainId === user.id);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" fontWeight={700} gutterBottom>
        👤 Meu Perfil
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
            <Avatar
              src={user.avatar}
              alt={user.name}
              sx={{ width: 100, height: 100 }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" fontWeight={600} gutterBottom>
                {user.name}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {user.email}
              </Typography>
              <Chip
                label={roleLabels[user.role]}
                color="primary"
                size="small"
              />
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom fontWeight={600}>
            📊 Estatísticas
          </Typography>

          <Box sx={{ display: 'flex', gap: 4, mt: 2 }}>
            <Box>
              <Typography variant="h4" color="primary" fontWeight={700}>
                {userTeams.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Times
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" color="primary" fontWeight={700}>
                {userTeams.reduce((acc, team) => acc + (team.wins || 0), 0)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Vitórias
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" color="primary" fontWeight={700}>
                {userTeams.reduce((acc, team) => acc + (team.losses || 0), 0)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Derrotas
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom fontWeight={600}>
            ⚙️ Configurações
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <Button variant="outlined" fullWidth>
              Editar Perfil
            </Button>
            <Button variant="outlined" fullWidth>
              Alterar Senha
            </Button>
            <Button variant="outlined" color="error" fullWidth onClick={handleLogout}>
              Sair da Conta
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
