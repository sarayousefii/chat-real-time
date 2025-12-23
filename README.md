# Chat Real-Time

A **real-time chat application** with user authentication, online user list, and instant messaging. Built with **Next.js 15 + TypeScript**, **Prisma + SQLite**, **Socket.IO**, and **TailwindCSS + shadcn/ui**.

---

## Features

- User registration and login with **JWT + bcrypt**
- Real-time messaging with **Socket.IO**
- Display online users and track connection status
- Message bubbles with **Dracula theme** (dark and orange)
- Responsive UI with **TailwindCSS**
- State management with **Redux Toolkit**
- RTL (Right-to-Left) support for messages

---

## Tech Stack

- **Next.js 15 + TypeScript** – Frontend and server-side rendering
- **Prisma + SQLite** – ORM and database
- **Socket.IO** – Real-time communication
- **TailwindCSS + shadcn/ui** – UI styling
- **Redux Toolkit** – State management
- **bcrypt** – Password hashing
- **JWT** – Authentication

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sarayousefi66/chat-real-time.git

```
2. Navigate to the project folder:

```bash
cd chat-real-time
```

3. Set environment variables in .env:

```bash
DATABASE_URL="file:./dev.db"
JWT_SECRET="your_secret_key"
```

4. Run database migrations:

```bash
npx prisma migrate dev --name init

```

5. Start the Socket.IO server (in a separate terminal):

```bash
node server.js
```
6. Install dependencies:

```bash
npm install
```

7. Start the development server:

```bash
npm run dev
```

8. Open your browser:

```bash
http://localhost:3000


```
API Endpoints

POST /api/auth/register – Register a new user

POST /api/auth/login – Login and get JWT token

GET /api/me – Get current user info

GET /api/messages – Fetch all messages

GET /api/onlineUsers – Fetch online users

POST /api/socket – Socket.IO communication endpoint
```
Project Structure
/app          # Next.js pages
/components   # UI and chat components
/hooks        # Custom hooks (useSocket, useAutoScroll)
/lib          # Utilities (Prisma, JWT)
/prisma       # Database schema and SQLite file
/store        # Redux Toolkit slices and store
/styles       # TailwindCSS styles
/server.js    # Socket.IO server

```
Security

Passwords are hashed with bcrypt

Authentication handled with JWT

Socket.IO allows only authenticated users
```


Contribution

Create a new branch before making changes

Write descriptive commits

Test socket and API functionality before merging
```


License

This project is for educational purposes and demonstration only.