// Deleting the Last Node in a Circular Linked List
function DeleteLastNodeFromCLL(headNode) {
  let temp = headNode;
  let currentNode = headNode;
  if (!headNode) {
    console.error('List Empty');
    return;
  }
  while (currentNode.getNext() !== headNode) {
    temp = currentNode;
    currentNode = currentNode.getNext();
  }
  currentNode = null;
  temp.setNext(headNode);
}
