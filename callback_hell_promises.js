const fs = require("fs");

// Refactor the code from `callback_hell_example.js` to use Promises.
// TODO: Rewrite the nested file operations using Promise chains.
function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    // resolve("inside read file");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        // If an error occurs during the file read, log the error and exit the function.
        reject("Failed to read the second file:", err);
      }
      // Log the successful data retrieval from file1
      // Process the content of file1 to determine the next file name
      const nextFileName = data.trim() + ".txt";
      resolve(nextFileName);
    });
  });
}


function writeFilePromise(modifiedData) {
  return new Promise((resolve, reject) => {
    fs.writeFile("modifiedData.txt", modifiedData, (err) => {
      // Third callback handling the response of writeFile
      if (err) {
        // If an error occurs during file writing, log the error.
        reject("Failed to write modified data:", err);
      } else {
        // Confirm successful writing of the modified data to the new file
        resolve("Modified data written successfully");
      }
    });
  })
}

readFilePromise("file1.txt")
  .then((result) => {
    console.log("completed read file:", result);
    return readFilePromise(result);
  })
  .then((result) => {
    console.log("completed second read file:", result);
    return writeFilePromise(result);
  })
  .then((result) => {
    console.log(result);
  })