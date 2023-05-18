class minHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)] < this.heap.length;
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)] < this.heap.length;
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(idx1, idx2) {
    const temp = this.heap[idx1];
    this.heap[idx1] = this.heap[idx2];
    this.heap[idx2] = temp;
  }

  heapifyUp() {
    const index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      let parentIndex = this.getParentIndex(index);
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  heapifyDown() {
    const index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChildIndex(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }

      index = smallerChildIndex;
    }
  }
}
