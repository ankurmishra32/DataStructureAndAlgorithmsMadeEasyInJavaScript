// Problem-22 For the Problem-19, can we improve the time complexity using XOR operation
function printRepeatedElementsUsingXOR(array, n) {
  let i;
  let X = 0;
  let Y = 0;
  let XOR = array[0];
  for (i = 1; i < n + 2; i++) {
    XOR ^= array[i]; // Compute XOR of all elements in array
  }
  for (i = 1; i <= n; i++) {
    XOR ^= i; // Compute XOR of all elements from 1 to n
  }
  const rightMost = XOR & ~(XOR - 1); // Get the rightmost set bit in rightMost

  // Now divide elements in two sets by comparing rightmost set
  for (i = 0; i < n + 2; i++) {
    if (array[i] & rightMost) {
      X ^= array[i]; // XOR of first set in array
    } else {
      Y ^= array[i]; // XOR of second set in array
    }
  }

  for (i = 1; i <= n; i++) {
    if (i & rightMost) {
      X ^= i; // XOR of first set in array and {1,2,..,n}
    } else {
      Y ^= i; // XOR of second set in array and {1,2,..,n}
    }
  }
  console.log(X, Y);
}

export default printRepeatedElementsUsingXOR;
