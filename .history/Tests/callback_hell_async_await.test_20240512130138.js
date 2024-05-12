const fs = require('fs');
const { readFilePromise, getUserDataPromise } = require('../async_await_practice.js');
const { readFileAsync, getUserDataAsync, fetchUserDataPromise } = require('../async_await_practice.js'); 

jest.mock('fs', () => {
  const mockReadFile = jest.fn();
  return {
    promises: {
      readFile: mockReadFile
    }
  };
});

describe('readFileAsync', () => {
  it('should return file content for existing file', async () => {
    fs.promises.readFile.mockResolvedValue('file content');
    const data = await readFileAsync('test.txt');
    expect(data).toBe('file content');
  });

  it('should throw an error for non-existing file', async () => {
    fs.promises.readFile.mockRejectedValue(new Error('File not found'));
    await expect(readFileAsync('test.txt')).rejects.toThrow('File not found');
  });
});

describe('getUserDataAsync', () => {
  it('should return user data for existing user', async () => {
    const data = await getUserDataAsync(1);
    expect(data).toEqual({ name: "Jane Doe", age: 30 });
  });

  it('should throw an error for non-existing user', async () => {
    await expect(getUserDataAsync(3)).rejects.toThrow('User not found');
  });
});
const { nestedFileOperationsAsync } = require('../callback_hell_async_await'); 

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