import quickSort from './quickSort.js';

// Problem-18 How to find the number which appeared maximum number of times in array?
function numberAppearedMaximum(array) {
  if (array.length === 0) {
    return null;
  }
  quickSort(array);
  let number = array[0];
  let count = 1;
  let max = 1;
  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
      count++;
    } else {
      count = 1;
    }
    if (count > max) {
      max = count;
      number = array[i];
    }
  }
  console.log('Number:', number, 'Count:', max);
  return number;
}

export default numberAppearedMaximum;
