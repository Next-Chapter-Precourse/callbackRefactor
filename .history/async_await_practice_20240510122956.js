const fs = require("fs").promises;

/**
 * Refactor the Promise-based file reader to use async/await.
 * @param {string} filePath - Path to the file to be read.
 */

async function readFileAsync(filePath) {
  // TODO: Use async/await to handle fs.promises.readFile
}

/**
 * Refactor the Promise-based user data fetcher to use async/await.
 * @param {number} userId - The ID of the user to fetch.
 */
async function getUserDataAsync(userId) {
  // TODO: Use async/await to handle fetchUserDataPromise
}

// Helper function refactored to return a promise
function fetchUserDataPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fakeDatabase = {
        1: {name: "Jane Doe", age: 30},
        2: {name: "John Doe", age: 28}
      };
      if (fakeDatabase[id]) {
        resolve(fakeDatabase[id]);
      } else {
        reject(new Error("User not found"));
      }
    }, 1000);
  });
}
