import { Card, CardContent, CardMedia, Typography, Box, Chip, Button, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { Tournament } from '../types/index.ts';

interface TournamentCardProps {
  tournament: Tournament;
}

const sportLabels = {
  'lol': 'League of Legends',
  'futebol': 'Futebol',
  'beach-tennis': 'Beach Tennis',
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

export default function TournamentCard({ tournament }: TournamentCardProps) {
  const navigate = useNavigate();

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        cursor: 'pointer',
      }}
      onClick={() => navigate(`/tournaments/${tournament.id}`)}
    >
      <CardMedia
        component="img"
        height="180"
        image={tournament.banner || 'https://via.placeholder.com/400x180?text=Torneio'}
        alt={tournament.name}
      />
      
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Chip
            label={sportLabels[tournament.sport]}
            size="small"
            variant="outlined"
          />
          <Chip
            label={statusLabels[tournament.status]}
            color={statusColors[tournament.status]}
            size="small"
          />
        </Box>

        <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
          {tournament.name}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {tournament.description.length > 100
            ? `${tournament.description.substring(0, 100)}...`
            : tournament.description}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="body2" color="text.secondary">
            📅 {tournament.startDate.toLocaleDateString('pt-BR')}
          </Typography>

          <Typography variant="body2" color="primary">
            👥 {tournament.currentTeams}/{tournament.maxTeams} times
          </Typography>

          {tournament.prize && (
            <Typography variant="body2" color="success.main" fontWeight="bold">
              🏆 {tournament.prize}
            </Typography>
          )}
        </Box>
      </CardContent>

      <CardActions sx={{ p: 2 }}>
        <Button
          fullWidth
          variant="contained"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/tournaments/${tournament.id}`);
          }}
        >
          Ver Detalhes
        </Button>
      </CardActions>
    </Card>
  );
}
