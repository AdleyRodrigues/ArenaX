# 🚀 Guia Rápido de Desenvolvimento

## Comandos Essenciais

```bash
# Desenvolvimento
pnpm dev              # Inicia servidor dev em http://localhost:5173

# Build & Preview
pnpm build            # Compila TypeScript + Build de produção
pnpm preview          # Preview da build local

# Qualidade de Código
pnpm lint             # Executa ESLint em todo projeto
```

## Estrutura de Desenvolvimento

### Criando um novo componente
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

### Adicionando uma nova página
1. Criar pasta em `src/pages/NomeDaPagina/`
2. Criar arquivo `index.tsx` com o componente
3. Adicionar rota no `src/App.tsx`
4. Adicionar link na `Navbar.tsx` (se necessário)

### Criando mock data
```typescript
// src/mock/data.ts
import type { Tournament } from '../types/index.ts';

export const novoTorneio: Tournament = {
  id: 'tour-x',
  name: 'Nome do Torneio',
  // ... demais campos
};
```

### Usando Zustand para estado global
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

## Convenções do Projeto

### Imports
- Sempre use `.tsx` ou `.ts` na extensão (obrigatório pelo tsconfig)
- Use `import type` para importar apenas tipos
- Ordem: React → MUI → Router → Componentes locais → Types → Mock data → Stores

### Estilos
- Use `sx` prop do MUI para estilização inline
- Spacing: múltiplos de 8px (use `sx={{ mt: 2 }}` = 16px)
- Cores: use do tema (`color="primary"`, `bgcolor="background.paper"`)

### TypeScript
- Sempre defina interfaces para props
- Use tipos do arquivo `src/types/index.ts`
- Evite `any` - use tipos específicos

### Responsividade
- Use breakpoints do MUI: `xs`, `sm`, `md`, `lg`, `xl`
- Exemplo: `sx={{ display: { xs: 'none', md: 'block' } }}`
- Grid CSS para layouts: `display: 'grid'`, `gridTemplateColumns`

## Troubleshooting

### Erro de importação de tipos
❌ `import { User } from '../types'`  
✅ `import type { User } from '../types/index.ts'`

### Erro no Grid do MUI
Material UI 7 não usa `Grid` com props `item` e `container`.  
Use Box com CSS Grid ou Flexbox ao invés.

### Hot reload não funciona
```bash
# Pare o servidor (Ctrl+C) e reinicie
pnpm dev
```

## Recursos Úteis

- [React 19 Docs](https://react.dev)
- [Material UI v7](https://mui.com)
- [React Router v7](https://reactrouter.com)
- [Zustand Docs](https://docs.pmnd.rs/zustand)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

**Dica:** Consulte `.github/copilot-instructions.md` para orientações completas sobre o projeto!
