import quickSort from './quickSort';

// Problem-5 Can we further improve complexity of Problem-3
// Use Counting-Sort as no of candidates will be very less compare to votes.

// Problem-9 Let A and B be two arrays and there is a number K.
// Give an algorithm to determine whether there exist a->A and b->B such that a+b=K in O(n log n) times.
// For the given problem, we must have Binary search algorith.

// Problem-16 Sort an array of 0's, 1's and 2's.
// We can use Counting-Sort as it have only 3 elements. Complexity O(n)
// We can also use Quick-Sort by using 1 as pivot element. This will move all 0's before 1 and all 2's after 1.
// Hence the complexity of using Quick-Sort become O(n).

// Problem-18 How to find the number which appeared maximum number of times in array?
function numberAppearedMaximum(array) {
  let i;
  let number;
  let count = 1;
  let max = 1;
  const { length } = array;
  quickSort(array);
  for (i = 1; i < length; i++) {
    if (array[i] === array[i - 1]) {
      count++;
    } else {
      if (max < count) {
        max = count;
        number = array[i - 1];
      }
      count = 1;
    }
  }
  console.log('Number:', number, 'Count:', max);
}
