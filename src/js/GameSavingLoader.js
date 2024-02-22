import json from './parcer';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const result = await json(data);
      return result;
    } catch (error) {
      throw new Error(`Ошибка: ${error}`);
    }
  }
}
