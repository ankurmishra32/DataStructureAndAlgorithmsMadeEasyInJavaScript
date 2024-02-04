// 3.8 Single Linked Lists
class CLLNode {
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

export default CLLNode;
