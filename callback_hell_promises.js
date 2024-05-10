const fs = require('fs').promises;

// Refactor the code from `callback_hell_example.js` to use Promises.
// TODO: Rewrite the nested file operations using Promise chains.
function nestedFileOperationsPromises() {
  // Implement the promise-based version of nested file operations here.
  return fs
    .readFile('file1.txt', 'utf8')
    .then((file1Content) => {
      console.log('File 1 content:', file1Content);
      // Read file 2
      return fs.readFile('file2.txt', 'utf8');
    })
    .then((file2Content) => {
      console.log('File 2 content:', file2Content);
      // Append file 1 content to file 2
      return fs.appendFile('file2.txt', file2Content);
    })
    .then(() => {
      console.log('File 1 content appended to file 2 successfully');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
