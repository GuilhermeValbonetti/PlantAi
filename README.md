# 🌱 PlantAI

> Sistema inteligente para diagnóstico de doenças em plantas utilizando Inteligência Artificial.

<p align="center">
  <img src="docs/images/banner.png" alt="Banner PlantAI" width="50%">
</p>

<p align="center">

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
 ![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)

</p>

---

## 📖 Sobre o projeto

O **PlantAI** é uma aplicação mobile desenvolvida durante o **Hackathon da PUC Minas** com o objetivo de auxiliar agricultores, produtores rurais e cultivadores na identificação precoce de doenças em plantas utilizando Inteligência Artificial.

Por meio da captura de uma imagem, o sistema realiza uma análise da planta, identifica possíveis doenças, apresenta o nível de confiança da IA e fornece recomendações para auxiliar no tratamento e prevenção.

---

## 🎯 Objetivos

- Facilitar o diagnóstico de doenças em plantas;
- Auxiliar produtores na tomada de decisão;
- Reduzir perdas agrícolas;
- Incentivar práticas sustentáveis;
- Contribuir para os Objetivos de Desenvolvimento Sustentável (ODS).

---

## 📱 MVP

Nesta primeira versão do projeto, serão implementadas as seguintes funcionalidades:

- Login de usuários;
- Captura ou upload de imagem da planta;
- Diagnóstico utilizando Inteligência Artificial;
- Exibição da confiança da análise;
- Recomendações de tratamento;
- Histórico das análises;
- Perfil do usuário.

---

## 🖼️ Protótipo

<p align="center">
<img src="docs/images/prototipo.png" width="600">
</p>

---

## 🗃️ Modelagem do Banco de Dados

<p align="center">
<img src="docs/images/mer.png" width="900">
</p>

---

## 🚀 Tecnologias Utilizadas

### Mobile

- React Native
- Expo
- TypeScript

### Backend

- Node.js
- Express

### Banco de Dados

- PostgreSQL

### Inteligência Artificial

- API de IA para análise de imagens *(em definição)*

---

## 📂 Estrutura do Projeto

```text
PlantAI
│
├── backend/
│
├── database/
│   └── teste excluir
│
├── docs/
│   ├── images/
│   ├── prototipo/
│   ├── mer/
│   └── apresentacao/
│
├── mobile/
│   ├── .claude/
│   ├── assets/
│   ├── node_modules/
│   ├── src/
│   │   ├── components/
│   │   │   ├── button/
│   │   │   │   └── button.tsx
│   │   │   └── card/
│   │   │       └── card.tsx
│   │   │
│   │   └── screens/
│   │       ├── Home/
│   │       │   └── home.tsx
│   │       ├── Login/
│   │       │   └── login.tsx
│   │       └── Perfil/
│   │           └── perfil.tsx
│   │
│   ├── .gitignore
│   ├── AGENTS.md
│   ├── app.json
│   ├── App.tsx
│   ├── CLAUDE.md
│   ├── index.ts
│   ├── LICENSE
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## ⚙️ Como executar

### Clone o repositório

```bash
git clone https://github.com/GuilhermeValbonetti/PlantAi.git
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npx expo start
```

---

## 📋 Requisitos Funcionais

- RF01 – Realizar login;
- RF02 – Escanear uma planta através de imagem;
- RF03 – Processar a imagem utilizando IA;
- RF04 – Exibir diagnóstico;
- RF05 – Exibir recomendações;
- RF06 – Salvar análises no histórico;
- RF07 – Consultar análises anteriores.

---

## 🔒 Requisitos Não Funcionais

- Interface intuitiva;
- Aplicação responsiva;
- Persistência dos dados;
- Autenticação de usuários;
- Arquitetura escalável;
- Integração com Inteligência Artificial.

---

## 🌎 Objetivos de Desenvolvimento Sustentável

Este projeto contribui para os seguintes Objetivos de Desenvolvimento Sustentável da ONU:

- 🌱 ODS 12 – Consumo e Produção Responsáveis;
- 🌳 ODS 15 – Vida Terrestre.

---

## 👨‍💻 Equipe

| Integrante | Função |
|------------|--------|
| Guilherme Valbonetti | Desenvolvedor |
| Yallison Faria | Desenvolvedor |
| Jonathan Rubens | Desenvolvedor |
| Marcus Vinicius | Desenvolvedor |
| Ramon José | Desenvolvedor |
| Matheus Oliveira | Desenvolvedor |

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos durante o Hackathon da PUC Minas.
