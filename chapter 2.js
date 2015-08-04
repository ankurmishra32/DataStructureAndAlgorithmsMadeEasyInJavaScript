//2.4 format of a recursive function
//calulates factorial of a positive integer
var Fact = function(n){
  //base case: fact of 1
  if (n===1){
    return 1;
  }
  //base case: fact of 0
  else if (n===0){
    return 1;
  }
  //recursive case: multiply n by (n-1) factorial
  else {
    return n*Fact(n-1);
  }
};

//----------
//2.5 recursion and memory (virtualization)

var print = function(n){
  if (n===0){ //this is the terminating base case
    return 0;
  } else {
    console.log(n);
    return print(n-1); //recursive call to itself again
  }
};

//----------
//2.9 Problem-1 Discuss Tower of Hanoi puzzle

function TowerOfHanoi(n, frompeg, topeg, auxpeg) {
  // if only 1 disk, make the move and return
  if(n===1){
    console.log("Move disk 1 from peg " + frompeg + " to peg " + topeg);
    return;
  }
  //move top n-1 disks from A to B, using C as auxiliary
  TowerOfHanoi(n-1, frompeg, auxpeg, topeg);
  //move remaining disks from A to C
  console.log("Move disk from peg " + frompeg + " to peg " + topeg);
  //move top n-1 disks from B to C, using A as auxiliary
  TowerOfHanoi(n-1, auxpeg, frompeg, topeg);
}

//----------
//2.12 Problem-2 Generate all strings of n bits.

var A = []; //arrary A is globle variale

function Binary(n){
  if(n<1){
    console.log(A);
  } else {
    A[n-1]=0;
    Binary(n-1);
    A[n-1]=1;
    Binary(n-1);
  }
}

//----------
//2.12 Problem-3 Generate all the string of length n drawn from 0...k-1

var A = []; //arrary A is globle variale
function k_string(n, k){
  if(n<1){
    console.log(A);
  } else {
    for(var i=0; i<k; i++){
      A[n-1]=i;
      k_string(n-1, k);
    }
  }
}

//----------