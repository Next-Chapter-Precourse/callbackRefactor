// Problem 1: File Reader with Callbacks

const fs = require('fs');

/**
 * Reads a file and logs the content to the console.
 * @param {string} filePath - Path to the file to be read.
 */
function readFileCallback(filePath) {
  // The fs.readFile function reads a file and executes a callback with an error and data.
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // If an error occurs, it will be logged to the console.
      console.error('Error reading file:', err);
      return;
    }
    // If no error occurs, log the file's content to the console.
    console.log(data);
  });
}

// Problem 2: Process User Data with Callbacks

/**
 * Simulates fetching user data from a database.
 * @param {number} id - The ID of the user to fetch.
 * @param {function} callback - Callback function for handling the fetched data or error.
 */
function fetchUserData(id, callback) {
  setTimeout(() => {
    // Simulated database lookup.
    const fakeDatabase = {
      1: { name: 'Jane Doe', age: 30 },
      2: { name: 'John Doe', age: 28 },
    };
    // Check if user exists in the fake database.
    if (fakeDatabase[id]) {
      // No error, return the user data.
      callback(null, fakeDatabase[id]);
    } else {
      // Error, user not found.
      callback(new Error('User not found'));
    }
  }, 1000); // Simulate a delay for asynchronous behavior.
}

/**
 * Fetches and logs user data based on the user ID.
 * @param {number} userId - The ID of the user to fetch.
 */
function getUserData(userId) {
  fetchUserData(userId, (err, data) => {
    if (err) {
      // Log error if there is one.
      console.error('Error:', err);
      return;
    }
    // Log user data if fetched successfully.
    console.log('User Data:', data);
  });
}
