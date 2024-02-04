import ListNode from './linkList';

// Problem-31 Given two sorted linked lists, we need to merge them into the third list in sorted order
function mergeList(headOfFirst, headOfSecond) {
  let temp = new ListNode();
  if (!headOfFirst) {
    return headOfSecond;
  }
  if (!headOfSecond) {
    return headOfFirst;
  }
  if (headOfFirst.getData() <= headOfSecond.getData()) {
    temp = headOfFirst;
    temp.setNext(mergeList(headOfFirst.getNext(), headOfSecond));
  } else {
    temp = headOfSecond;
    temp.setNext(mergeList(headOfFirst, headOfSecond.getNext()));
  }
  return temp;
}
