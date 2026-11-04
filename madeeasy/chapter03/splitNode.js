// Problem-36 Split a Circular Linked List into two equal parts. If the numbers of nodes in the list are odd
// then make first list one node extra than second one.
// Use namespace split, which must cointains head1 and head2 in it. (i.e. var split = {head1, head2};)
function splitNode(head, split) {
  if (!head) {
    split.head1 = null;
    split.head2 = null;
    return split;
  }
  if (head.getNext() === head) {
    split.head1 = head;
    split.head2 = null;
    head.setNext(head);
    return split;
  }
  let slowPtr = head;
  let fastPtr = head;
  /* If there are odd nodes in circular list then fastPtr.next become head and for even nodes, fastPtr.next.next become head */
  while (fastPtr.getNext() !== head && fastPtr.getNext().getNext() !== head) {
    fastPtr = fastPtr.getNext().getNext();
    slowPtr = slowPtr.getNext();
  }
  /* If there are even nodes, move fastPtr */
  if (fastPtr.getNext().getNext() === head) {
    fastPtr = fastPtr.getNext();
  }
  /* Set the head of first half */
  split.head1 = head;
  /* Set the head of second half */
  split.head2 = slowPtr.getNext();
  /* Make both list circular */
  fastPtr.setNext(split.head2);
  slowPtr.setNext(split.head1);
  return split;
}

export default splitNode;
