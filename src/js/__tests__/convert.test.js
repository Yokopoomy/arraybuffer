import ArrayBufferConverter from '../convert';

test('convert', () => {
  const buffer = new ArrayBufferConverter();
  const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  buffer.load(result);

  expect(buffer.toString()).toBe(result);
});
