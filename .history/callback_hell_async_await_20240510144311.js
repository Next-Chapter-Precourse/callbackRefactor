const fs = require("fs").promises;

// Refactor the code from `callback_hell_promises.js` to use Async/Await.
// TODO: Rewrite the Promise-based operations using async and await.
async function nestedFileOperationsAsync() {
  try {
    const data = await fs.readFile('input.txt', 'utf-8');
    await fs.writeFile('output.txt', data);
    const outputData = await fs.readFile('output.txt', 'utf-8');
    console.log(outputData);
  } catch (err) {
    console.error(err);
  }
}
