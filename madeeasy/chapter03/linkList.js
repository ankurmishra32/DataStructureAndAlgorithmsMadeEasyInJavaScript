// 3.6 Single Linked Lists
class ListNode {
  constructor() {
    this.data = null;
    this.next = null;
  }

  setData(val) {
    this.data = val;
  }

  getData() {
    return this.data;
  }

  setNext(node) {
    this.next = node;
  }

  getNext() {
    return this.next;
  }
}

export default ListNode;
