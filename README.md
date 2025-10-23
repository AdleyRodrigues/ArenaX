# 🏆 Campeonato MVP — Plataforma de Organização de Campeonatos

Este projeto é um **MVP (Produto Mínimo Viável)** de uma plataforma web desenvolvida em **React + TypeScript + Vite**, com o objetivo de **facilitar a criação, gestão e participação em campeonatos** — tanto de **esportes eletrônicos (ex: League of Legends)** quanto de **esportes físicos (ex: futebol, beach tênis)**.

A ideia é permitir que:

- Organizadores criem torneios facilmente;
- Times e jogadores possam se inscrever via link;
- O sistema gere automaticamente tabelas, chaves e resultados;
- Tudo aconteça em uma interface simples, moderna e responsiva.

---

## 🚀 Tecnologias principais

| Stack | Descrição |
|-------|------------|
| **React 19 + Vite** | Base do front-end com suporte a HMR (Hot Module Replacement). |
| **TypeScript 5.9** | Tipagem estática para segurança e produtividade. |
| **Material UI 7.3** | Biblioteca de componentes visuais para layout e design consistentes. |
| **React Router 7.9** | Gerenciamento de rotas e navegação entre páginas. |
| **Zustand 5.0** | Estado global leve e performático. |
| **Mock Data / JSON** | Base inicial com dados fictícios para o MVP antes da integração com backend. |

---

## 🎯 Status do MVP

- [x] Exibir lista de campeonatos (mockados)  
- [x] Criar tela de detalhes do torneio  
- [x] Criar e visualizar times com jogadores  
- [x] Navbar funcional com rotas entre as páginas
- [x] Sistema de autenticação simulado (usuário logado)
- [x] Tema customizado Material UI
- [x] Design responsivo (mobile e desktop)
- [ ] Simular inscrições e chaves automáticas  
- [ ] Integrar futuramente com backend em **Node + Supabase**

---

## 📁 Estrutura de Pastas Implementada

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Navbar.tsx       # Barra de navegação superior
│   ├── TournamentCard.tsx  # Card de torneio
│   ├── TeamCard.tsx     # Card de time
│   ├── LoadingSkeleton.tsx # Skeleton loader
│   └── EmptyState.tsx   # Estado vazio
├── pages/               # Páginas da aplicação
│   ├── Home/            # Página inicial com hero e destaques
│   ├── Tournaments/     # Lista de campeonatos com filtros
│   ├── TournamentDetails/ # Detalhes do torneio
│   ├── Teams/           # Lista de times do usuário
│   └── Profile/         # Perfil do usuário
├── mock/                # Dados mockados
│   └── data.ts          # Torneios, times e jogadores fictícios
├── store/               # Zustand stores
│   └── useAuthStore.ts  # Estado de autenticação
├── types/               # Tipagens TypeScript
│   └── index.ts         # Interfaces globais
├── theme.ts             # Tema customizado Material UI
├── App.tsx              # Configuração de rotas
└── main.tsx             # Entry point com providers
```

---

## 🛠️ Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- pnpm instalado (`npm install -g pnpm`)

### Instalação e Execução

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview da build de produção
pnpm preview

# Executar linter
pnpm lint
```

O projeto estará disponível em `http://localhost:5173`

---

## 🎨 Design System

### Paleta de Cores

