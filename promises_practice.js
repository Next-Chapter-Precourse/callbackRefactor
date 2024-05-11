const fs = require("fs").promises;

/**
 * Reads a file and handles the result using Promises.
 * @param {string} filePath - Path to the file to be read.
 */
function readFilePromise(filePath) {
  fs.readFile(filePath, 'utf8')
    .then(data => {
      console.log("File read successfully:", data);
    })
    .catch(error => {
      console.error("Error reading file:", error);
    });
}
