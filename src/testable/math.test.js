import sum from './math';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds -1 to 12 to get 11', () => {
  expect(sum(-1, 12)).toBe(11);
});