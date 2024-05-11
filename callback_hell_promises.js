const fs = require("fs").promises;

/**
 * Executes nested file operations using Promise chains.
 */
function nestedFileOperationsPromises() {
  // Read a file
  fs.readFile('path/to/original/file.txt', 'utf-8')
    .then(originalContent => {
      // Process the content
      const processedContent = originalContent.toUpperCase();  // Example of processing

      // Write the processed content to a new file
      return fs.writeFile('path/to/destination/file.txt', processedContent);
    })
    .then(() => {
      console.log("File has been processed and written successfully.");
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });
}

// Call the function to perform the operations
nestedFileOperationsPromises();
