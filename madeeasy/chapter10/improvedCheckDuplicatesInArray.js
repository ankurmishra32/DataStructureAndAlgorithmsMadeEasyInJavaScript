import shellSort from './shellSort';

// Problem-2 Can we improve the time complexity of Problem-1
// Use Heap-Sort as it have O(n log n) running complexity and use O(1) additional space.
// We may also use Shell-Sort as it have O(n log^2 n) running time and O(1) additional space complexity.
function improvedCheckDuplicatesInArray(array) {
  const { length } = array;
  shellSort(array);
  for (let i = 0; i < length - 1; i++) {
    if (array[i] === array[i + 1]) { return true; }
  }
  return false;
}
