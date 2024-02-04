import ListNode from './linkList';
import ListLength from './listLength';

// Deleting a node in Singly Linked List
function DeleteNodeFromLinkedList(headNode, position) {
  let count = 1;
  let previousNode;
  let currentNode = new ListNode();
  const size = ListLength(headNode);
  if (position > size || position < 1) {
    console.error(`Position of node to delete is invalid. The valid inputs are 1 to ${size}`);
    return;
  }
  if (position === 1) { // deletion the node in the beginning
    currentNode = headNode.getNext();
    headNode = currentNode;
    return;
  }
  previousNode = headNode;
  while (count < position - 1) {
    previousNode = previousNode.getNext();
    count++;
  }
  currentNode = previousNode.getNext();
  previousNode.setNext(currentNode.getNext());
  currentNode = null;
}
