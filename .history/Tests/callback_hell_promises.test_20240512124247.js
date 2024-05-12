const { nestedFileOperationsPromises } = require('../callback_hell_promises'); 
const fs = require('fs').promises;

jest.mock('fs', () => ({
  promises: {
    readFile: jest.fn(),
    writeFile: jest.fn()
  }
}));

describe('nestedFileOperationsPromises', () => {
  it('should read from input.txt, write to output.txt, and read from output.txt', async () => {
    fs.promises.readFile.mockResolvedValueOnce('input data')
      .mockResolvedValueOnce('input data');
    fs.promises.writeFile.mockResolvedValue();

    console.log = jest.fn();

    await nestedFileOperationsPromises();

    expect(fs.promises.readFile).toHaveBeenCalledWith('input.txt', 'utf-8');
    expect(fs.promises.writeFile).toHaveBeenCalledWith('output.txt', 'input data');
    expect(fs.promises.readFile).toHaveBeenCalledWith('output.txt', 'utf-8');
    expect(console.log).toHaveBeenCalledWith('input data');
  });

  it('should log an error if any operation fails', async () => {
    fs.promises.readFile.mockRejectedValue(new Error('File not found'));

    console.error = jest.fn();

    await nestedFileOperationsPromises();

    expect(console.error).toHaveBeenCalledWith(new Error('File not found'));
  });
});