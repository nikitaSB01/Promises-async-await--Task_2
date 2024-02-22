import read from '../reader';
import GameSavingLoader from '../GameSavingLoader';

jest.mock('../reader');

test('resolve GameSavingLoader', () => {
  const input = "{'id': 345,'created': 54892732,'userInfo': { 'id': 666, 'name': 'Name', 'level': 9095, 'points': 11111 }}";
  const buffer = new ArrayBuffer(input.length * 2);
  const bufferView = new Uint16Array(buffer);
  for (let i = 0; i < input.length; i += 1) {
    bufferView[i] = input.charCodeAt(i);
  }

  read.mockResolvedValue(buffer);
  expect.assertions(1);
  return expect(GameSavingLoader.load()).resolves.toEqual(input);
});

test('reject GameSavingLoader', () => {
  const error = 'read failed';
  read.mockRejectedValue(error);
  expect.assertions(1);
  return expect(GameSavingLoader.load()).rejects.toThrow(`Ошибка: ${error}`);
});
