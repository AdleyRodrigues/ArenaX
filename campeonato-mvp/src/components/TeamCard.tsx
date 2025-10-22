import { Card, CardContent, Typography, Box, Avatar, AvatarGroup, Chip } from '@mui/material';
import type { Team } from '../types/index.ts';

interface TeamCardProps {
  team: Team;
}

const sportConfig = {
  'lol': { label: 'LOL', color: '#e74c3c', emoji: '🎮' },
  'futebol': { label: 'Futebol', color: '#27ae60', emoji: '⚽' },
  'beach-tennis': { label: 'Beach Tennis', color: '#f39c12', emoji: '🏐' },
};

export default function TeamCard({ team }: TeamCardProps) {
  const sport = sportConfig[team.sport];
  const winRate = team.wins && team.losses ? 
    Math.round((team.wins / (team.wins + team.losses)) * 100) : 0;
  const hasGoodWinRate = winRate >= 60;

  return (
    <Card 
      sx={{ 
        height: '100%', 
        cursor: 'pointer',
        position: 'relative',
        overflow: 'visible',
        '&:hover': {
          '& .team-logo': {
            transform: 'scale(1.1) rotate(-5deg)',
          },
        },
      }}
    >
      {/* Tag de destaque */}
      {hasGoodWinRate && (
        <Box
          sx={{
            position: 'absolute',
            top: -10,
            right: 12,
            bgcolor: 'success.main',
            color: 'white',
            px: 2,
            py: 0.5,
            borderRadius: 2,
            fontSize: '0.75rem',
            fontWeight: 'bold',
            boxShadow: 2,
            zIndex: 1,
          }}
        >
          🔥 {winRate}% de vitórias
        </Box>
      )}

      <CardContent sx={{ pt: hasGoodWinRate ? 3 : 2 }}>
        {/* Header com logo e info */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
          <Box
            className="team-logo"
            sx={{
              width: 64,
              height: 64,
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              bgcolor: 'primary.main',
              color: 'white',
              boxShadow: 3,
              transition: 'all 0.3s ease',
            }}
          >
            {team.logo}
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography 
              variant="h6" 
              component="h3" 
              fontWeight="bold" 
              gutterBottom
              sx={{ 
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {team.name}
            </Typography>
            <Chip
              label={`${sport.emoji} ${sport.label}`}
              size="small"
              sx={{
                bgcolor: sport.color,
                color: 'white',
                fontWeight: 600,
                '& .MuiChip-label': {
                  px: 1,
                },
              }}
            />
          </Box>
        </Box>

        {/* Jogadores */}
        <Box sx={{ mb: 2.5 }}>
          <Typography 
            variant="caption" 
            color="text.secondary" 
            fontWeight={600}
            sx={{ display: 'block', mb: 1 }}
          >
            SQUAD · {team.players.length} jogadores
          </Typography>
          <AvatarGroup 
            max={5}
            sx={{
              '& .MuiAvatar-root': {
                width: 36,
                height: 36,
                border: '2px solid white',
                fontSize: '0.875rem',
              },
            }}
          >
            {team.players.map((player) => (
              <Avatar
                key={player.id}
                alt={player.name}
                src={player.avatar}
                title={player.name}
              />
            ))}
          </AvatarGroup>
        </Box>

        {/* Stats */}
        {(team.wins !== undefined || team.losses !== undefined) && (
          <Box 
            sx={{ 
              display: 'flex', 
              gap: 2,
              pt: 2,
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Typography variant="h6" color="success.main" fontWeight="bold">
                {team.wins || 0}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Vitórias
              </Typography>
            </Box>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Typography variant="h6" color="error.main" fontWeight="bold">
                {team.losses || 0}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Derrotas
              </Typography>
            </Box>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Typography variant="h6" color="primary.main" fontWeight="bold">
                {winRate}%
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Taxa
              </Typography>
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
