# Full-Stack JavaScript CRUD Application

This is a comprehensive full-stack web application that demonstrates Create, Read, Update, and Delete (CRUD) functionalities. The project is built with a React frontend and a Node.js/Express backend, interacting with a PostgreSQL database.

## Features

- **Create:** Add new users to the database.
- **Read:** View a list of all users and see detailed information for a single user.
- **Update:** Edit the information of existing users.
- **Delete:** Remove users from the database.
- **Responsive Design:** The user interface is designed to be functional on both desktop and mobile devices.

## Tech Stack

### Backend

- **[Node.js](https://nodejs.org/)**: JavaScript runtime environment.
- **[Express.js](https://expressjs.com/)**: Web framework for Node.js
- **[Sequelize](https://sequelize.org/)**: A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.
- **[PostgreSQL](https://www.postgresql.org/)**: Open-source object-relational database system.
- **[CORS](https://www.npmjs.com/package/cors)**: Middleware for enabling Cross-Origin Resource Sharing.
- **[Dotenv](https://www.npmjs.com/package/dotenv)**: Module to load environment variables from a `.env` file.

### Frontend

- **[React](https://react.dev/)**: A JavaScript library for building user interfaces.
- **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling.
- **[React Router](https://reactrouter.com/)**: Declarative routing for React.js.
- **[Axios](https://axios-http.com/)**: Promise-based HTTP client for the browser and Node.js.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v14 or newer recommended)
- [npm](https://www.npmjs.com/get-npm) (or [Yarn](https://yarnpkg.com/))
- [PostgreSQL](https://www.postgresql.org/download/)

---

## Installation and Setup

### 1. Backend Setup

1.  **Navigate to the backend directory:**

    ```bash
    cd BE
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up the database:**

    - Create a new PostgreSQL database.
    - Create a `.env` file in the `BE` directory.
    - Add your database credentials to the `.env` file:
      ```env
      DB_NAME=your_database_name
      DB_USER=your_database_user
      DB_PASSWORD=your_database_password
      DB_HOST=localhost
      DB_PORT=5432
      PORT=3000
      ```

4.  **Run the development server:**
    The server will start on `http://localhost:3000`.
    ```bash
    npm run dev
    ```

---

### 2. Frontend Setup

1.  **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**
    The application will be available at `http://localhost:5173` (or another port if 5173 is busy).
    ```bash
    npm run dev
    ```

---

## API Endpoints

The backend provides the following API endpoints under the `/users` base path:

| HTTP Method | Endpoint | Description                             |
| :---------- | :------- | :-------------------------------------- |
| `POST`      | `/`      | Creates a new user.                     |
| `GET`       | `/`      | Retrieves a list of all users.          |
| `GET`       | `/:id`   | Retrieves a single user by their ID.    |
| `PUT`       | `/:id`   | Updates an existing user's information. |
| `DELETE`    | `/:id`   | Deletes a user by their ID.             |

---

## Project Structure

The project is organized into two main directories: `BE` (backend) and `frontend`.

### Backend (`BE/`)

```
BE/
├── config/
│ └── Db.js                  # Sequelize database connection configuration
├── controller/
│ └── userController.js      # Handles the logic for user-related requests
├── middleware/
│ ├── errorHandler.js        # Custom error handling middleware
│ ├── logger.js              # Middleware for logging requests
│ └── notFound.js            # Middleware for handling 404 Not Found errors
├── model/
│ └── User.js                # Sequelize model for the User
├── routes/
│ └── routes.js              # Defines the API routes
├── .env                     # Environment variables (needs to be created)
├── app.js                   # Main application file
└── package.json             # Project dependencies and scripts
```

### Frontend (`frontend/`)

```
frontend/
├── pages/
│ ├── CreateUser.jsx         # Component for the add user form
│ ├── EditUser.jsx           # Component for the edit user form
│ ├── Home.jsx               # Main page displaying the list of users
│ └── UserDetails.jsx        # Component to display single user details
├── services/
│ └── api.js                 # Axios instance for API communication
├── src/
│ ├── App.css                # Main application styling
│ ├── App.jsx                # Main application component with routing
│ ├── index.css              # Global styling
│ └── main.jsx               # Application entry point
├── index.html               # Main HTML file
├── package.json             # Project dependencies and scripts
└── vite.config.js           # Vite configuration file
```

---

GoodLuck and Have Fun!
