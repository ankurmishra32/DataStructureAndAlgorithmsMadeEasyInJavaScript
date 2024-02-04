// Deleting the First Node in a Circular Linked List
function DeleteFrontNodeFromCLL(headNode) {
  let currentNode = headNode;
  if (!headNode) {
    console.error('List Empty');
    return;
  }
  while (currentNode.getNext() !== headNode) {
    currentNode = currentNode.getNext();
  }
  currentNode.setNext(headNode.getNext());
  headNode = headNode.getNext();
}
