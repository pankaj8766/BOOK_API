const express = require('express');
// Import the Express.js framework, which is used to build web applications and APIs.

const router = express.Router();
// Create an instance of an Express router, which is used to define route handlers.

const bookService = require('../services/book_services');
// Import the book service functions from the `book_services.js` file in the `services` directory.
// These functions handle the business logic for creating, retrieving, updating, and deleting books.

// Create a Book
router.post('/', async (req, res) => {
    // Define a POST route at the root path '/' for creating a new book.
    try {
        const book = await bookService.createBook(req.body);
        // Call the `createBook` function from the book service with the request body data.
        res.status(201).json(book);
        // If successful, respond with status 201 (Created) and return the newly created book.
    } catch (error) {
        res.status(500).json({ message: error.message });
        // If there's an error, respond with status 500 (Internal Server Error) and return the error message.
    }
});

// Get All Books
router.get('/getAll', async (req, res) => {
    // Define a GET route at '/getAll' for retrieving all books.
    try {
        const books = await bookService.getAllBooks();
        // Call the `getAllBooks` function from the book service to fetch all books.
        console.log("hello..................");
        // Log a message to the console for debugging purposes.
        if(!books){
            return res.status(404).json({ message: 'No books found' });
            // If no books are found, respond with status 404 (Not Found) and return a message.
        }
        res.status(200).json(books);
        // If successful, respond with status 200 (OK) and return the list of books.
    } catch (error) {
        res.status(500).json({ message: error.message });
        // If there's an error, respond with status 500 (Internal Server Error) and return the error message.
    }
});

// Get a Single Book
router.get('/:id', async (req, res) => {
    // Define a GET route at '/:id' for retrieving a single book by its ID.
    try {
        const book = await bookService.getBookById(req.params.id);
        // Call the `getBookById` function from the book service with the book ID from the request parameters.
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
            // If the book is not found, respond with status 404 (Not Found) and return a message.
        }
        res.status(200).json(book);
        // If successful, respond with status 200 (OK) and return the book data.
    } catch (error) {
        res.status(500).json({ message: error.message });
        // If there's an error, respond with status 500 (Internal Server Error) and return the error message.
    }
});

// Update a Book
router.put('/:id', async (req, res) => {
    // Define a PUT route at '/:id' for updating an existing book by its ID.
    try {
        const updatedBook = await bookService.updateBook(req.params.id, req.body);
        // Call the `updateBook` function from the book service with the book ID and updated data from the request.
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
            // If the book is not found, respond with status 404 (Not Found) and return a message.
        }
        res.status(200).json(updatedBook);
        // If successful, respond with status 200 (OK) and return the updated book data.
    } catch (error) {
        res.status(500).json({ message: error.message });
        // If there's an error, respond with status 500 (Internal Server Error) and return the error message.
    }
});

// Delete a Book
router.delete('/:id', async (req, res) => {
    // Define a DELETE route at '/:id' for deleting a book by its ID.
    try {
        const deletedBook = await bookService.deleteBook(req.params.id);
        // Call the `deleteBook` function from the book service with the book ID from the request parameters.
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
            // If the book is not found, respond with status 404 (Not Found) and return a message.
        }
        res.status(200).json({ message: 'Book deleted successfully' });
        // If successful, respond with status 200 (OK) and return a success message.
    } catch (error) {
        res.status(500).json({ message: error.message });
        // If there's an error, respond with status 500 (Internal Server Error) and return the error message.
    }
});

module.exports = router;
// Export the router so it can be used in other parts of the application.
