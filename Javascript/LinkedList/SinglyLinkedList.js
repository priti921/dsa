class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  prepend(item) {
    const newNode = new Node(item);
    if (!this.head) {
      this.head = newNode;
    } else {
      const currentHead = this.head;
      this.head = newNode;
      newNode.next = currentHead;
    }
    this.length++;
  }

  insertAt(item, idx) {
    const newNode = new Node(item);
    // error case
    if (idx < 0 || idx > this.length) {
      throw new Error(`Index: ${idx} is out of memory bound`);
    }
    // insert
    if (idx === 0) {
      this.prepend(item);
    } else {
      let currentIndex = 0;
      let currentNode;
      while (currentIndex < idx - 1) {
        currentNode = this.head;
        this.head = currentNode?.next;
        currentIndex++;
      }
      newNode.next = currentNode?.next;
      currentNode && (currentNode.next = newNode);
    }
    this.length++;
  }

  append(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
    } else {
      let curr = this.head
      while (curr.next) {
        curr = curr.next
      }
      curr.next = newNode
    }
    this.length++
    return this
  }

  remove(item) {
    if (!this.head) {
      return undefined;
    }

    if (this.head.value == item) {
      this.head = this.head.next;
      this.length--;
      return item;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === item) {
        // skip the node
        const removedNode = currentNode.next;
        currentNode.next = removedNode.next;
        this.length--;
        return removedNode.value;
      }
      // go to the next node
      currentNode && (currentNode = currentNode.next);
    }
    return undefined;
  }

  get(idx) {
    if (idx < 0 || idx > this.length) {
      return undefined;
    }

    if (!this.head) {
      return undefined;
    }

    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex < idx) {
      currentNode.next && (currentNode = currentNode.next);
      currentIndex++;
    }
    return currentNode.value;
  }

  find(callback = undefined) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  removeAt(idx) {
    if (idx < 0 || idx > this.length) {
      return undefined;
    }

    if (!this.head) {
      return undefined;
    }

    let currentNode = this.head;
    let prevNode;
    let currentIndex = 0;

    while (currentIndex < idx - 1) {
      prevNode = currentNode;
      currentNode.next && (currentNode = currentNode.next);
      currentIndex++;
    }

    prevNode && (prevNode.next = currentNode.next);
    return currentNode.value;
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  //print the list
  print() {
    //get the current node
    let currentNode = this.head;
    //write out head at start
    process.stdout.write("HEAD->");
    //loop and write the current node element then current node to next node
    while (currentNode) {
      process.stdout.write(currentNode.value + "->");
      currentNode = currentNode.next;
    }
    //last node
    console.log("NULL");
  }
}

// const linkedList = new SinglyLinkedList();
//
// console.log("Initial linked list:");
// console.log(linkedList); // Output: SinglyLinkedList { head: undefined, length: 0 }
//
// // Test prepend
// linkedList.prepend("item1");
// linkedList.prepend("item2");
// linkedList.prepend("item3");
//
// console.log("After prepend:");
// console.log(linkedList); // Output: SinglyLinkedList { head: Node { value: 'item3', next: Node { value: 'item2', next: [Node] } }, length: 3 }
// linkedList.print();
//
// // Test insertAt
// linkedList.insertAt("item4", 1);
// linkedList.insertAt("item5", 0);
// linkedList.insertAt("item6", 5);
//
// console.log("After insertAt:");
// console.log(linkedList); // Output: SinglyLinkedList { head: Node { value: 'item5', next: Node { value: 'item3', next: [Node] } }, length: 6 }
// linkedList.print();
//
// // Test append
// linkedList.append("item7");
// linkedList.append("item8");
// linkedList.append("item9");
//
// console.log("After append:");
// console.log(linkedList); // Output: SinglyLinkedList { head: Node { value: 'item5', next: Node { value: 'item3', next: [Node] } }, length: 9 }
// linkedList.print();
//
// // Test remove
// const removedItem1 = linkedList.remove("item4");
// const removedItem2 = linkedList.remove("item9");
// const removedItem3 = linkedList.remove("item10");
//
// console.log("After remove:");
// console.log(linkedList); // Output: SinglyLinkedList { head: Node { value: 'item5', next: Node { value: 'item3', next: [Node] } }, length: 7 }
// console.log("Removed item1: " + removedItem1); // Output: Removed item1: item4
// console.log("Removed item2: " + removedItem2); // Output: Removed item2: item9
// console.log("Removed item3: " + removedItem3); // Output: Removed item3: undefined
// linkedList.print();
//
// // Test get
// const item1 = linkedList.get(0);
// const item2 = linkedList.get(3);
// const item3 = linkedList.get(6);
// const item4 = linkedList.get(10);
//
// console.log("Get items:");
// console.log("Item 1: " + item1); // Output: Item 1: item5
// console.log("Item 2: " + item2); // Output: Item 2: item7
// console.log("Item 3: " + item3); // Output: Item 3: undefined
// console.log("Item 4: " + item4); // Output: Item 4: undefined
// linkedList.print();
//
// // Test removeAt
// const removedItemAtIndex1 = linkedList.removeAt(1);
// const removedItemAtIndex2 = linkedList.removeAt(5);
// const removedItemAtIndex3 = linkedList.removeAt(10);
//
// console.log("After removeAt:");
// console.log(linkedList); // Output: SinglyLinkedList { head: Node { value: 'item5', next: Node { value: 'item7', next: [Node] } }, length: 5 }
// console.log("Removed item at index 1: " + removedItemAtIndex1); // Output: Removed item at index 1: item3
// console.log("Removed item at index 5: " + removedItemAtIndex2); // Output: Removed item at index 5: undefined
// console.log("Removed item at index 10: " + removedItemAtIndex3); // Output: Removed item at index 10: undefined
// linkedList.print();

module.exports = {
  SinglyLinkedList,
  Node,
};
