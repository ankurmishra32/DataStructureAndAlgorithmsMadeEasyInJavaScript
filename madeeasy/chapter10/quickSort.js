import swap from './swap';

// 10.11 Quicksort
function partition(array, low, high) {
  let left = low;
  let right = high;
  const pivotItem = array[low];
  while (left < right) {
    while (array[left] <= pivotItem) {
      left++;
    }
    while (array[right] > pivotItem) {
      right--;
    }
    if (left < right) {
      swap(array, left, right);
    }
  }
  array[low] = array[right];
  array[right] = pivotItem;
  return right;
}

function quickSort(array, low, high) {
  let pivot;
  low = (low === undefined) ? 0 : low;
  high = (high === undefined) ? (array.length - 1) : high;
  if (high > low) {
    pivot = partition(array, low, high);
    quickSort(array, low, pivot - 1);
    quickSort(array, pivot + 1, high);
  }
}

export default quickSort;
