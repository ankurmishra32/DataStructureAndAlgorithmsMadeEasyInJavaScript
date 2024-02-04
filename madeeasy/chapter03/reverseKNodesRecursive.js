// Problem-39 For a given K value (K>0) reverse blocks of K nodes in a list.
// Recursive version
function reverseKNodesRecursive(head, K) {
  let current = head;
  let next = null;
  let prev = null;
  let count = K;
  // Reverse K nodes
  while (current && count > 0) {
    next = current.getNext();
    current.setNext(prev);
    prev = current;
    current = next;
    count--;
  }
  // Now next points to K+1 th node, returns the pointer to the head node
  if (next !== null) {
    head.setNext(reverseKNodesRecursive(next, K));
  } // return head node
  return prev;
}
