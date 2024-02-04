// Problem-16 Reverse a singly linked list
function reserveList(headNode) {
  let temp = null;
  let nextNode = null;
  while (headNode) {
    nextNode = headNode.getNext();
    headNode.setNext(temp);
    temp = headNode;
    headNode = nextNode;
  }
  headNode = temp;
}
