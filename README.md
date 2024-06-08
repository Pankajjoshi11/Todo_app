# Todo App

This is a full-stack Todo application built with React, Redux Toolkit, Redux Thunk, Express, and MongoDB. The application allows users to create, update, delete, and mark todos as completed. The backend is built with Express and MongoDB, while the frontend is built with React and styled with Tailwind CSS.

The website is hosted at [https://todo-app-3s2f.vercel.app/](https://todo-app-3s2f.vercel.app/)

## Features

- Create, update, and delete todos
- Mark todos as completed
- Responsive design using Tailwind CSS

## Tech Stack

- **Frontend:** React, Redux Toolkit, Redux Thunk, Tailwind CSS
- **Backend:** Express, MongoDB
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/Pankajjoshi11/Todo_app.git
    cd Todo_app
    ```

2. **Set up the backend:**
    ```sh
    cd todo-backend
    npm install
    ```

    Create a `.env` file in the `todo-backend` directory and add your MongoDB connection string:
    ```env
    MONGO_URI=your_mongo_db_connection_string
    PORT=5000
    ```

    Start the backend server:
    ```sh
    npm start
    ```

3. **Set up the frontend:**
    ```sh
    cd ../todo-frontend
    npm install
    ```

    Start the frontend development server:
    ```sh
    npm start
    ```

### Deployment

To deploy the application to Vercel:

1. **Deploy the backend:**
    - Create a `vercel.json` file in the `todo-backend` directory:
      ```json
      {
        "functions": {
          "api/server.js": {
            "runtime": "nodejs18.x"
          }
        },
        "routes": [
          {
            "src": "/api/(.*)",
            "dest": "api/server.js"
          }
        ]
      }
      ```

    - Deploy using Vercel CLI:
      ```sh
      vercel
      ```

2. **Deploy the frontend:**
    - Run the build command:
      ```sh
      npm run build
      ```
    - Deploy using Vercel CLI:
      ```sh
      vercel
      ```

### Project Structure

