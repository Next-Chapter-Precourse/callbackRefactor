const fs = require('fs');
const { readFilePromise, getUserDataPromise, readFileAsync, getUserDataAsync, fetchUserDataPromise } = require('../async_await_practice.js');

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