// Problem-17 In Problem-13, if the sum of the numbers goes beyond maximum allowed integers, then there can be integer
// overflow and may not get correct answer. How can we solve the problem?
// Sol: There is no integer in javascript but just number. However the solution of XOR is the anwser and still work here.
function findMissingNumberUsingXOR(array, limit) {
  let i;
  let X = 0;
  let Y = 0;
  const { length } = array;
  if (limit === undefined) {
    limit = length + 1;
  }
  for (i = 0; i < length; i++) {
    X ^= array[i];
  }
  for (i = 1; i <= limit; i++) {
    Y ^= i;
  }
  return X ^ Y;
}

export default findMissingNumberUsingXOR;
