import { Container, Box, Typography, Button, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TournamentCard } from '../../components/index.ts';
import { mockTournaments } from '../../mock/data.ts';
import { useAuthStore } from '../../store/useAuthStore.ts';

export default function Home() {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  // Mostra apenas torneios com inscrições abertas na home
  const featuredTournaments = mockTournaments.filter(
    (t) => t.status === 'inscricoes-abertas'
  ).slice(0, 3);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 1.5,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom fontWeight="bold">
            Bem-vindo ao Campeonato MVP! 🏆
          </Typography>
          
          {user && (
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
              Olá, {user.name}! 👋
            </Typography>
          )}
          
          <Typography variant="body1" sx={{ mb: 4, maxWidth: 600 }}>
            A plataforma definitiva para organizar torneios de League of Legends, futebol e beach tennis.
            Crie seu time, inscreva-se em campeonatos e mostre suas habilidades!
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/tournaments')}
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'grey.100',
                },
              }}
            >
              Ver Campeonatos
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/teams')}
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Meus Times
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Torneios em Destaque */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Inscrições Abertas 🔥
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Participe agora dos campeonatos disponíveis
          </Typography>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 3 }}>
            {featuredTournaments.map((tournament) => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </Box>
        </Box>

        {/* CTA Final */}
        <Card sx={{ mb: 6, textAlign: 'center', py: 4 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom fontWeight="bold">
              Pronto para competir?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Crie seu time, reúna seus amigos e participe dos melhores campeonatos!
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/teams')}
              >
                Criar Meu Time
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/tournaments')}
              >
                Explorar Torneios
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
