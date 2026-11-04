// Binary search recursive version
function binarySearchRecursive(array, item, low, high) {
  low = (low === undefined) ? 0 : low;
  high = (high === undefined) ? (array.length - 1) : high;
  if (low > high) {
    return -1;
  }
  const mid = low + Math.floor((high - low) / 2);
  if (array[mid] === item) {
    return mid;
  } if (array[mid] < item) {
    return binarySearchRecursive(array, item, mid + 1, high);
  }
  return binarySearchRecursive(array, item, low, mid - 1);
}

export default binarySearchRecursive;
