import ListLength from './listLength';

// Problem-2 Find nth node from the end of Linked List
// Brute-Force Approach

function nThNodeFromEnd(headNode, position) {
  const length = ListLength(headNode);
  if ((length < position) || (length < 1)) {
    console.error('Fewer no of nodes in the list');
    return;
  }
  if (length === position) {
    console.log('nTh node from end is ', headNode);
    return;
  }
  nThNodeFromEnd(headNode.getNext(), position);
}
