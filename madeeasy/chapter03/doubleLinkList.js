// 3.7 Doubly Linked Lists
class DLLNode {
  constructor() {
    this.data = null;
    this.next = null;
    this.previous = null;
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

  setPrevious(node) {
    this.previous = node;
  }

  getPrevious() {
    return this.previous;
  }
}

export default DLLNode;
