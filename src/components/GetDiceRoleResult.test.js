import {getDiceRollResult} from './GetDiceRoleResult';

const isResultBetweenZeroAndSevenForASixSidedDice = async () => {
  const result = getDiceRollResult(6);
  expect(result).toBeGreaterThanOrEqual(1);
  expect(result).toBeLessThan(7);
  return true;
}

test('dice role is a number between 1 and 6 when a six sided dice is used', () => {
  const testRuns = []
  for (let index = 0; index < 100; index++) {
    testRuns.push(isResultBetweenZeroAndSevenForASixSidedDice())
  }
  return Promise.all(testRuns);
});