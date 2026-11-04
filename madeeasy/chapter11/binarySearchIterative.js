// Binary search iterative version
function binarySearchIterative(array, item) {
  let low = 0;
  let mid;
  let high = array.length - 1;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (array[mid] === item) {
      return mid;
    } if (array[mid] < item) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

export default binarySearchIterative;
