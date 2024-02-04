// Problem-6 Check whether the given linked list is either NULL-terminated or ends in cycle
// There is one way with hash value (Defined in Problem-7) and an efficient way (defined in Problem-9)
function isLinkedListContainsLoop(headNode) {
  let flag = false;
  let slowPtr = headNode;
  let fastPtr = headNode;
  while (slowPtr && fastPtr) {
    fastPtr = fastPtr.getNext();
    if (!fastPtr) {
      break;
    }
    if (slowPtr === fastPtr) {
      flag = true;
      break;
    }
    fastPtr = fastPtr.getNext();
    if (slowPtr === fastPtr) {
      flag = true;
      break;
    }
    slowPtr = slowPtr.getNext();
  }
  return flag;
}
