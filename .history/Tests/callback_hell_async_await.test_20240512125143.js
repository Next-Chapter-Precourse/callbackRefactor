const { nestedFileOperationsAsync } = require('../callback_hell_async_await'); 

const mockReadFile = jest.fn();
const mockWriteFile = jest.fn();

jest.mock('fs', () => ({
  promises: {
    readFile: mockReadFile,
    writeFile: mockWriteFile
  }
}));

describe('nestedFileOperationsAsync', () => {
  it('should read from input.txt, write to output.txt, and read from output.txt', async () => {
    mockReadFile.mockResolvedValueOnce('input data')
      .mockResolvedValueOnce('input data');
    mockWriteFile.mockResolvedValue();

    console.log = jest.fn();

    await nestedFileOperationsAsync();

    expect(mockReadFile).toHaveBeenCalledWith('input.txt', 'utf-8');
    expect(mockWriteFile).toHaveBeenCalledWith('output.txt', 'input data');
    expect(mockReadFile).toHaveBeenCalledWith('output.txt', 'utf-8');
    expect(console.log).toHaveBeenCalledWith('input data');
  });

  it('should log an error if any operation fails', async () => {
    mockReadFile.mockRejectedValue(new Error('File not found'));

    console.error = jest.fn();

    await nestedFileOperationsAsync();

    expect(console.error).toHaveBeenCalledWith(new Error('File not found'));
  });
});