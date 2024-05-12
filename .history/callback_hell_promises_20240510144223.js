const fs = require("fs").promises;

// Refactor the code from `callback_hell_example.js` to use Promises.
// TODO: Rewrite the nested file operations using Promise chains.
function nestedFileOperationsPromises() {
  return fs.readFile('input.txt', 'utf-8')
    .then(data => {
      return fs.writeFile('output.txt', data);
    })
    .then(() => {
      return fs.readFile('output.txt', 'utf-8');
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });
}
