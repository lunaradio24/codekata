class Node {
  constructor(value) {
    this.head = new Node(value); // head 에 시작하는 Node를 연결
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.nodeCount = 1;
  }

  append(value) {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = new Node(value);
    this.nodeCount++;
  }

  getNode(index) {
    // index가 0 이상 전체 길이 미만인 경우
    if (0 <= index && index < this.nodeCount) {
      let node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      return node;
    }
    // index가 길이 이상인 경우
    else if (index >= this.nodeCount) {
      console.log("getNode에 입력한 index가 전체 node 개수보다 큽니다.");
    }
    // index가 0 미만인 경우
    else {
      console.log("유효하지 않은 index입니다.");
    }
  }

  addNode(index, value) {
    const newNode = new Node(value);
    // index가 0인 경우
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.nodeCount++;
    }
    // index가 0보다 크고 전체 길이보다 작은 경우
    else if (0 < index && index < this.nodeCount) {
      const prevNode = this.getNode(index - 1);
      const currNode = this.getNode(index);
      prevNode.next = newNode;
      newNode.next = currNode;
      this.nodeCount++;
    }
    // index가 길이 이상인 경우
    else if (index >= this.nodeCount) {
      console.log("getNode에 입력한 index가 전체 node 개수보다 큽니다.");
    }
    // index가 0 미만인 경우
    else {
      console.log("유효하지 않은 index입니다.");
    }
  }
}
