// Problem-3 Given an array, where each element represents a vote in the election. Assume that each vote is given as an integer
// representation the ID of chosen candidate. Give an algorithm for determining who wins the election.
function checkWhoWinsTheElection(array) {
  let counter;
  let maxCounter = 0;
  let candidate = array[0];
  const { length } = array;
  for (let i = 0; i < length; i++) {
    counter = 0;
    for (let j = i + 1; j < length; j++) {
      if (array[i] === array[j]) {
        counter++;
      }
    }
    if (counter > maxCounter) {
      candidate = array[i];
      maxCounter = counter;
    }
  }
  return candidate;
}
