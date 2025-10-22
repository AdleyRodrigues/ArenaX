# Copilot Instructions - Campeonato MVP

## Project Overview
This is an **MVP platform for tournament management** supporting both e-sports (League of Legends) and physical sports (football, beach tennis). Built with React 19 + TypeScript + Vite, using Material UI for components, React Router for navigation, and Zustand for state management.

**Current State:** Early-stage MVP with boilerplate setup. The planned folder structure exists in documentation but not yet implemented.

## Architecture & Structure

### Planned Directory Layout (from README.md)
```
src/
├─ components/      → Reusable UI components (Cards, Modals, Buttons)
├─ pages/           → Route-based page components
│  ├─ Home/
│  ├─ Tournaments/
│  ├─ Teams/
│  └─ TournamentDetails/
├─ mock/            → Mock data for tournaments and teams (JSON/TS)
├─ store/           → Zustand stores for global state
├─ types/           → Global TypeScript types (Tournament, Team, Player)
└─ App.tsx          → Main router configuration
```

### Technology Stack
- **React 19.1** with TypeScript 5.9 - Use latest React APIs and hooks patterns
- **Vite 7.1** - Fast HMR, ESM-based bundler
- **Material UI 7.3** - Primary component library for UI consistency
- **React Router 7.9** - Client-side routing
- **Zustand 5.0** - Lightweight state management (preferred over Context API)
- **pnpm** - Package manager (use `pnpm` commands, not npm/yarn)

## Development Workflows

### Commands
```bash
pnpm dev         # Start dev server with HMR
pnpm build       # TypeScript check + production build
pnpm lint        # Run ESLint
pnpm preview     # Preview production build locally
```

### Building Features
1. Start dev server first: `pnpm dev`
2. Create mock data in `src/mock/` before building UI
3. Define TypeScript types in `src/types/` early
4. Build reusable components in `src/components/` before page-specific ones
5. Use Zustand stores in `src/store/` for cross-page state

## Code Conventions

### TypeScript Configuration
- **Strict mode enabled** - All type safety checks enforced
- **No unused locals/parameters** - Clean up unused code
- **Bundler module resolution** - Use modern import patterns
- Import with `.tsx` extensions in source (required by `allowImportingTsExtensions`)

### ESLint Setup
- Flat config format (`eslint.config.js`)
- React Hooks rules enforced (`recommended-latest`)
- React Refresh plugin for Vite HMR compatibility
- Prettier integration (`eslint-config-prettier` installed)

### Component Patterns
- Use **functional components** with hooks
- Material UI components via `@mui/material` imports
- Use `@emotion/react` and `@emotion/styled` for custom styling when needed
- React Router DOM v7 - Use new data router APIs if available

### State Management
- **Zustand** for global state (tournaments, teams, user data)
- Local component state for UI-only concerns
- Mock data should be importable from `src/mock/`

## Domain Model (from README.md)

### Core Entities
- **Tournament**: Competition container with rules, dates, and participants
- **Team**: Group of players competing together
- **Player**: Individual participant

### Key Features to Implement
- ✅ Display tournament list (mocked data)
- ✅ Tournament detail page
- ✅ Team creation and player visualization
- ⏳ Registration via shareable links
- ⏳ Automatic bracket/table generation
- 🔮 Future: Node.js + Supabase backend integration

## Integration Points

### External Libraries
- Material UI: Use `ThemeProvider` for consistent theming
- React Router: Implement in `App.tsx` as main routing layer
- UUID: Available for generating unique IDs (`import { v4 as uuidv4 } from 'uuid'`)

### Future Backend
- Plan for **Supabase** integration (PostgreSQL + Auth + Storage)
- Design components to swap mock data for API calls easily
- Keep data fetching logic in Zustand stores for clean separation

## Project-Specific Guidance

1. **Mock Data First**: Before building any feature, create realistic mock data that matches the planned backend schema
2. **Mobile Responsive**: All UI must work on mobile - Material UI's Grid/Stack components are preferred
3. **Portuguese Language**: UI text and comments should be in Brazilian Portuguese
4. **Sports Agnostic**: Design data structures to support both e-sports and physical sports equally
5. **Registration Flow**: Key feature - users join tournaments via shareable links, design with this workflow in mind

## Common Tasks

### Adding a New Page
1. Create folder in `src/pages/PageName/`
2. Add `index.tsx` and optional `styles.ts`
3. Define route in `src/App.tsx`
4. Add navigation link in header/sidebar component

### Adding Mock Data
1. Create interface in `src/types/`
2. Create data file in `src/mock/` with sample objects
3. Export for use in components/stores

### Adding Global State
1. Create store in `src/store/useStoreName.ts`
2. Use Zustand's `create()` function
3. Import and use with hooks in components

---

**Note**: This project is in early MVP stage. Most planned structure is not yet implemented. When creating new features, follow the planned architecture from README.md and establish patterns that future developers can replicate.
