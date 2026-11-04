import ListLength from './listLength.js';

// Deleting a node in Singly Linked List
function DeleteNodeFromLinkedList(headNode, position) {
  if (!headNode) {
    console.error('List Empty');
    return null;
  }
  const size = ListLength(headNode);
  if (position > size || position < 1) {
    console.error(`Position of node to delete is invalid. The valid inputs are 1 to ${size}`);
    return headNode;
  }
  if (position === 1) { // deletion the node in the beginning
    return headNode.getNext();
  }
  let previousNode = headNode;
  let count = 1;
  while (count < position - 1) {
    previousNode = previousNode.getNext();
    count++;
  }
  const currentNode = previousNode.getNext();
  previousNode.setNext(currentNode.getNext());
  return headNode;
}

export default DeleteNodeFromLinkedList;
