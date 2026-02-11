# Portfolio - Jonatas Eduardo

Portfolio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS.

## Sobre

Portfólio de Jonatas Eduardo — desenvolvedor fullstack com foco em aplicações web modernas, escaláveis e com ótima experiência de usuário.

## Tecnologias

### Front-End
- **JavaScript** - Linguagem de programação
- **TypeScript** - Superset tipado do JavaScript
- **React** - Biblioteca para interfaces
- **Next.js** - Framework React fullstack
- **Tailwind CSS** - Framework CSS utilitário

### Back-End
- **Node.js** - Ambiente de execução JavaScript
- **PostgreSQL** - Banco de dados relacional
- **MySQL** - Sistema de gerenciamento de banco de dados
- **MongoDB** - Banco de dados NoSQL
- **Prisma** - ORM para Node.js

### Ferramentas & DevOps
- **Zod** - Validação de schemas TypeScript
- **Git** - Controle de versão
- **GitHub** - Plataforma de hospedagem de código
- **GitHub Actions** - CI/CD
- **Vercel** - Plataforma de deploy
- **Docker** - Containerização
- **Figma** - Design de interfaces

### Animações
- **GSAP** - Biblioteca de animações JavaScript
- **Lenis** - Smooth scrolling

## Estrutura do Projeto

```
src/
├── app/                    # Rotas e páginas Next.js
│   ├── api/               # API routes
│   │   └── projects/      # Endpoint de projetos
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   ├── loading.tsx        # Componente de loading
│   ├── not-found.tsx      # Página 404
│   └── page.tsx           # Página inicial
├── components/
│   ├── project/           # Componentes de projeto
│   ├── sections/          # Seções da página
│   ├── skeleton/          # Componentes de loading
│   └── ui/                # Componentes de UI
├── data/                  # Dados estáticos
│   └── ts/
│       ├── about.ts       # Informações sobre
│       ├── skill.ts       # Habilidades técnicas
│       └── termOfUse.ts   # Termos de uso
├── lib/                   # Utilitários
│   ├── fetchProject.ts    # Fetch de projetos
│   ├── schemas/           # Schemas de validação
│   └── scrollToSection.ts # Utilitário de scroll
└── types/                 # Tipos TypeScript
```

## Seções do Portfólio

1. **Header** - Navegação principal
2. **Hero** - Apresentação inicial
3. **Sobre** - Informações sobre o desenvolvedor
4. **Projetos** - Showcase de projetos (via API)
5. **Contato** - Informações de contato
6. **Footer** - Rodapé

## Scripts

```bash
# Desenvolvimento com Turbopack
pnpm run dev

# Build de produção
pnpm run build

# Iniciar servidor de produção
pnpm run start

# Linting
pnpm run lint
```

## Instalação

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## Deploy

O projeto está configurado para deploy automático na Vercel via GitHub Actions.

## Autor

**Jonatas Eduardo** - Desenvolvedor Fullstack

---

© 2026 Jonatas Eduardo. Todos os direitos reservados.
