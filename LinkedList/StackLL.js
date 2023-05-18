class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(item) {
    const newNode = new Node(item);

    if (!this.head) {
      this.head = newNode;
    } else {
      let tempNode = this.head;
      this.head = newNode;
      newNode.next = tempNode;
    }
    this.length++;
    return this;
  }
  pop() {
    const tempNode = this.head;
    if (!this.head) {
      throw new Error("List is Empty!");
    } else {
      this.head = tempNode.next;
    }
    this.length--;
    return tempNode;
  }
  peek() {
    if (!this.head) {
      throw new Error("List is Empty!");
    } else {
      return this.head;
    }
  }

  print() {
    let list = "head-->";
    let currentnode = this.head;
    while (currentnode) {
      list += `${currentnode.value}-->`;
      currentnode = currentnode.next;
    }
    list += "end";

    return list;
  }
}

let newStack = new Stack();
newStack.push("A").push("B").push("C").push("D");
console.log(newStack.print());
newStack.pop();
console.log(newStack.print());
newStack.pop();
console.log(newStack.print());
console.log(newStack.peek());
