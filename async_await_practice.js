const fs = require("fs").promises;

/**
 * Reads a file asynchronously using async/await.
 * @param {string} filePath - Path to the file to be read.
 */
async function readFileAsync(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf-8"); // assuming the file encoding is utf-8
    console.log("File read successfully:", data);
    return data;
  } catch (error) {
    console.error("Error reading the file:", error);
    throw error; // Re-throw the error if needed to be handled by the caller
  }
}

/**
 * Fetches user data asynchronously using async/await.
 * @param {number} userId - The ID of the user to fetch.
 */
async function getUserDataAsync(userId) {
  try {
    const userData = await fetchUserDataPromise(userId);
    console.log("User data fetched successfully:", userData);
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // Re-throw the error if needed to be handled by the caller
  }
}

// Helper function remains unchanged, it's already set up to return a promise.
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
