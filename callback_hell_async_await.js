const fs = require("fs");

// Refactor the code from `callback_hell_promises.js` to use Async/Await.
// TODO: Rewrite the Promise-based operations using async and await.
function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        // If an error occurs during the file read, log the error and exit the function.
        reject("Failed to read the file:", err);
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

async function nestedFileOperationsAsync(filePath) {
  // Implement the async/await-based version of nested file operations here.
  try {
    let readFileResultPromise = await readFilePromise(filePath);
    const readFileResultPromise2 = await readFilePromise(readFileResultPromise);
    const writeFilePromiseResult = await writeFilePromise(readFileResultPromise2);
    console.log("successful");
  } catch (error) {
    console.log("error", error);
  }
}

nestedFileOperationsAsync("file1.txt");
