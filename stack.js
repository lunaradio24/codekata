class Node {
  constructor(value) {
    this.head = new Node(value); // head 에 시작하는 Node를 연결
  }
}

//stack: LIFO(Last In First Out)
class Stack {
  constructor() {
    this.head = null;
  }

  push() {}

  pop() {
    if (this.head === null) {
      return null;
    } else {
      let topNode = this.head;
      this.head = topNode.next;
      return topNode;
    }
  }
}
