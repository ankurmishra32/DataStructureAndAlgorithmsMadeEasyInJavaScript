import ListNode from '../chapter03/linkList.js';

// Linked list implementation of Stack
function LLStack() {
  let temp;
  let llNode;
  let headNode = new ListNode();
  let size = 0;

  return {
    top() {
      if (size === 0) {
        return null;
      }
      return headNode.getData();
    },
    isEmpty() {
      return size === 0;
    },
    deleteStack() {
      headNode = null;
      size = 0;
    },
    pushInStack(data) {
      if (size === 0) {
        if (!headNode) {
          headNode = new ListNode();
        }
        headNode.setData(data);
        headNode.setNext(null);
      } else {
        llNode = new ListNode();
        llNode.setData(data);
        llNode.setNext(headNode);
        headNode = llNode;
      }
      size++;
    },
    popFromStack() {
      if (size === 0) {
        console.error('Stack is Empty');
        return;
      }
      temp = headNode.getData();
      headNode = headNode.getNext();
      size--;
      return temp;
    },
  };
}

export default LLStack;
