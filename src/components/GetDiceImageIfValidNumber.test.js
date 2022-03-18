import getDiceImageIfValidNumber from './GetDiceImageIfValidNumber';

test('adding a number greater than 6 returns a numeric value', () => {
  expect(getDiceImageIfValidNumber(7)).toBe(7);
  let toBeReceived = 'fa-solid fa-5x blackiconcolor fa-dice-six';
  expect(getDiceImageIfValidNumber(6)).toBe(toBeReceived);
  toBeReceived = 'fa-solid fa-5x blackiconcolor fa-dice-one';
  expect(getDiceImageIfValidNumber(1)).toBe(toBeReceived);
});