import ListNode from './linkList.js';

// Iterative version
function reversePairIterative(head) {
  let prev;
  let curr;
  let tmp;
  const temp = new ListNode();
  temp.setNext(head);
  prev = temp;
  curr = head;
  while (curr && curr.getNext()) {
    tmp = curr.getNext().getNext();
    curr.getNext().setNext(prev.getNext());
    prev.setNext(curr.getNext());
    curr.setNext(tmp);
    prev = curr;
    curr = prev.getNext();
  }
  return temp.getNext();
}
export default reversePairIterative;
