// 10.9 Merge sort
function merge(array, temp, left, mid, right) {
  const leftEnd = mid - 1;
  let tempPos = left;
  const size = right - left + 1;
  while ((left <= leftEnd) && (mid <= right)) {
    if (array[left] <= array[mid]) {
      temp[tempPos++] = array[left++];
    } else {
      temp[tempPos++] = array[mid++];
    }
  }
  while (left <= leftEnd) {
    temp[tempPos++] = array[left++];
  }
  while (mid <= right) {
    temp[tempPos++] = array[mid++];
  }
  for (let i = 0; i <= size; i++) {
    array[right] = temp[right];
    right--;
  }
}

function mergeSort(array, temp, left, right) {
  let mid;
  temp = (temp === undefined) ? [] : temp;
  left = (left === undefined) ? 0 : left;
  right = (right === undefined) ? (array.length - 1) : right;
  if (left < right) {
    mid = (left + right) / 2;
    mid = Math.floor(mid);
    mergeSort(array, temp, left, mid);
    mergeSort(array, temp, mid + 1, right);
    merge(array, temp, left, mid + 1, right);
  }
}
