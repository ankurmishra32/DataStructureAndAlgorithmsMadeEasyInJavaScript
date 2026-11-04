// Problem-4 Can we improve the complexity of problem-1 solution? Assume that array have all +ve numbers and all numbers are from rangle [0, n-1]
function checkDuplicatesInArrayWithAsssumptionOfValues(array) {
  const { length } = array;
  // Values are marked as -(value + 1) so that 0 can be marked too:
  // plain negation turns 0 into -0, which is not less than 0.
  for (let i = 0; i < length; i++) {
    const value = array[i] < 0 ? -array[i] - 1 : array[i];
    if (array[value] < 0) {
      return true;
    }
    array[value] = -(array[value] + 1);
  }
  return false;
}

export default checkDuplicatesInArrayWithAsssumptionOfValues;
