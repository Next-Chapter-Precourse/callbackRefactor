const fs = require("fs").promises;

/**
 * Refactor the callback-based file reader to use Promises.
 * @param {string} filePath - Path to the file to be read.
 */
function readFilePromise(filePath) {
  // TODO: Refactor to use fs.promises.readFile and handle the promise with .then() and .catch()
}

/**
 * Refactor the callback-based user data fetcher to use Promises.
 * @param {number} userId - The ID of the user to fetch.
 */
function getUserDataPromise(userId) {
  // TODO: Refactor fetchUserData to return a promise and use .then() and .catch() to handle it
}

// Helper function simulate fetchinf user data
// refactored to return a promise i.e. resolve or reject. More on resolve and reject here: https://www.freecodecamp.org/news/javascript-es6-promises-for-beginners-resolve-reject-and-chaining-explained/
// Similar to the callback_practice file you will use this above in getUserDataPromise to fetch user data.
function fetchUserDataPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fakeDatabase = {
        1: { name: "Jane Doe", age: 30 },
        2: { name: "John Doe", age: 28 },
      };

      if (fakeDatabase[id]) {
        resolve(fakeDatabase[id]);
      } else {
        reject(new Error("User not found"));
      }
    }, 1000);
  });
}
