# Calendário de Eventos

Este projeto é uma aplicação web para gerenciamento de eventos pessoais. Permite que usuários cadastrem, editem, removam e listem eventos de forma segura e organizada.

## Tecnologias Utilizadas

### **Backend:**
- Java 21
- Spring Boot
- Spring Security (JWT)
- JPA / Hibernate
- MariaDB
- Maven

### **Frontend:**
- Angular
- TypeScript
- Bootstrap
- HTML / CSS

## Funcionalidades

- **Autenticação e Autorizacão:**
  - Registro e login de usuário
  - Token JWT para autenticação segura

- **Gerenciamento de Eventos:**
  - CRUD completo (Criar, Ler, Atualizar, Deletar)
  - Validação para evitar sobreposição de eventos
  - Formulários responsivos para criação e edição de eventos

## Como Executar o Projeto

### **1. Configuração do Backend**

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio/backend
   ```
2. Configure o banco de dados PostgreSQL:
  - Crie um banco de dados chamado `calendario_db`
  - Configure `application.properties` com as credenciais corretas:
    ```properties
    spring.datasource.url=jdbc:postgresql://localhost:3306/calendario_db
    spring.datasource.username=seu_usuario
    spring.datasource.password=sua_senha
    ```
3. Execute a aplicação:
   ```sh
   mvn spring-boot:run
   ```

### **2. Configuração do Frontend**

1. Acesse a pasta do frontend:
   ```sh
   cd ../frontend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor Angular:
   ```sh
   ng serve
   ```
4. Acesse `http://localhost:4200` no navegador.

## API Endpoints Principais

- **Autenticação:**
  - `POST /v1/users/create` - Registro de novo usuário
  - `POST /v1/auth/login` - Autenticação do usuário e geração do token JWT

- **Eventos:**
  - `GET /v1/users/getlist` - Lista eventos do usuário logado
  - `POST /v1/events/create` - Cria um novo evento
  - `PUT /v1/events/update/{id}` - Atualiza um evento existente
  - `DELETE /v1/events/delete/{id}` - Remove um evento

## Melhorias Futuras
- Implementação de notificações para eventos próximos
- Convite para outros usuários participarem de eventos
- Suporte a eventos recorrentes
- Exportação de eventos para Google Calendar

## Licença
Este projeto está sob a licença MIT.

