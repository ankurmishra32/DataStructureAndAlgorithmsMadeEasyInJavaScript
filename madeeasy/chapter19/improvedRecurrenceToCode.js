// Problem-3 Can we further improve Problem-2
function improvedRecurrenceToCode(num) {
  const T = [2, 2];
  T[2] = 2 * T[1] * T[0];
  for (let i = 3; i <= num; i++) {
    T[i] = T[i - 1] + 2 * T[i - 1] * T[i - 2];
  }
  return T[num];
}

export default improvedRecurrenceToCode;
