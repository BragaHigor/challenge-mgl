# Challenge MGL – Front-end

---

# Para conferir clique no link abaixo:

-  🌐 <a href="https://front-blog-nine.vercel.app/" target="_blank" rel="noopener noreferrer">https://front-blog-nine.vercel.app/</a>

---

Este repositório contém o front-end da aplicação de um Blog, desenvolvido em **Next.js 15**, para consumo da API REST do back-end. A seguir, você encontra:

-  📖 Visão geral do projeto
-  🛠 Tecnologias utilizadas
-  📁 Estrutura do código
-  🚀 Guia de instalação e execução (passo a passo)
-  ✅ Como testar a aplicação
-  ⚙️ CI/CD com GitHub Actions

---

## 📖 Visão Geral

O front-end é responsável por:

1. Exibir lista de artigos
2. Mostrar detalhes de um artigo ao clicar
3. Permitir filtros de busca (por autor, data, tipo)
4. Renderizar estados de carregamento e “não encontrado”
5. Navegação SPA com hot-reload em desenvolvimento

---

## 🛠 Tecnologias

-  **Node.js** v20.18.0
-  **Next.js** 15.3.3
-  **React** 19.x
-  **TypeScript**
-  **Tailwind CSS** 3.4.1
-  **Shadcn**
-  **Radix UI**
-  **Swiper**
-  **React-icons**
-  **Jest** + **React Testing Library**
-  **ESLint** + **eslint-config-next**

## 📁 Estrutura do Projeto

```
/
├─ public/
│  ├─ assets/
│  │  ├─ ads/ …
│  │  ├─ author/
│  │  ├─ categories/
│  │  ├─ favicon/
│  │  ├─ footer/
│  │  ├─ header/
│  │  ├─ hero/
│  │  └─ pattern-bg.png
│  └─ blog.webmanifest
├─ src/
│  ├─ app/           ← rotas e controllers Next.js (páginas)
│  ├─ components/    ← UI e seções reutilizáveis
│  ├─ context/       ← React Context (busca, filtros)
│  ├─ styles/        ← CSS global
│  ├─ types/         ← Tipagens TypeScript
│  ├─ utils/         ← Funções auxiliares e mocks
│  └─ tests/         ← Testes unitários
├─ .env              ← Variáveis de ambiente
├─ Dockerfile        ← Containerização
├─ docker-compose.yml← Orquestração
├─ next.config.ts
├─ package.json
├─ tsconfig.json
└─ postcss.config.js / tailwind.config.js / jest.config.js
```

---

## 🚀 Guia de Instalação e Execução

### 1. Pré-requisitos

-  **Git**

   ```bash
   git --version   # ex: git version 2.x.x
   ```

-  **Node.js** v20.18.0 + **npm**

   ```bash
   node --version  # v20.18.0
   npm --version   # ≥9.x
   ```

-  **Docker Desktop** (inclui Docker Compose)

   ```bash
   docker --version
   docker compose version
   ```

### 2. Clonar o repositório

```bash
git clone https://github.com/BragaHigor/challenge-mgl.git
cd challenge-mgl
```

### 3. Configurar variáveis de ambiente

Na raiz, crie um arquivo `.env` com:

```bash
#LOCAL
NEXT_PUBLIC_API_URL="http://localhost:8080"

#DOCKER
NEXT_PUBLIC_API_URL="http://host.docker.internal:8080"

SITE_URL="http://localhost:3000"
```

### 4. Instalar dependências

```bash
npm install
```

### 5. Iniciar o front-end

#### 5.1. Local

-  **Configurar arquivo `.env`** (reload automático):

```bash
#LOCAL
NEXT_PUBLIC_API_URL="http://localhost:8080"

SITE_URL="http://localhost:3000"
```

-  **Modo desenvolvimento** (reload automático):

```bash
  npm run dev
```

-  **Modo produção**:

```bash
  npm run build
  npm start
```

#### 6.2. Com Docker Compose

-  **Configurar arquivo `.env`** (reload automático):

```bash
#DOCKER
NEXT_PUBLIC_API_URL="http://host.docker.internal:8080"

SITE_URL="http://localhost:3000"
```

-  Subir todos os serviços em background:

```bash
  docker compose up --build -d
```

-  Ver logs em tempo real:

```bash
  docker-compose logs -f frontend
```

---

## ✅ 7 Como testar a aplicação

1. **No navegador**

   -  Acesse `http://localhost:3000`
   -  Confirme que `GET /articles` e `GET /articles/:id` retornam status 200

2. **Testes unitários**

```bash
npm run test:unit
# ou
jest --watch
```

---

## ⚙️ CI/CD com GitHub Actions

Este projeto inclui um workflow em `.github/workflows/ci.yml` que executa:

1. Checkout do código
2. Instalação de dependências (`npm ci`)
3. Execução do linter (`npm run lint`)
4. Build de produção (`npm run build`)
5. Testes unitários (`npm run test:unit`)
