const fs = require('fs');
const { readFilePromise, getUserDataPromise } = require('../async_await_practice.js');
const { readFilePromise, getUserDataPromise, fetchUserDataPromise } = require('../promises_practice'); 

jest.mock('fs', () => {
  const mockReadFile = jest.fn();
  return {
    promises: {
      readFile: mockReadFile
    }
  };
});

describe('readFilePromise', () => {
  it('should return file content for existing file', async () => {
    fs.promises.readFile.mockResolvedValue('file content');
    const data = await readFilePromise('test.txt');
    expect(data).toBe('file content');
  });

  it('should throw an error for non-existing file', async () => {
    fs.promises.readFile.mockRejectedValue(new Error('File not found'));
    await expect(readFilePromise('test.txt')).rejects.toThrow('File not found');
  });
});

describe('getUserDataPromise', () => {
  it('should return user data for existing user', async () => {
    const data = await getUserDataPromise(1);
    expect(data).toEqual({ name: "Jane Doe", age: 30 });
  });

  it('should throw an error for non-existing user', async () => {
    await expect(getUserDataPromise(3)).rejects.toThrow('User not found');
  });
});