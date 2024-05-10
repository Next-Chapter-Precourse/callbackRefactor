const fs = require('fs').promises;

// Refactor the code from `callback_hell_promises.js` to use Async/Await.
// TODO: Rewrite the Promise-based operations using async and await.
async function nestedFileOperationsAsync() {
  // Implement the async/await-based version of nested file operations here.
  try {
    // Read file 1
    const file1Content = await fs.readFile('file1.txt', 'utf8');
    console.log('File 1 content:', file1Content);

    // Read file 2
    const file2Content = await fs.readFile('file2.txt', 'utf8');
    console.log('File 2 content:', file2Content);

    // Append file 1 content to file 2
    await fs.appendFile('file2.txt', file1Content);
    console.log('File 1 content appended to file 2 successfully');
  } catch (error) {
    console.error('Error:', error);
  }
}
