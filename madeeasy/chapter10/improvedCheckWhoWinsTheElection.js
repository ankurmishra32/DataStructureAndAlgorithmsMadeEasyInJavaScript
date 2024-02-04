import shellSort from './shellSort';

// Problem-4 Can we improve the complexity of Problem-3
function improvedCheckWhoWinsTheElection(array) {
  let candidate;
  let counter = 0;
  let maxCounter = 0;
  let currentCandidate = array[0];
  const { length } = array;
  shellSort(array);
  for (let i = 1; i < length; i++) {
    if (array[i] === currentCandidate) {
      counter++;
    } else {
      currentCandidate = array[i];
      counter = 0;
    }
    if (counter > maxCounter) {
      maxCounter = counter;
      candidate = currentCandidate;
    }
  }
}
