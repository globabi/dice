import {getDiceImageIfValidNumber} from './GetDiceImageIfValidNumber';

test('adding a number greater than 6 returns a numeric value', () => {
  console.log(getDiceImageIfValidNumber(7));
  expect(getDiceImageIfValidNumber(7)).toBe(7);

});