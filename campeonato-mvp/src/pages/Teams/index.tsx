import { Container, Box, Typography, Button } from '@mui/material';
import { TeamCard, EmptyState } from '../../components/index.ts';
import { mockTeams } from '../../mock/data.ts';

export default function Teams() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Meus Times 👥
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Gerencie seus times e veja o desempenho de cada um
          </Typography>
        </Box>
        <Button variant="contained" size="large">
          Criar Time
        </Button>
      </Box>

      {mockTeams.length > 0 ? (
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 3 }}>
          {mockTeams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </Box>
      ) : (
        <EmptyState
          title="Você ainda não tem times"
          description="Crie seu primeiro time e comece a competir nos melhores campeonatos!"
          icon="🎯"
          actionLabel="Criar Meu Primeiro Time"
          actionPath="/teams"
        />
      )}
    </Container>
  );
}
