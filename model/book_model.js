const mongoose = require('mongoose');
// Import the Mongoose library, which is used to create schemas and models for MongoDB.

const bookSchema = new mongoose.Schema({
    // Define a new Mongoose schema for the `Book` model. A schema outlines the structure of the documents within a collection.

    title: {
        type: String,
        // The `title` field is of type `String`.
        required: true,
        // The `required: true` option makes this field mandatory, meaning it must be provided when creating a book document.
    },
    author: {
        type: String,
        // The `author` field is also of type `String`.
        required: true,
        // This field is also mandatory.
    },
    publishedDate: {
        type: Date,
        // The `publishedDate` field is of type `Date`. It represents the date when the book was published.
    },
    pages: {
        type: Number,
        // The `pages` field is of type `Number`. It represents the number of pages in the book.
    },
    genre: {
        type: String,
        // The `genre` field is of type `String`. It represents the genre or category of the book.
    },
});

const Book = mongoose.model('Book', bookSchema);
// Create a Mongoose model named `Book` using the defined `bookSchema`. This model represents the `books` collection in MongoDB.

module.exports = Book;
// Export the `Book` model so it can be used in other parts of the application.
