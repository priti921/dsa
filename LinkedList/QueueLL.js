class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class queue {
  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  enqueue(item) {
    const newnode = new Node(item);
    if (!this.head) {
      this.head = newnode;
    } else {
      let currentnode = this.head;
      while (currentnode.next) {
        currentnode = currentnode.next;
      }
      currentnode.next = newnode;
    }
    this.length++;
    return this;
  }
  deque() {
    if (!this.head) {
      throw new Error("list is empty!");
    } else {
      this.head = this.head.next;
      this.length--;
    }
    return this;
  }
  peek() {
    if (!this.head) {
      throw new error("list is empty");
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

let newqueue = new queue();

newqueue.enqueue("a");
newqueue.enqueue("b");
newqueue.enqueue("c").enqueue("D").enqueue("E");
console.log(newqueue.print());

// [ test passed ]

// newqueue.deque();
// console.log(newqueue.print());
//
// newqueue.deque();
// console.log(newqueue.print());
//
// newqueue.deque();
// console.log(newqueue.print());
//
// newqueue.deque();
// console.log(newqueue.print());
//
//[ test passed]
//
console.log(newqueue.peek());
