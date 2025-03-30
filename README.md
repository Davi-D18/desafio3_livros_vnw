# 📚 **Livros Vai na Web**

## 🖥️ **Descrição Geral**
O projeto **Livros Vai na Web** é um site desenvolvido com o objetivo de reforçar os conhecimentos adquiridos no módulo 2 do curso de FullStack no Vai na Web. Utilizando **React**, **SCSS** e **React Router Dom**, a interface segue um design fornecido no Figma, simulando um site para doação de livros.

---

## 🎯 **Objetivo**
Embora o foco seja a recriação da interface, o projeto simula um site funcional para:
- Incentivar a **doação de livros**;
- Permitir que usuários visualizem os livros já doados.

---

## ⚙️ **Funcionalidades**
### 1. Página Inicial
- Exibe informações sobre a importância de doar livros.

### 2. Página de Doação
- Contém um **formulário visual** para preenchimento de informações sobre o livro a ser doado.
  - **Nota**: O formulário não é funcional (apenas design).

### 3. Página de Livros Doados
- Lista os livros doados utilizando dados renderizados de forma dinâmica a partir de um arquivo estático.

### 4. Página 404
- Essa página é mostrada quando o usúario tenta acessar um link ou rota inexistente
---

## 💻 **Tecnologias Usadas**

### 📚 Bibliotecas

- **React**: Uma biblioteca JavaScript para a construção de interfaces de usuário.
- **SCSS**: Um pré-processador CSS que permite o uso de variáveis, mixins e funções.
- **PropTypes**: Utilizada para a validação das propriedades dos componentes React.
- **react-router-Dom**: Fornece funcionalidades para a criação de rotas dinâmicas em aplicações React.
- **react-notifications-component**: Para gerenciar notificações na aplicação.
- **react-loader-spinner**: Oferece uma variedade de spinners personalizáveis para React.

### 🛠️ Ferramentas

- **fortawesome/fontawesome-free**: Integra ícones do Font Awesome em projetos React.

---

## 🗂️ **Estrutura do Projeto**

```plaintext
src/
├── assets/
│   ├── icons/            # Ícones usados nos cards e seções do site.
│   ├── images/           # Imagens estáticas
│
├── components/
│   ├── CardLivro/        # Componente responsável por exibir os livros doados.
│   ├── CardMotivosDoar/  # Componente que exibe os motivos para doar (cards da página inicial).
│   ├── Footer/           # Componente rodapé reutilizado em todas as páginas.
│   ├── Header/           # Componente cabeçalho reutilizado em todas as páginas.
│
├── data/
│   ├── livros.js         # Array estático com as informações dos livros doados.
│
├── context/
│   ├── FormProvider.jsx    # Contexto para gerenciar os dados do formulário.
│
├── hooks/
│   ├── useFormContext.jsx  # Hook personalizado para acessar o contexto do formulário.
│
│
├── pages/
│   ├── FormDoacao/
│   │   ├── FormDoacao.jsx # Página de doação com formulário
│   │   ├── styles/        # Estilos específicos da página de formulário.
│   │
│   ├── Home/
│   │   ├── Home.jsx       # Página inicial do site
│   │   ├── styles/        # Estilos específicos da página inicial.
│   │
│   ├── LivrosDoados/
│   │   ├── LivrosDoados.jsx # Página que lista os livros já doados.
│   │   ├── styles/          # Estilos específicos da página de livros doados.
│   │
│   ├── Error
│   │   ├── Error404.jsx    # Página de erro que é mostrada quando uma rota não está funcionando
│   │   ├── styles/         # Estilos específicos da página de erro.
│   │
│   ├── Resumo/
│   │   ├── Resumo.jsx     # Página que exibe o resumo da doação com detalhes do livro.
│   │   ├── styles/        # Estilos específicos da página de resumo.
│
├── styles/
│   ├── global.scss       # Estilos globais aplicados em toda a aplicação com variáveis scss para ser reutilizado no site.
│
├── App.jsx               # Arquivo onde é exibido o conteúdo
├── main.jsx              # Configuração principal das rotas do site e renderização dos componentes e páginas.

```

## 🔗 **Links Importantes**

### Layout

- [Figma - Protótipo do Design](https://www.figma.com/design/MDGn9uI2Ny5Y8sOJWnmfRp/Proposta-Empower?node-id=0-1&node-type=canvas&t=5ZOGhZLQsGD8Muj1-0)

### Deploy

- [Deploy - Site ao vivo](https://livros-vnw-chi.vercel.app/)

