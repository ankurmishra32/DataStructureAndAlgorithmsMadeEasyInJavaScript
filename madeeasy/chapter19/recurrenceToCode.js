// 19.8

// Problem-1
function recurrenceToCode(num) {
  if (num === 0 || num === 1) {
    return 2;
  }
  let sum = 0;
  for (let i = 1; i < num; i++) {
    sum += 2 * recurrenceToCode(i) * recurrenceToCode(i - 1);
  }
  return sum;
}

export default recurrenceToCode;
