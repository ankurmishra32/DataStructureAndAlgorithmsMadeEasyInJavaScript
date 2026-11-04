// Problem-13 Finding the missing number: We are given an array of n-1 size and have numbers from 1 to n.
// There are no duplicates in the list. One of the number is missing. Give an algo to find that missing number.
// Brute-force method
function findMissingNumberBruteForse(array, limit) {
  let i;
  let j;
  let found;
  const { length } = array;
  if (limit === undefined) {
    limit = length + 1;
  }
  for (i = 1; i <= limit; i++) {
    found = false;
    for (j = 0; j < length; j++) {
      if (array[j] === i) {
        found = true;
      }
    }
    if (!found) {
      return i;
    }
  }
  return -1;
}

export default findMissingNumberBruteForse;
