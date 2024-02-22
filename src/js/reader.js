export default function read() {
  return new Promise((resolve) => {
    // эмуляция чтения файла
    setTimeout(() => {
      const data = "{'id': 444,'created': 10032020,'userInfo': { 'id': 666, 'name': 'NoName', 'level': 95, 'points': 2000 }";
      return ((input) => {
        const buffer = new ArrayBuffer(input.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i += 1) {
          bufferView[i] = input.charCodeAt(i);
        }
        resolve(buffer);
      })(data);
    }, 1000);
  });
}
