// Problem-32 Reverse the linked list in pairs.
// Recursive version
function reversePairRecursive(head) {
  if (!head || !head.getNext()) {
    return head;
  }
  const curr = head.getNext();
  head.setNext(reversePairRecursive(curr.getNext()));
  curr.setNext(head);
  return curr;
}
