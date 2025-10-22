import { Container, Box, Typography, Chip, Button, Card, CardContent, Divider, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { mockTournaments } from '../../mock/data.ts';
import EmptyState from '../../components/EmptyState.tsx';

const sportLabels = {
  'lol': '🎮 League of Legends',
  'futebol': '⚽ Futebol',
  'beach-tennis': '🏐 Beach Tennis',
};

const statusColors = {
  'inscricoes-abertas': 'success',
  'em-andamento': 'info',
  'finalizado': 'default',
  'cancelado': 'error',
} as const;

const statusLabels = {
  'inscricoes-abertas': 'Inscrições Abertas',
  'em-andamento': 'Em Andamento',
  'finalizado': 'Finalizado',
  'cancelado': 'Cancelado',
};

export default function TournamentDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const tournament = mockTournaments.find((t) => t.id === id);

  if (!tournament) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <EmptyState
          title="Campeonato não encontrado"
          description="O campeonato que você está procurando não existe ou foi removido."
          icon="❌"
          actionLabel="Voltar para Campeonatos"
          actionPath="/tournaments"
        />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button variant="text" onClick={() => navigate('/tournaments')} sx={{ mb: 2 }}>
        ← Voltar
      </Button>

      {/* Banner */}
      <Box
        sx={{
          width: '100%',
          height: 300,
          borderRadius: 2,
          backgroundImage: `url(${tournament.banner || 'https://via.placeholder.com/1200x300'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mb: 3,
        }}
      />

      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <Chip
            label={statusLabels[tournament.status]}
            color={statusColors[tournament.status]}
          />
          <Chip
            label={sportLabels[tournament.sport]}
            variant="outlined"
          />
          <Chip
            label={tournament.bracketType}
            variant="outlined"
          />
        </Box>

        <Typography variant="h3" fontWeight={700} gutterBottom>
          {tournament.name}
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          {tournament.description}
        </Typography>

        {tournament.status === 'inscricoes-abertas' && (
          <Button variant="contained" size="large">
            Inscrever Meu Time
          </Button>
        )}
      </Box>

      <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
        {/* Informações Principais */}
        <Box sx={{ flex: 1 }}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight={600}>
                📋 Informações
              </Typography>
              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Data de Início
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    {tournament.startDate.toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </Typography>
                </Box>

                {tournament.endDate && (
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Data de Término
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      {tournament.endDate.toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </Typography>
                  </Box>
                )}

                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Prazo de Inscrição
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    {tournament.registrationDeadline.toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Vagas
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    {tournament.currentTeams} / {tournament.maxTeams} times
                  </Typography>
                </Box>

                {tournament.prize && (
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Premiação
                    </Typography>
                    <Typography variant="body1" fontWeight={500} color="success.main">
                      🏆 {tournament.prize}
                    </Typography>
                  </Box>
                )}
              </Box>
            </CardContent>
          </Card>

          {/* Regras */}
          {tournament.rules && tournament.rules.length > 0 && (
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  📜 Regras
                </Typography>
                <Divider sx={{ my: 2 }} />
                <List>
                  {tournament.rules.map((rule, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primary={`${index + 1}. ${rule}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          )}
        </Box>

        {/* Times Participantes */}
        <Box sx={{ flex: 1 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight={600}>
                👥 Times Participantes ({tournament.teams.length})
              </Typography>
              <Divider sx={{ my: 2 }} />

              {tournament.teams.length > 0 ? (
                <List>
                  {tournament.teams.map((team) => (
                    <ListItem key={team.id}>
                      <ListItemAvatar>
                        <Avatar>{team.logo}</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={team.name}
                        secondary={`${team.players.length} jogadores`}
                      />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography variant="body2" color="text.secondary" align="center" sx={{ py: 2 }}>
                  Nenhum time inscrito ainda
                </Typography>
              )}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
