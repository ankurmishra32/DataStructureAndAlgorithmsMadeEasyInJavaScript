// Deleting the First Node in a Circular Linked List
function DeleteFrontNodeFromCLL(headNode) {
  if (!headNode) {
    console.error('List Empty');
    return null;
  }
  if (headNode.getNext() === headNode) {
    return null;
  }
  let currentNode = headNode;
  while (currentNode.getNext() !== headNode) {
    currentNode = currentNode.getNext();
  }
  const newHead = headNode.getNext();
  currentNode.setNext(newHead);
  return newHead;
}

export default DeleteFrontNodeFromCLL;
