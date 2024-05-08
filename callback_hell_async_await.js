const fs = require("fs").promises;

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

async function nestedFileOperationsAsync() {
  try {
    // read first file
    const data1 = await readFile("file1.txt");
    console.log("File1 read successfully:", data1);
    const nextFileName = data1.trim() + ".txt";
    // read second file
    const data2 = await readFile(nextFileName);
    console.log("Second file read successfully:", data2);
    const modifiedData = data2.toUpperCase();
    // write to new file
    await writeFile("modifiedData.txt", modifiedData);
    console.log("Modified data written successfully");
  } catch (error) {
    console.error("Error", error);
  }
}

nestedFileOperationsAsync();