- **Primary**: Azul (#1976d2) - Botões, links e destaques
- **Secondary**: Cinza escuro (#424242) - Textos secundários
- **Background**: Cinza claro (#f5f7fa) - Fundo da aplicação
- **Success**: Verde (#4caf50) - Inscrições abertas
- **Info**: Azul claro (#2196f3) - Em andamento
- **Error**: Vermelho (#f44336) - Cancelado

### Componentes Principais

- Cards com hover effect e sombra suave
- Botões sem text-transform (mantém capitalização)
- Border radius de 8px (botões) e 12px (cards)
- Tipografia: Inter (fallback: Roboto)

---

## 📱 Funcionalidades Implementadas

### Home

- Hero section com call-to-action
- Estatísticas de campeonatos
- Cards de torneios em destaque
- Navegação para páginas principais

### Campeonatos

- Lista completa de torneios
- Filtros por status (Todos, Inscrições Abertas, Em Andamento, Finalizados)
- Cards informativos com premiação e vagas
- Página de detalhes com regras e times participantes

### Times

- Listagem de times do usuário
- Visualização de jogadores (avatares)
- Estatísticas de vitórias/derrotas
- Botão para criar novo time (funcionalidade futura)

### Perfil

- Informações do usuário logado
- Estatísticas gerais (times, vitórias, derrotas)
- Opção de logout funcional

---

## 🔮 Próximos Passos

1. **Backend Integration**
   - Setup Supabase (PostgreSQL + Auth)
   - API REST para CRUD de torneios e times
   - Sistema de autenticação real

2. **Funcionalidades Adicionais**
   - Criação de times via formulário
   - Sistema de inscrição em torneios
   - Geração automática de chaves/brackets
   - Chat/comunicação entre times
   - Upload de logos de times

3. **Melhorias de UX**
   - Notificações toast
   - Loading states em ações assíncronas
   - Validação de formulários
   - Dark mode

---

## 📄 Licença

Este projeto é um MVP educacional. Sinta-se livre para usar como referência!

---

## 👨‍💻 Desenvolvimento

Desenvolvido com ❤️ usando as melhores práticas de React e TypeScript.

Para contribuir, siga as convenções estabelecidas em `.github/copilot-instructions.md`.

---

## 📚 Documentação consolidada

Para reduzir a quantidade de arquivos .md, consolidamos aqui os guias e referências antes distribuídos em vários documentos. As seções abaixo podem ser expandidas conforme necessário.

<details>
<summary><strong>🚀 Guia Rápido de Desenvolvimento</strong></summary>

### Comandos Essenciais

```bash
# Desenvolvimento
pnpm dev              # Inicia servidor dev em http://localhost:5173

# Build & Preview
pnpm build            # Compila TypeScript + Build de produção
pnpm preview          # Preview da build local

# Qualidade de Código
pnpm lint             # Executa ESLint em todo projeto
```

### Estrutura de Desenvolvimento

Criando um novo componente

```typescript
// src/components/MeuComponente.tsx
import { Box } from '@mui/material';
import type { MinhaInterface } from '../types/index.ts';

interface MeuComponenteProps {
   data: MinhaInterface;
}

export default function MeuComponente({ data }: MeuComponenteProps) {
   return <Box>...</Box>;
}
```

Adicionando uma nova página

1. Criar pasta em `src/pages/NomeDaPagina/`
2. Criar arquivo `index.tsx` com o componente
3. Adicionar rota no `src/App.tsx`
4. Adicionar link na `Navbar.tsx` (se necessário)

Criando mock data

```typescript
// src/mock/data.ts
import type { Tournament } from '../types/index.ts';

export const novoTorneio: Tournament = {
   id: 'tour-x',
   name: 'Nome do Torneio',
   // ... demais campos
};
```

Usando Zustand para estado global

```typescript
// src/store/useMeuStore.ts
import { create } from 'zustand';

interface MeuStore {
   valor: string;
   setValor: (novoValor: string) => void;
}

export const useMeuStore = create<MeuStore>((set) => ({
   valor: '',
   setValor: (novoValor) => set({ valor: novoValor }),
}));

// Usar em componente
import { useMeuStore } from '../store/useMeuStore.ts';

function MeuComponente() {
   const { valor, setValor } = useMeuStore();
   // ...
}
```

### Convenções do Projeto

Imports

- Use `.tsx`/`.ts` nas extensões (requisito do tsconfig)
- Prefira `import type` para tipos
- Ordem: React → MUI → Router → Componentes locais → Types → Mock data → Stores

Estilos

- Prefira `sx` do MUI
- Spacing em múltiplos de 8px (`sx={{ mt: 2 }}` = 16px)
- Use cores do tema (`color="primary"`, `bgcolor="background.paper"`)

TypeScript

- Sempre tipar props
- Use tipos de `src/types/index.ts`
- Evite `any`

Responsividade

- Breakpoints do MUI: `xs`, `sm`, `md`, `lg`, `xl`
- Ex.: `sx={{ display: { xs: 'none', md: 'block' } }}`
- Grid CSS: `display: 'grid'`, `gridTemplateColumns`

Troubleshooting

- Import de tipos: ✅ `import type { User } from '../types/index.ts'`
- MUI 7: prefira Box + CSS Grid ao antigo Grid item/container
- Se HMR parar, reinicie com `pnpm dev`

</details>

<details>
<summary><strong>🗺️ Mapa de Rotas</strong></summary>

### Rotas Disponíveis

Home - `/`

- `src/pages/Home/index.tsx`
- Hero, estatísticas, destaques, CTA

Lista de Campeonatos - `/tournaments`

- `src/pages/Tournaments/index.tsx`
- Tabs por status, grid responsivo, empty state

Detalhes do Campeonato - `/tournaments/:id`

- `src/pages/TournamentDetails/index.tsx`
- Banner, regras, participantes, inscrição (quando aplicável)

Meus Times - `/teams`

- `src/pages/Teams/index.tsx`
- Grid de times, estatísticas, criar time (futuro)

Perfil do Usuário - `/profile`

- `src/pages/Profile/index.tsx`
- Avatar, role, estatísticas, logout

### Autenticação Simulada

- Store: `src/store/useAuthStore.ts`
- Estado: `user`, `isAuthenticated`
- Ações: `login`, `logout`, `updateUser`
- Por padrão, `currentUser` de `mock/data.ts` está logado

### Navegação

- Navbar: `/`, `/tournaments`, `/teams`, `/profile`
- Links: cards e botões nas páginas; `useNavigate()` para navegação programática

### Rotas Futuras

- `/teams/create`, `/teams/:id`, `/tournaments/create`, `/tournaments/:id/brackets`, `/tournaments/:id/register`, `/login`, `/signup`

</details>

<details>
<summary><strong>📎 Snippets úteis</strong></summary>

Componente Base com MUI

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

Card Customizado

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

Lista com Avatar

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

Modal/Dialog

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

Formulário com Validação

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

Tabs

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

Chip com Status

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

Loading com Skeleton

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

Layout Responsivo com Box

```typescript
import { Box } from '@mui/material';

export default function LayoutResponsivo() {
   return (
      <Box
         sx={{
            display: 'grid',
            gridTemplateColumns: {
               xs: '1fr',
               sm: 'repeat(2, 1fr)',
               md: 'repeat(3, 1fr)',
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

useNavigate Hook

```typescript
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function MeuBotao() {
   const navigate = useNavigate();
   return (
      <>
         <Button onClick={() => navigate('/tournaments')}>Ir para Campeonatos</Button>
         <Button onClick={() => navigate('/tournaments/123')}>Ver Torneio Específico</Button>
         <Button onClick={() => navigate(-1)}>Voltar</Button>
      </>
   );
}
```

Custom Hook com Zustand (notificações)

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

</details>

<details>
<summary><strong>🎨 Melhorias de Design (resumo)</strong></summary>

Principais pontos do tema (`src/theme.ts`)

- Paleta vibrante e moderna; background `#f8fafc`, texto `#1e293b`
- Tipografia com weights 600–800 e line-height otimizada
- Componentes com microinterações: botões (gradiente + hover), cards (hover + sombra), chips, AppBar com glassmorphism

Componentes aprimorados

- TournamentCard e TeamCard com ícones, badges e visual moderno
- Navbar com rota ativa, ícones e avatar com hover
- Home com hero gradiente, estatísticas via StatCard e CTA final
- Páginas Tournaments/Teams com SectionTitle e grids responsivos

Características de UX/UI

- Glassmorphism, gradientes, micro-interações, bordas 12–16px, ícones MUI, feedback de interação

Como testar rapidamente

```bash
pnpm install
pnpm dev
# Acesse http://localhost:5173
```

</details>

---

Nota: Estes conteúdos foram consolidados a partir de `GUIA_DEV.md`, `ROTAS.md`, `SNIPPETS.md` e `DESIGN_IMPROVEMENTS.md`. Os arquivos individuais foram removidos para simplificar a manutenção.
