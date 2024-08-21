const Book = require('../model/book_model');
// Import the Book model from the `book_model.js` file in the `model` directory. 
// This model is used to interact with the `books` collection in MongoDB.

// Create a Book
const createBook = async (bookData) => {
    // Define an asynchronous function `createBook` that takes in book data as a parameter.
    const book = new Book(bookData);
    // Create a new instance of the Book model with the provided data.
    await book.save();
    // Save the new book document to the database.
    return book;
    // Return the saved book document.
};

// Get All Books
const getAllBooks = async () => {
    // Define an asynchronous function `getAllBooks` to retrieve all books from the database.
    return await Book.find({});
    // Use the `find` method with an empty object `{}` to get all book documents from the collection.
};

// Get a Single Book
const getBookById = async (bookId) => {
    // Define an asynchronous function `getBookById` that takes a book's ID as a parameter.
    return await Book.findById(bookId);
    // Use the `findById` method to find a book by its unique ID and return the book document.
};

// Update a Book
const updateBook = async (bookId, bookData) => {
    // Define an asynchronous function `updateBook` that takes a book's ID and updated data as parameters.
    return await Book.findByIdAndUpdate(bookId, bookData, { new: true });
    // Use the `findByIdAndUpdate` method to find a book by its ID and update it with the new data.
    // The `{ new: true }` option ensures that the updated document is returned.
};

// Delete a Book
const deleteBook = async (bookId) => {
    // Define an asynchronous function `deleteBook` that takes a book's ID as a parameter.
    return await Book.findByIdAndDelete(bookId);
    // Use the `findByIdAndDelete` method to find a book by its ID and delete it from the database.
};

module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
};
// Export the functions so they can be used in other parts of the application, such as in route handlers.
