import shellSort from './shellSort.js';

// Problem-4 Can we improve the complexity of Problem-3
function improvedCheckWhoWinsTheElection(array) {
  if (array.length === 0) {
    return null;
  }
  shellSort(array);
  let candidate = array[0];
  let currentCandidate = array[0];
  let counter = 1;
  let maxCounter = 1;
  for (let i = 1; i < array.length; i++) {
    if (array[i] === currentCandidate) {
      counter++;
    } else {
      currentCandidate = array[i];
      counter = 1;
    }
    if (counter > maxCounter) {
      maxCounter = counter;
      candidate = currentCandidate;
    }
  }
  return candidate;
}

export default improvedCheckWhoWinsTheElection;
