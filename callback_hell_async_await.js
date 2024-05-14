const fs = require("fs").promises;

// Refactor the code from `callback_hell_promises.js` to use Async/Await.
// TODO: Rewrite the Promise-based operations using async and await.
async function nestedFileOperationsAsync() {
  // Implement the async/await-based version of nested file operations here.
   try {
    // Read the first file, 'file1.txt'
    const data1 = await fs.readFile("file1.txt", "utf8");
    console.log("File1 read successfully:", data1);

    // Process the content of file1 to determine the next file name
    const nextFileName = data1.trim() + ".txt";

    // Read the second file, the name of which is derived from the contents of file1
    const data2 = await fs.readFile(nextFileName, "utf8");
    console.log("Second file read successfully:", data2);

    // Modify the content of the second file, e.g., converting it to uppercase
    const modifiedData = data2.toUpperCase();

    // Write the modified content back to a new file 'modifiedData.txt'
    await fs.writeFile("modifiedData.txt", modifiedData);
    console.log("Modified data written successfully");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Call the refactored function
nestedFileOperationsAsync();
