const mongoose = require('mongoose');
// Import the Mongoose library, which is used to connect and interact with MongoDB.

const connectDB = async () => {
    // Define an asynchronous function named `connectDB` that will handle the database connection.

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            // Attempt to connect to MongoDB using the connection string stored in environment variable `MONGO_URI`.
            // The options `useNewUrlParser` and `useUnifiedTopology` are commented out because Mongoose handles them by default.

            // useNewUrlParser: true, // Option to use the new MongoDB connection string parser.
            // useUnifiedTopology: true, // Option to use the new MongoDB unified topology engine.
        });
        console.log('MongoDB connected successfully');
        // If the connection is successful, log a success message to the console.
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        // If the connection fails, catch the error and log an error message to the console with the error details.
        process.exit(1);
        // Exit the Node.js process with a failure code (1) to indicate the connection attempt failed.
    }
};

module.exports = connectDB;
// Export the `connectDB` function so it can be used in other parts of the application.
