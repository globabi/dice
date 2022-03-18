import getDiceImageIfValidNumber from './GetDiceImageIfValidNumber';

test('adding a number greater than 6 returns a numeric value', () => {
  expect(getDiceImageIfValidNumber(7)).toBe(7);
});