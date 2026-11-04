// Problem-24 How will you find the middle of the linked list?
// Brute-Force Approach
function findMiddleBruteForce(headNode) {
  if (!headNode) {
    return null;
  }
  let currentNode = headNode;
  let position = 0;
  while (currentNode) {
    position++;
    let remaining = 0;
    let temp = currentNode.getNext();
    while (temp) {
      remaining++;
      temp = temp.getNext();
    }
    if (position > remaining) {
      return currentNode;
    }
    currentNode = currentNode.getNext();
  }
  return null;
}

export default findMiddleBruteForce;
