// Problem-24 How will you find the middle of the linked list?
// Brute-Force Approach
function findMiddleBruteForce(headNode) {
  let temp;
  let count1 = 0;
  let count2 = 0;
  while (headNode && headNode.getNext()) {
    count1++;
    temp = headNode.getNext();
    while (temp) {
      temp = temp.getNext();
      count2++;
    }
    if (count1 >= count2) {
      return headNode;
    }
    headNode = headNode.getNext();
    count2 = 0;
  }
  return null;
}
