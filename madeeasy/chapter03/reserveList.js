// Problem-16 Reverse a singly linked list
function reserveList(headNode) {
  let temp = null;
  let nextNode = null;
  let currentNode = headNode;
  while (currentNode) {
    nextNode = currentNode.getNext();
    currentNode.setNext(temp);
    temp = currentNode;
    currentNode = nextNode;
  }
  return temp;
}

export default reserveList;
