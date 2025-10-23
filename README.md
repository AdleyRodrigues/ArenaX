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