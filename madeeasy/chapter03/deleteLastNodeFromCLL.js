// Deleting the Last Node in a Circular Linked List
function DeleteLastNodeFromCLL(headNode) {
  if (!headNode) {
    console.error('List Empty');
    return null;
  }
  if (headNode.getNext() === headNode) {
    return null;
  }
  let previousNode = headNode;
  let currentNode = headNode.getNext();
  while (currentNode.getNext() !== headNode) {
    previousNode = currentNode;
    currentNode = currentNode.getNext();
  }
  previousNode.setNext(headNode);
  return headNode;
}

export default DeleteLastNodeFromCLL;
