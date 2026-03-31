# Parisotto Tech - Website Profissional

Site moderno e responsivo para apresentar serviços de análise de dados, dashboards, BI e Excel avançado.

## 🎨 Design

- **Cores**: Roxo sofisticado (#3B2667) + Ciano elegante (#06B6D4)
- **Tipografia**: Merriweather (display) + Lato (body)
- **Aesthetic**: Profissional, sofisticado e moderno
- **Responsivo**: Totalmente otimizado para mobile, tablet e desktop

## 📋 Seções

- **Home**: Hero section com call-to-action
- **Serviços**: 3 serviços principais (Dashboards, Análise, Excel)
- **Portfólio**: Galeria de projetos realizados
- **Planos**: 3 opções de preço (Starter, Professional, Enterprise)
- **Reviews**: Depoimentos de clientes
- **Sobre**: Informações pessoais e estatísticas
- **Contato**: Formulário de contato e informações

## 🚀 Quick Start

### Desenvolvimento Local

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Acessar em http://localhost:3000
```

### Build para Produção

```bash
# Compilar projeto
pnpm build

# Visualizar build
pnpm preview
```

## 📝 Editar Conteúdo

Todos os conteúdos estão centralizados em um único arquivo:

**`client/src/pages/Home.tsx`**

### Adicionar Projeto ao Portfólio

Localize a seção "Portfólio de Projetos" e adicione um novo objeto ao array:

```tsx
{
  title: "Nome do Projeto",
  description: "Descrição do projeto",
  tags: ["Tag1", "Tag2", "Tag3"],
  image: "https://url-da-imagem.com/imagem.webp",
}
```

### Editar Planos

Procure por "Planos e Preços" e modifique os valores, nomes e features.

### Atualizar Informações de Contato

Procure por "Entre em Contato" e atualize:
- Email
- Telefone
- Localização

## 🎯 Estrutura do Projeto

```
parisotto-tech/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx          # Página principal (todo conteúdo)
│   │   ├── components/           # Componentes reutilizáveis
│   │   ├── App.tsx               # Configuração da app
│   │   └── index.css             # Estilos globais
│   ├── index.html                # HTML base
│   └── public/                   # Arquivos estáticos
├── package.json
├── vite.config.ts                # Configuração Vite
└── GITHUB_PAGES_SETUP.md         # Guia de deploy
```

## 🌐 Deploy no GitHub Pages

Veja o arquivo **`GITHUB_PAGES_SETUP.md`** para instruções completas de:
- Criar repositório no GitHub
- Configurar GitHub Pages
- Fazer deploy automático
- Atualizar conteúdo

## 🛠️ Tecnologias

- **React 19**: Framework UI
- **Tailwind CSS 4**: Styling
- **Vite**: Build tool
- **TypeScript**: Type safety
- **shadcn/ui**: Componentes UI
- **Lucide Icons**: Ícones

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🎨 Customização

### Cores

Edite `client/src/index.css` para mudar as cores:

```css
:root {
  --primary: #3B2667;        /* Roxo */
  --accent: #06B6D4;         /* Ciano */
  --background: #FFFFFF;     /* Branco */
  --foreground: #1F2937;     /* Cinza escuro */
}
```

### Tipografia

As fontes estão importadas em `client/index.html`:
- Merriweather: Títulos e display
- Lato: Corpo de texto

## 📞 Contato

Para dúvidas sobre o projeto, consulte o arquivo `GITHUB_PAGES_SETUP.md`.

---

**Desenvolvido com ❤️ para Parisotto Tech**
