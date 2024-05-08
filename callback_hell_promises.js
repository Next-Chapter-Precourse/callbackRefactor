const fs = require("fs").promises; // import fs that returns promises

// generic readme file that returns a promise
const readFile = (fileName) => {
  return fs.readFile(fileName, "utf8").catch((err) => {
    throw `Failed to read ${fileName}: ${err}`;
  });
};

// generic write file that returns a promise
const writeFile = (filename, data) => {
  return fs.writeFile(filename, data).catch((err) => {
    throw `Failed to write modified data: ${err}`;
  });
};

function nestedFileOperationsPromises() {
  readFile("file1.txt") // read first file
    .then((data1) => {
      console.log("File1 read successfully:", data1);
      const nextFileName = data1.trim() + ".txt";
      return readFile(nextFileName); // read second file
    })
    .then((data2) => {
      console.log("Second file read successfully:", data2);
      const modifiedData = data2.toUpperCase();
      return writeFile("modifiedData.txt", modifiedData); // write to new file
    })
    .then(() => {
      console.log("Modified data written successfully");
    })
    .catch((error) => {
      console.error("Error", error);
    });
}

nestedFileOperationsPromises();
