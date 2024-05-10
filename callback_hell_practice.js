const fs = require('fs');

/**
 * Demonstrates a series of nested file operations, a common example of "callback hell".
 * This function performs multiple file operations where each step depends on the success of the previous one.
 */
function nestedFileOperations() {
  // Read the first file, 'file1.txt'
  fs.readFile('file1.txt', 'utf8', (err, data1) => {
    // First callback handling the response of readFile
    if (err) {
      // If an error occurs during the file read, log the error and exit the function.
      console.error('Failed to read file1:', err);
      return;
    }
    // Log the successful data retrieval from file1
    console.log('File1 read successfully:', data1);

    // Process the content of file1 to determine the next file name
    const nextFileName = data1.trim() + '.txt';

    // Read the second file, the name of which is derived from the contents of file1
    fs.readFile(nextFileName, 'utf8', (err, data2) => {
      // Second callback handling the response of readFile for the second file
      if (err) {
        // If an error occurs during the second file read, log the error and exit the function.
        console.error('Failed to read the second file:', err);
        return;
      }
      // Log the successful data retrieval from the second file
      console.log('Second file read successfully:', data2);

      // Modify the content of the second file, e.g., converting it to uppercase
      const modifiedData = data2.toUpperCase();

      // Write the modified content back to a new file 'modifiedData.txt'
      fs.writeFile('modifiedData.txt', modifiedData, (err) => {
        // Third callback handling the response of writeFile
        if (err) {
          // If an error occurs during file writing, log the error.
          console.error('Failed to write modified data:', err);
          return;
        }
        // Confirm successful writing of the modified data to the new file
        console.log('Modified data written successfully');
      });
    });
  });
}

// Call the function to demonstrate callback hell in action
nestedFileOperations();
