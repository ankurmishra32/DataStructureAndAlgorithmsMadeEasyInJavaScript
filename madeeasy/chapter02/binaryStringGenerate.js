// 2.12 Problem-2 Generate all strings of n bits.
const A = []; // arrary A is globle variale

function Binary(n) {
  if (n < 1) {
    console.log(A);
  } else {
    A[n - 1] = 0;
    Binary(n - 1);
    A[n - 1] = 1;
    Binary(n - 1);
  }
}
