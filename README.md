# Recipe App

The MERN Recipe App is a web application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to view, add, edit, and delete recipes. The application is designed to provide a user-friendly experience for managing recipes and discovering new culinary delights.

## Features

- **User Authentication**: Users can sign up and log in securely to access the app's features.
- **Recipe Management**: Users can view, add, edit, and delete their recipes.
- **Save**: Users can mark recipes as favorites for quick access.
- **Responsive Design**: The app is responsive and works well on various devices, including desktops, tablets, and smartphones.

## How to Use the Project

To use the MERN Recipe App locally, follow these steps:

### Prerequisites

Before you begin, ensure you have the following installed on your system:

1. Node.js: Make sure you have Node.js installed. You can download it from [here](https://nodejs.org/).

2. MongoDB: Install MongoDB Community Edition from [here](https://www.mongodb.com/try/download/community).

### Installation

1. Clone the repository:

```
git clone https://github.com/it21085444/RecipeApp.git
cd RecipeApp
```

2. Install the backend dependencies:

```
cd backend
npm install
```

3. Create a `.env` file in the `backend` directory and add the following configuration:

```
MONGODB_URI=your_mongodb_connection_string
SECRET_KEY=your_secret_key
```

Replace `your_mongodb_connection_string` with your MongoDB connection string, and `your_secret_key` with a random string used for token generation.

4. Start the backend server:

```
npm start
```

5. Install the frontend dependencies:

```
cd ../frontend
npm install
```

6. Start the frontend development server:

```
npm start
```

### Running the App

Once the installation and setup are complete, you can access the MERN Recipe App in your web browser by navigating to:

```
http://localhost:3000
```

The app's landing page will display, and you can sign up or log in to start managing and discovering recipes.

### Additional Notes

- For production deployment, make sure to set up proper environment variables and security measures.

- The application uses JWT (JSON Web Tokens) for authentication, so ensure the `SECRET_KEY` in the `.env` file is strong and secure.

- If you encounter any issues or have suggestions, feel free to submit an issue on the GitHub repository.

## Contributors

- [Sasindu Fernando](https://github.com/it21085444) - Project Developer

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the [LICENSE](https://github.com/machadop1407/MERN-Recipe-App/blob/main/LICENSE) file for details.

---

I hope you enjoy using the MERN stack Recipe App! If you have any questions or need further assistance, please don't hesitate to contact me. Happy cooking! 🍳🥗🍰
