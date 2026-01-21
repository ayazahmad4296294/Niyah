# Niyah Project

This project consists of a React frontend and a Node.js/Express backend.

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB connection string (already configured in `server/.env`)

### Installation

1.  **Backend Setup:**
    ```bash
    cd server
    npm install
    ```

2.  **Frontend Setup:**
    ```bash
    npm install
    ```

### Running the Application

1.  **Start the Backend Server:**
    Open a terminal and run:
    ```bash
    cd server
    npm run dev
    ```
    The server will run on `http://localhost:5000`.

2.  **Start the Frontend:**
    Open a new terminal and run:
    ```bash
    npm run dev
    ```
    The frontend will run on `http://localhost:5173`.

## Features
- **Frontend:** React + Vite + TailwindCSS
- **Backend:** Node.js + Express + Mongoose

## API Endpoints
- `GET /api/test`: Check backend connection
