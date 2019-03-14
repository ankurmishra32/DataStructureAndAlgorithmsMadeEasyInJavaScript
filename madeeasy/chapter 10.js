function getMax(array) {
  let i;
  let max = array[0];
  for (i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

function swap(array, left, right) {
  const temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

// 10.5 Bubble sort
function bubbleSort(array) {
  let i;
  let pass;
  const { length } = array;
  for (pass = length - 1; pass >= 0; pass--) {
    for (i = 0; i < pass; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
      }
    }
  }
}

// Above algorithm takes O(n^2) even in best case. We can improve it using an extra flag
// The only case where we can skip the remaining pass if array is already sorted. Best case O(n).
function bubbleSortImproved(array) {
  let i;
  let pass;
  let swapped = 1;
  const { length } = array;
  for (pass = length - 1; pass >= 0 && swapped; pass--) {
    swapped = 0;
    for (i = 0; i < pass; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = 1;
      }
    }
  }
}

// 10.6 Selection sort
function selectionSort(array) {
  let i;
  let pass;
  let min;
  const { length } = array;
  for (pass = 0; pass < length - 1; pass++) {
    min = pass;
    for (i = pass + 1; i < length; i++) {
      if (array[i] < array[min]) {
        min = i;
      }
    }
    swap(array, min, pass);
  }
}

// 10.7 Insertion sort
function insertionSort(array) {
  let temp;
  let pass;
  let i;
  const { length } = array;
  for (pass = 1; pass < length; pass++) {
    temp = array[pass];
    i = pass - 1;
    while (array[i] > temp && i >= 0) {
      array[i + 1] = array[i];
      i--;
    }
    array[i + 1] = temp;
  }
}

// 10.8 Shell sort
function shellSort(array) {
  let temp;
  let pass;
  let gap;
  let i;
  const { length } = array;
  for (gap = Math.floor(length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Modified Insersion Sort
    for (pass = gap; pass < length; pass++) {
      temp = array[pass];
      i = pass - gap;
      while (array[i] > temp && i >= 0) {
        array[i + gap] = array[i];
        i -= gap;
      }
      array[i + gap] = temp;
    }
  }
}

// Shell sort as per the Karumanchi book version
function shellSortByKarumanchi(array) {
  let i;
  let j;
  let h;
  let v;
  const { length } = array;
  for (h = 1; h < length / 9; h = 3 * h + 1);
  for (; h > 0; h = Math.floor(h / 3)) {
    for (i = h + 1; i < length; i++) {
      v = array[i];
      j = i;
      while (j >= h && array[j - h] > v) {
        array[j] = array[j - h];
        j -= h;
      }
      array[j] = v;
    }
  }
}

// 10.9 Merge sort
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

function merge(array, temp, left, mid, right) {
  let i;
  const left_end = mid - 1;
  let temp_pos = left;
  const size = right - left + 1;
  while ((left <= left_end) && (mid <= right)) {
    if (array[left] <= array[mid]) {
      temp[temp_pos++] = array[left++];
    } else {
      temp[temp_pos++] = array[mid++];
    }
  }
  while (left <= left_end) {
    temp[temp_pos++] = array[left++];
  }
  while (mid <= right) {
    temp[temp_pos++] = array[mid++];
  }
  for (i = 0; i <= size; i++) {
    array[right] = temp[right];
    right--;
  }
}

// 10.11 Quicksort
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

function partition(array, low, high) {
  let left = low;
  let right = high;
  const pivot_item = array[low];
  while (left < right) {
    while (array[left] <= pivot_item) {
      left++;
    }
    while (array[right] > pivot_item) {
      right--;
    }
    if (left < right) {
      swap(array, left, right);
    }
  }
  array[low] = array[right];
  array[right] = pivot_item;
  return right;
}

// 10.15 Counting sort
function countingSort(array, limit, exp) {
  let i;
  const temp = [];
  const result = [];
  const { length } = array;
  exp = exp || 1;
  if (limit === undefined) {
    limit = getMax(array) + 1;
  }
  // complexity O(limit)
  for (i = 0; i < limit; i++) {
    temp[i] = 0;
  }
  // complexity O(length)
  for (i = 0; i < length; i++) {
    // temp[array[i]]++;
    // modified for radix sort
    temp[(array[i] / exp) % limit]++;
  }
  // complexity O(limit)
  for (i = 1; i < limit; i++) {
    temp[i] += temp[i - 1];
  }
  // complexity O()
  for (i = length - 1; i >= 0; i--) {
    // result[temp[array[i]] - 1] = array[i];
    // modified for radix sort
    result[temp[(array[i] / exp) % limit] - 1] = array[i];
    // temp[array[i]]--;
    // modified for radix sort
    temp[(array[i] / exp) % limit]--;
  }
  // modified array to get the result
  for (i = 0; i < length; i++) {
    array[i] = result[i];
  }
}

// 10.16 Bucket sort
function bucketSort(array, BUCKET) {
  let i;
  let j;
  let k;
  const buckets = [];
  const { length } = array;
  if (BUCKET === undefined) {
    BUCKET = getMax(array) + 1;
  }
  // complexity O(BUCKET)
  for (i = 0; i < BUCKET; i++) {
    buckets[i] = 0;
  }
  // complexity O(length)
  for (i = 0; i < length; i++) {
    buckets[array[i]]++;
  }
  for (i = 0, j = 0; j < BUCKET; j++) {
    for (k = buckets[j]; k > 0; k--) {
      array[i++] = j;
    }
  }
}

// 10.17 Radix sort
function radixSort(array) {
  let exp;
  const max = getMax(array);
  console.log(max);
  for (exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(array, 10, exp);
  }
}

// Problem-1 Given an array of n numbers containing repetition of some numbers. Check whether there are repeated elements or not.
// Assume that we are not allowed to use additional space (but we can use temporary variables, O(1) storage).
function checkDuplicatesInArray(array) {
  let i;
  let j;
  const { length } = array;
  for (i = 0; i < length - 1; i++) {
    for (j = i + 1; j < length; j++) {
      if (array[i] === array[j]) { return true; }
    }
  }
  return false;
}

// Problem-2 Can we improve the time complexity of Problem-1
// Use Heap-Sort as it have O(n log n) running complexity and use O(1) additional space.
// We may also use Shell-Sort as it have O(n log^2 n) running time and O(1) additional space complexity.
function improvedCheckDuplicatesInArray(array) {
  let i;
  const { length } = array;
  shellSort(array);
  for (i = 0; i < length - 1; i++) {
    if (array[i] === array[i + 1]) { return true; }
  }
  return false;
}

// Problem-3 Given an array, where each element represents a vote in the election. Assume that each vote is given as an integer
// representation the ID of chosen candidate. Give an algorithm for determining who wins the election.
function checkWhoWinsTheElection(array) {
  let i;
  let j;
  let counter;
  let maxCounter = 0;
  let candidate = array[0];
  const { length } = array;
  for (i = 0; i < length; i++) {
    counter = 0;
    for (j = i + 1; j < length; j++) {
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

// Problem-4 Can we improve the complexity of Problem-3
function improvedCheckWhoWinsTheElection(array) {
  let i;
  let j;
  let candidate;
  let counter = 0;
  let maxCounter = 0;
  let currentCandidate = array[0];
  const { length } = array;
  shellSort(array);
  for (i = 1; i < length; i++) {
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
