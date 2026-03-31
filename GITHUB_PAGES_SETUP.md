# Parisotto Tech - Guia de Deploy no GitHub Pages

Este documento contém as instruções para fazer deploy do site no GitHub Pages (github.io).

## Pré-requisitos

- Conta no GitHub
- Git instalado no seu computador
- Node.js e pnpm instalados

## Passo 1: Criar Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em "New Repository" (novo repositório)
3. **Importante**: Nomeie o repositório como `seu-usuario.github.io`
   - Substitua `seu-usuario` pelo seu nome de usuário do GitHub
   - Exemplo: `joao.github.io`
4. Deixe como "Public"
5. Clique em "Create repository"

## Passo 2: Preparar o Projeto Localmente

1. Abra o terminal na pasta do projeto:
```bash
cd /home/ubuntu/parisotto-tech
```

2. Inicialize o Git (se ainda não estiver inicializado):
```bash
git init
git add .
git commit -m "Initial commit: Parisotto Tech website"
```

3. Adicione o repositório remoto:
```bash
git remote add origin https://github.com/seu-usuario/seu-usuario.github.io.git
```

Substitua `seu-usuario` pelo seu nome de usuário do GitHub.

## Passo 3: Build e Deploy

1. Faça o build do projeto:
```bash
pnpm build
```

2. Copie os arquivos compilados para a raiz do repositório:
```bash
# O build gera os arquivos em dist/public/
# Você pode fazer push apenas desses arquivos ou de todo o projeto
```

3. Faça push para o GitHub:
```bash
git branch -M main
git push -u origin main
```

## Passo 4: Ativar GitHub Pages

1. Acesse seu repositório no GitHub
2. Vá para "Settings" (Configurações)
3. No menu lateral, clique em "Pages"
4. Em "Source", selecione "Deploy from a branch"
5. Selecione a branch "main" e a pasta "/ (root)"
6. Clique em "Save"

O site estará disponível em: `https://seu-usuario.github.io`

## Adicionar Novos Projetos ao Portfólio

Para adicionar novos projetos ao portfólio, edite o arquivo `client/src/pages/Home.tsx`:

### Localizar a Seção de Portfólio

Procure por esta seção no arquivo:

```tsx
<div className="grid md:grid-cols-2 gap-8">
  {[
    {
      title: "Dashboard de Vendas",
      description: "...",
      tags: ["Power BI", "SQL", "Excel"],
      image: "https://...",
    },
    // Adicione novos projetos aqui
  ].map((project, idx) => (
```

### Adicionar um Novo Projeto

Copie e cole este template dentro do array:

```tsx
{
  title: "Nome do Seu Projeto",
  description: "Descrição breve do projeto e seus resultados.",
  tags: ["Tecnologia 1", "Tecnologia 2", "Tecnologia 3"],
  image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663499358601/2GJs8xVgdX3HtSYcNRX6TL/portfolio-bg-8yFxSspNpoVaMeGakg5DKP.webp",
},
```

**Campos:**
- `title`: Nome do projeto
- `description`: Descrição do que foi feito e resultados alcançados
- `tags`: Array com tecnologias/ferramentas usadas (máximo 3-4)
- `image`: URL da imagem (pode usar a mesma imagem para múltiplos projetos ou gerar novas)

### Exemplo Completo

```tsx
{
  title: "Análise de Vendas Q1 2024",
  description: "Dashboard interativo que monitora vendas em tempo real com análise de performance por região.",
  tags: ["Tableau", "SQL", "Excel"],
  image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663499358601/2GJs8xVgdX3HtSYcNRX6TL/portfolio-bg-8yFxSspNpoVaMeGakg5DKP.webp",
},
```

## Editar Outras Seções do Site

### Serviços
Localize a seção "Serviços Especializados" e edite os 3 cards de serviços.

### Planos
A seção de planos está em "Planos e Preços". Você pode editar:
- Nomes dos planos
- Preços
- Descrições
- Features de cada plano

### Reviews
Adicione novos reviews de clientes na seção "O que Clientes Dizem".

### Contato
Atualize as informações de contato:
- Email
- Telefone
- Localização
- Links de redes sociais

## Estrutura do Código

```
client/
├── src/
│   ├── pages/
│   │   └── Home.tsx          ← Arquivo principal com todo conteúdo
│   ├── index.css             ← Estilos globais e cores
│   └── App.tsx               ← Configuração da aplicação
├── index.html                ← HTML base
└── public/                   ← Arquivos estáticos (favicon, etc)
```

## Cores e Design

O site usa as seguintes cores:
- **Roxo Sofisticado**: `#3B2667`
- **Ciano Elegante**: `#06B6D4`
- **Cinza Escuro**: `#1F2937`
- **Branco**: `#FFFFFF`

Tipografia:
- **Display (Títulos)**: Merriweather (serif)
- **Body (Texto)**: Lato (sans-serif)

## Workflow de Atualização

1. Faça alterações no arquivo `client/src/pages/Home.tsx`
2. Teste localmente: `pnpm dev`
3. Faça build: `pnpm build`
4. Commit e push:
```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

O GitHub Pages atualizará automaticamente em alguns minutos.

## Troubleshooting

### Site não aparece após push
- Aguarde 5-10 minutos
- Verifique se o repositório é público
- Confirme que a branch "main" está selecionada nas configurações de Pages

### Estilos não carregam
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique se o `base` no `vite.config.ts` está correto

### Imagens não aparecem
- Certifique-se de que as URLs das imagens estão corretas
- Use URLs completas (https://...)

## Suporte

Para dúvidas sobre GitHub Pages, consulte a [documentação oficial](https://docs.github.com/en/pages).

---

**Desenvolvido com ❤️ para Parisotto Tech**
