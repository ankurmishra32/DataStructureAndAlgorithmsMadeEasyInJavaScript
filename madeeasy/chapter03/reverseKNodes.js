// Iterative version
function reverseKNodes(head, K) {
  let count;
  let tail;
  let next;
  let current = head;
  let prevTail = null;
  let prevCurrent = head;
  while (current) {
    // loop for reversing K nodes
    count = K;
    tail = null;
    while (current && count > 0) {
      next = current.getNext();
      current.setNext(tail);
      tail = current;
      current = next;
      count--;
    }
    // reversed K Nodes
    if (prevTail) {
      // Link this set and previous set
      prevTail.setNext(tail);
    } else {
      // We just reversed first set of K nodes, update head point to the Kth Node
      head = tail;
    }
    // save the last node after reverse since we need to connect to the next set.
    prevTail = prevCurrent;
    // Save the current node, which will become the last node after reverse
    prevCurrent = current;
  }
  return head;
}
