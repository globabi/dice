export const getDiceRollResult = (diceSides) => {
  return Math.floor(Math.random() * diceSides) + 1;
}
