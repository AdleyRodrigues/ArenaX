import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: string;
  actionLabel?: string;
  actionPath?: string;
}

export default function EmptyState({
  title,
  description,
  icon = '📭',
  actionLabel,
  actionPath,
}: EmptyStateProps) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px',
        textAlign: 'center',
        p: 4,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '4rem', mb: 2 }}>
        {icon}
      </Typography>
      <Typography variant="h5" gutterBottom color="text.primary">
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 400 }}>
        {description}
      </Typography>
      {actionLabel && actionPath && (
        <Button variant="contained" size="large" onClick={() => navigate(actionPath)}>
          {actionLabel}
        </Button>
      )}
    </Box>
  );
}
