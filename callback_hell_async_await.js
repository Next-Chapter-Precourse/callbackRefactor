const fs = require("fs").promises;

/**
 * Executes nested file operations using async/await.
 */
async function nestedFileOperationsAsync() {
  try {
    // Read the original file
    const originalContent = await fs.readFile('path/to/original/file.txt', 'utf-8');

    // Process the content
    const processedContent = originalContent.toUpperCase();  // Example transformation

    // Write the processed content to a new file
    await fs.writeFile('path/to/destination/file.txt', processedContent);

    console.log("File processing completed successfully.");
  } catch (error) {
    console.error("An error occurred during file operations:", error);
  }
}
