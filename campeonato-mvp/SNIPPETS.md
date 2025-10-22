# 📚 Snippets e Exemplos de Código

## Componente Base com MUI

```typescript
import { Box, Typography, Button } from '@mui/material';

interface MeuComponenteProps {
  titulo: string;
  descricao?: string;
  onAction?: () => void;
}

export default function MeuComponente({ 
  titulo, 
  descricao, 
  onAction 
}: MeuComponenteProps) {
  return (
    <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        {titulo}
      </Typography>
      {descricao && (
        <Typography variant="body2" color="text.secondary">
          {descricao}
        </Typography>
      )}
      {onAction && (
        <Button variant="contained" onClick={onAction} sx={{ mt: 2 }}>
          Ação
        </Button>
      )}
    </Box>
  );
}
```

## Card Customizado

```typescript
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

export default function MeuCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Título do Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Conteúdo do card aqui
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver Mais</Button>
      </CardActions>
    </Card>
  );
}
```

## Lista com Avatar

```typescript
import { List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';

export default function MinhaLista({ items }) {
  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id}>
          <ListItemAvatar>
            <Avatar src={item.avatar} alt={item.name} />
          </ListItemAvatar>
          <ListItemText
            primary={item.name}
            secondary={item.description}
          />
        </ListItem>
      ))}
    </List>
  );
}
```

## Modal/Dialog

```typescript
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

interface MeuDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function MeuDialog({ open, onClose, onConfirm }: MeuDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Confirmar Ação</DialogTitle>
      <DialogContent>
        <Typography>
          Tem certeza que deseja realizar esta ação?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={onConfirm} variant="contained">
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
```

## Formulário com Validação

```typescript
import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';

export default function MeuForm() {
  const [nome, setNome] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (nome.trim().length < 3) {
      setErro('Nome deve ter pelo menos 3 caracteres');
      return;
    }
    
    setErro('');
    // Processar formulário
    console.log('Nome:', nome);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        error={!!erro}
        helperText={erro}
        required
      />
      <Button type="submit" variant="contained">
        Enviar
      </Button>
    </Box>
  );
}
```

## Tabs

```typescript
import { Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';

export default function MinhasTabs() {
  const [value, setValue] = useState(0);

  return (
    <Box>
      <Tabs value={value} onChange={(_, newValue) => setValue(newValue)}>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>
      
      {value === 0 && <Box sx={{ p: 3 }}>Conteúdo Tab 1</Box>}
      {value === 1 && <Box sx={{ p: 3 }}>Conteúdo Tab 2</Box>}
      {value === 2 && <Box sx={{ p: 3 }}>Conteúdo Tab 3</Box>}
    </Box>
  );
}
```

## Chip com Status

```typescript
import { Chip } from '@mui/material';
import type { TournamentStatus } from '../types/index.ts';

const statusConfig = {
  'inscricoes-abertas': { label: 'Aberto', color: 'success' as const },
  'em-andamento': { label: 'Em Jogo', color: 'info' as const },
  'finalizado': { label: 'Finalizado', color: 'default' as const },
  'cancelado': { label: 'Cancelado', color: 'error' as const },
};

export default function StatusChip({ status }: { status: TournamentStatus }) {
  const config = statusConfig[status];
  return <Chip label={config.label} color={config.color} size="small" />;
}
```

## Loading com Skeleton

```typescript
import { Box, Skeleton } from '@mui/material';

export default function CardSkeleton() {
  return (
    <Box>
      <Skeleton variant="rectangular" height={200} />
      <Box sx={{ p: 2 }}>
        <Skeleton variant="text" height={40} width="60%" />
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" height={20} width="80%" />
      </Box>
    </Box>
  );
}
```

## Layout Responsivo com Box

```typescript
import { Box } from '@mui/material';

export default function LayoutResponsivo() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',                    // Mobile: 1 coluna
          sm: 'repeat(2, 1fr)',        // Tablet: 2 colunas
          md: 'repeat(3, 1fr)',        // Desktop: 3 colunas
        },
        gap: 3,
        p: 3,
      }}
    >
      {/* Conteúdo aqui */}
    </Box>
  );
}
```

## useNavigate Hook

```typescript
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function MeuBotao() {
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate('/tournaments')}>
        Ir para Campeonatos
      </Button>
      <Button onClick={() => navigate('/tournaments/123')}>
        Ver Torneio Específico
      </Button>
      <Button onClick={() => navigate(-1)}>
        Voltar
      </Button>
    </>
  );
}
```

## Custom Hook com Zustand

```typescript
// store/useNotificationStore.ts
import { create } from 'zustand';

interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface NotificationStore {
  notifications: Notification[];
  addNotification: (message: string, type: Notification['type']) => void;
  removeNotification: (id: string) => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  
  addNotification: (message, type) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { id: crypto.randomUUID(), message, type },
      ],
    })),
  
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
}));
```

---

💡 **Dica:** Copie e adapte esses snippets conforme necessário para acelerar o desenvolvimento!
