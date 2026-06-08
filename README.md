# 🚀 Controle de Missão Espacial

## 👨‍💻 Integrantes do Grupo

| Nome | RM |
|--------|--------|
| Felipe Pinheiro Sombra | RM559167 |
| Fernando de Freitas Carvalho | RM555194 |
| Nicolas Alves dos Santos | RM558993 |

---

## 📋 Descrição do Projeto

O Controle de Missão Espacial é uma solução integrada desenvolvida para monitoramento e gerenciamento de uma missão espacial.

O projeto é composto por:

- Backend desenvolvido em Java com Spring Boot
- Banco de dados H2 com persistência em arquivo
- Aplicativo Mobile desenvolvido em React Native com TypeScript
- Integração entre frontend e backend por meio de requisições HTTP

A aplicação permite o cadastro, consulta e gerenciamento de informações relacionadas aos sensores, sistemas monitorados e alertas críticos da missão.

---

## 🎯 Objetivos

Desenvolver uma plataforma capaz de:

- Monitorar sensores da missão espacial
- Registrar sistemas monitorados
- Gerenciar alertas críticos
- Exibir informações em um aplicativo mobile
- Demonstrar integração entre API REST e aplicação mobile

---

## 🛠️ Tecnologias Utilizadas

### Backend

- Java 17
- Spring Boot
- Spring Data JPA
- H2 Database
- Maven

### Mobile

- React Native
- TypeScript
- Expo
- Axios
- React Navigation

### Ferramentas

- IntelliJ IDEA
- Visual Studio Code
- Postman
- Git
- GitHub

---

## 📂 Estrutura do Projeto

### Backend

```text
ControleMissaoEspacial
│
├── controller
├── service
├── repository
├── model
├── resources
│   └── application.properties
└── pom.xml
```

### Mobile

```text
ControleMissaoEspacialMobile
│
├── src
│   ├── navigation
│   ├── screens
│   ├── services
│   └── types
│
├── App.tsx
├── package.json
└── tsconfig.json
```

---

## 🔗 Funcionalidades

### Sensores

- Cadastro de sensores
- Consulta de sensores
- Exclusão de sensores

### Alertas

- Consulta de alertas

### Aplicativo Mobile

- Navegação entre telas
- Consumo da API REST
- Cadastro de dados via POST
- Consulta de dados via GET

---

## ▶️ Como Executar o Projeto

### Backend

1. Abrir o projeto no IntelliJ IDEA
2. Executar a classe principal Spring Boot
3. A API ficará disponível em:

```text
http://localhost:8080
```

### Mobile

1. Abrir o projeto no VS Code

2. Instalar as dependências:

```bash
npm install
```

3. Executar o projeto:

```bash
npx expo start
```

ou

```bash
npx expo start --web
```

---

## 🗄️ Banco de Dados

O projeto utiliza banco de dados H2 com persistência em arquivo.

Console H2:

```text
http://localhost:8080/h2-console
```
