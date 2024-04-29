class Node {
  constructor(value) {
    this.head = new Node(value); // head 에 시작하는 Node를 연결
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  dequeue() {
    if (this.head === null) {
      return null;
    } else {
      let frontNode = this.head;
      this.head = frontNode.next;
      return frontNode;
    }
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
}
