// 2.12 Problem-3 Generate all the string of length n drawn from 0...k-1
const A = []; // arrary A is globle variale

function kString(n, k) {
  if (n < 1) {
    console.log(A);
  } else {
    let i;
    for (i = 0; i < k; i++) {
      A[n - 1] = i;
      kString(n - 1, k);
    }
  }
}
