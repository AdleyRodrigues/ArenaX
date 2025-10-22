# 🗺️ Mapa de Rotas - Campeonato MVP

## Rotas Disponíveis

### 🏠 Home - `/`
**Arquivo:** `src/pages/Home/index.tsx`

**Funcionalidade:**
- Hero section com boas-vindas personalizadas
- Estatísticas gerais (campeonatos, inscrições abertas, modalidades)
- Cards de torneios em destaque (apenas com inscrições abertas)
- Call-to-action para criar times

**Dados exibidos:**
- Filtra `mockTournaments` com status `inscricoes-abertas`
- Mostra nome do usuário logado via `useAuthStore`

---

### 🏆 Lista de Campeonatos - `/tournaments`
**Arquivo:** `src/pages/Tournaments/index.tsx`

**Funcionalidade:**
- Lista completa de todos os torneios
- Tabs para filtrar por status:
  - Todos
  - Inscrições Abertas
  - Em Andamento
  - Finalizados
- Grid responsivo com cards de torneios
- Empty state quando não há torneios

**Dados exibidos:**
- Todos os itens de `mockTournaments`
- Filtrado por `status` conforme tab selecionada

---

### 📋 Detalhes do Campeonato - `/tournaments/:id`
**Arquivo:** `src/pages/TournamentDetails/index.tsx`

**Funcionalidade:**
- Banner do torneio
- Informações completas (datas, vagas, premiação)
- Regras do campeonato
- Lista de times participantes
- Botão "Inscrever Meu Time" (se status = inscrições abertas)
- Botão voltar para lista de campeonatos

**Dados exibidos:**
- Busca torneio em `mockTournaments` por `:id` da URL
- Mostra 404 se torneio não for encontrado

**Navegação:**
- `useParams()` para pegar ID da rota
- `useNavigate()` para voltar

---

### 👥 Meus Times - `/teams`
**Arquivo:** `src/pages/Teams/index.tsx`

**Funcionalidade:**
- Grid com cards de times
- Botão "Criar Time" no header (funcionalidade futura)
- Exibe jogadores com avatares
- Estatísticas de vitórias/derrotas
- Empty state se não houver times

**Dados exibidos:**
- Todos os itens de `mockTeams`
- Futuramente: filtrar por `captainId === user.id`

---

### 👤 Perfil do Usuário - `/profile`
**Arquivo:** `src/pages/Profile/index.tsx`

**Funcionalidade:**
- Avatar e informações do usuário
- Badge com role (Organizador, Capitão, Jogador)
- Estatísticas gerais:
  - Número de times
  - Total de vitórias
  - Total de derrotas
- Botões de configuração:
  - Editar Perfil (futuro)
  - Alterar Senha (futuro)
  - Sair da Conta (funcional)

**Dados exibidos:**
- Pega usuário de `useAuthStore`
- Calcula estatísticas filtrando `mockTeams` por `captainId`
- Logout funcional (limpa store e redireciona)

---

## 🔐 Autenticação Simulada

**Store:** `src/store/useAuthStore.ts`

**Estado:**
- `user: User | null` - Dados do usuário logado
- `isAuthenticated: boolean` - Flag de autenticação

**Ações:**
- `login(user)` - Define usuário como logado
- `logout()` - Remove usuário e desloga
- `updateUser(data)` - Atualiza dados parciais

**Padrão:**
- Por padrão, `currentUser` de `mock/data.ts` está logado
- Navbar exibe avatar e menu do usuário logado
- Logout funcional redireciona para home

---

## 🧭 Navegação

### Navbar (presente em todas as rotas)
- Home → `/`
- Campeonatos → `/tournaments`
- Times → `/teams`
- Menu do usuário (clique no avatar):
  - Meu Perfil → `/profile`
  - Sair → logout e redirect para `/`

### Links entre páginas
- **Home → Campeonatos:** Botão "Ver Campeonatos" ou "Ver todos"
- **Home → Times:** Botão "Meus Times" ou "Criar Meu Time"
- **Campeonatos → Detalhes:** Click em card ou botão "Ver Detalhes"
- **Detalhes → Campeonatos:** Botão "← Voltar"
- **Qualquer página:** Links da Navbar sempre disponíveis

---

## 🎨 Componentes Reutilizados

### Em várias páginas:
- `TournamentCard` - Home, Tournaments
- `TeamCard` - Teams
- `EmptyState` - Tournaments, Teams, TournamentDetails (404)
- `Navbar` - Todas as páginas

### Futuros:
- `LoadingSkeleton` - Para estados de loading
- Modal de criação de time
- Modal de inscrição em torneio

---

## 🔮 Rotas Futuras Planejadas

- `/teams/create` - Formulário criar time
- `/teams/:id` - Detalhes de um time específico
- `/teams/:id/edit` - Editar time
- `/tournaments/create` - Criar torneio (organizadores)
- `/tournaments/:id/brackets` - Visualizar chaves
- `/tournaments/:id/register` - Inscrever time via link
- `/login` - Tela de login real
- `/signup` - Cadastro de usuário

---

## 📦 Estrutura de Props nas Rotas

### TournamentCard
```typescript
interface TournamentCardProps {
  tournament: Tournament; // Do mock/data.ts
}
```

### TeamCard
```typescript
interface TeamCardProps {
  team: Team; // Do mock/data.ts
}
```

### EmptyState
```typescript
interface EmptyStateProps {
  title: string;
  description: string;
  icon?: string;
  actionLabel?: string;
  actionPath?: string;
}
```

---

💡 **Dica:** Use `useNavigate()` do React Router para navegação programática e `Link` para links declarativos!
