import { Card, CardContent, Skeleton, Box } from '@mui/material';

export default function LoadingSkeleton() {
  return (
    <Card sx={{ height: '100%' }}>
      <Skeleton variant="rectangular" height={160} />
      <CardContent>
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <Skeleton variant="rounded" width={120} height={24} />
          <Skeleton variant="rounded" width={100} height={24} />
        </Box>
        <Skeleton variant="text" height={32} width="80%" />
        <Skeleton variant="text" height={20} width="100%" />
        <Skeleton variant="text" height={20} width="90%" />
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Skeleton variant="text" width={120} height={20} />
          <Skeleton variant="text" width={80} height={20} />
        </Box>
      </CardContent>
    </Card>
  );
}
