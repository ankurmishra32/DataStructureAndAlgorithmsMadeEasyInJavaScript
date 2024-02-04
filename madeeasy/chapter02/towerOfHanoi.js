// 2.9 Problem-1 Discuss Tower of Hanoi puzzle
function TowerOfHanoi(n, frompeg, topeg, auxpeg) {
  // if only 1 disk, make the move and return
  if (n === 1) {
    console.log(`Move disk 1 from peg ${frompeg} to peg ${topeg}`);
    return;
  }
  // move top n-1 disks from A to B, using C as auxiliary
  TowerOfHanoi(n - 1, frompeg, auxpeg, topeg);
  // move remaining disks from A to C
  console.log(`Move disk from peg ${frompeg} to peg ${topeg}`);
  // move top n-1 disks from B to C, using A as auxiliary
  TowerOfHanoi(n - 1, auxpeg, frompeg, topeg);
}
