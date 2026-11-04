import ListNode from '../chapter03/linkList.js';

// Linked List Implementation of Queue
function LLQueue() {
  let length = 0;
  let frontNode = null;
  let rearNode = null;
  return {
    isEmpty() {
      return (frontNode === null);
    },
    enQueue(data) {
      const newNode = new ListNode();
      newNode.setData(data);
      if (rearNode != null) {
        rearNode.setNext(newNode);
      }
      rearNode = newNode;
      if (frontNode === null) {
        frontNode = rearNode;
      }
      length++;
    },
    deQueue() {
      if (this.isEmpty()) {
        console.error('Queue Empty');
        return;
      }
      const data = frontNode.getData();
      frontNode = frontNode.getNext();
      length--;
      return data;
    },
    getQueueSize() {
      return length;
    },
  };
}

export default LLQueue;
