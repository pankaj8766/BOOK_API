const express = require('express');
// Import the Express.js framework, which is used to build web applications and APIs.

const connectDB = require('./config/db');
// Import the `connectDB` function from the `db.js` file in the `config` directory to establish a MongoDB connection.

const bookRoutes = require('./routes/book_routes');
// Import the book routes from the `book_routes.js` file in the `routes` directory to handle book-related API endpoints.

const app = express();
// Create an instance of an Express application, which will be used to configure middleware and define routes.

require('dotenv').config();
// Load environment variables from a `.env` file into `process.env`, making them accessible throughout the application.

connectDB();
// Call the `connectDB` function to establish a connection to the MongoDB database.

app.use(express.json());
// Use the Express middleware to parse incoming JSON payloads, making the request body accessible via `req.body`.

app.use('/api/books', bookRoutes);
// Mount the book routes on the `/api/books` path. All requests to `/api/books` will be handled by the `bookRoutes` module.

const PORT = process.env.PORT || 5001;
// Define the port on which the server will listen. It will use the port from environment variables or default to 5001.

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// Start the Express server and listen on the defined port. Log a message to the console once the server is running.


// ---------------- PATH -----------------------------------//
// POST
// Create a Book (POST request)
// URL: http://localhost:5001/api/books/

// GET ALL
// Get All Books (GET request)
// URL: http://localhost:5001/api/books/getAll

// GET BY ID
// Get Book by ID (GET request)
// URL: http://localhost:5001/api/books/{id}

// PUT BY ID
// Update Book by ID (PUT request)
// URL: http://localhost:5001/api/books/{id}

// DELETE BY ID
// Delete Book by ID (DELETE request)
// URL: http://localhost:5001/api/books/{id}
