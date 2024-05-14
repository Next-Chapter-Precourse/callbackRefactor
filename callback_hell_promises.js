const fs = require("fs").promises;

// Refactor the code from `callback_hell_example.js` to use Promises.
// TODO: Rewrite the nested file operations using Promise chains.
function nestedFileOperationsPromises() {
  // Implement the promise-based version of nested file operations here.
  return new Promise((resolve, reject) => {
    // Read the first file, 'file1.txt'
    fs.readFile("file1.txt", "utf8")
      .then(data1 => {
        console.log("File1 read successfully:", data1);
        const nextFileName = data1.trim() + ".txt";

        // Read the second file, the name of which is derived from the contents of file1
        return fs.readFile(nextFileName, "utf8");
      })
      .then(data2 => {
        console.log("Second file read successfully:", data2);
        const modifiedData = data2.toUpperCase();

        // Write the modified content back to a new file 'modifiedData.txt'
        return fs.writeFile("modifiedData.txt", modifiedData);
      })
      .then(() => {
        console.log("Modified data written successfully");
        resolve(); // Resolve the Promise when all operations are completed successfully
      })
      .catch(err => {
        console.error("An error occurred:", err);
        reject(err); // Reject the Promise if any error occurs
      });
  });
}


// Call the refactored function
nestedFileOperationsPromises()
  .then(() => {
    console.log("All operations completed successfully.");
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });
