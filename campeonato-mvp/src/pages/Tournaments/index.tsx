import { Container, Box, Typography, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import { TournamentCard, EmptyState } from '../../components/index.ts';
import { mockTournaments } from '../../mock/data.ts';
import type { TournamentStatus } from '../../types/index.ts';

export default function Tournaments() {
  const [selectedTab, setSelectedTab] = useState<TournamentStatus | 'todos'>('todos');

  const filteredTournaments =
    selectedTab === 'todos'
      ? mockTournaments
      : mockTournaments.filter((t) => t.status === selectedTab);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Campeonatos 🏆
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Explore todos os campeonatos disponíveis e encontre o perfeito para você!
      </Typography>

      <Tabs
        value={selectedTab}
        onChange={(_, newValue) => setSelectedTab(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 4 }}
      >
        <Tab label="Todos" value="todos" />
        <Tab label="Inscrições Abertas" value="inscricoes-abertas" />
        <Tab label="Em Andamento" value="em-andamento" />
        <Tab label="Finalizados" value="finalizado" />
      </Tabs>

      {filteredTournaments.length > 0 ? (
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 3 }}>
          {filteredTournaments.map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </Box>
      ) : (
        <EmptyState
          title="Nenhum campeonato encontrado"
          description="Não há campeonatos com esses filtros no momento. Tente selecionar outra categoria."
          icon="🔍"
        />
      )}
    </Container>
  );
}
