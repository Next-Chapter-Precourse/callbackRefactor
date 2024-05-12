const fs = require('fs');
const { readFilePromise, getUserDataPromise, nestedFileOperationsAsync } = require('../callback_hell_async_await');

jest.mock('fs', () => {
  const mockReadFile = jest.fn();
  const mockWriteFile = jest.fn();
  return {
    promises: {
      readFile: mockReadFile,
      writeFile: mockWriteFile
    }
  };
});

describe('nestedFileOperationsAsync', () => {
  it('should read from input.txt, write to output.txt, and read from output.txt', async () => {
    fs.promises.readFile.mockResolvedValueOnce('input data')
      .mockResolvedValueOnce('input data');
    fs.promises.writeFile.mockResolvedValue();

    console.log = jest.fn();

    await nestedFileOperationsAsync();

    expect(fs.promises.readFile).toHaveBeenCalledWith('input.txt', 'utf-8');
    expect(fs.promises.writeFile).toHaveBeenCalledWith('output.txt', 'input data');
    expect(fs.promises.readFile).toHaveBeenCalledWith('output.txt', 'utf-8');
    expect(console.log).toHaveBeenCalledWith('input data');
  });

  it('should log an error if any operation fails', async () => {
    fs.promises.readFile.mockRejectedValue(new Error('File not found'));

    console.error = jest.fn();

    await nestedFileOperationsAsync();

    expect(console.error).toHaveBeenCalledWith(new Error('File not found'));
  });
});