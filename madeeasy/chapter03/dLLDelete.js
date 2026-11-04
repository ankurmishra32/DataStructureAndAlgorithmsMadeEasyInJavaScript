import ListLength from './listLength.js';

// Deleting a node in Doubly Linked List
function DLLDelete(headNode, position) {
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
    const newHead = headNode.getNext();
    if (newHead) {
      newHead.setPrevious(null);
    }
    return newHead;
  }
  let previousNode = headNode;
  let count = 1;
  while (count < position - 1) {
    previousNode = previousNode.getNext();
    count++;
  }
  const currentNode = previousNode.getNext();
  const laterNode = currentNode.getNext();
  previousNode.setNext(laterNode);
  if (laterNode) {
    laterNode.setPrevious(previousNode);
  }
  return headNode;
}

export default DLLDelete;
