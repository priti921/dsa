class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(newNode, this.root);
    }
  }

  insertNode(newNode, node) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(newNode, node.left);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(newNode, node.right);
      }
    }
    newNode.parent = node;
  }

  search(value) {
    if (!this.root) {
      return null;
    } else {
      return this.searchNode(value, this.root);
    }
  }

  searchNode(value, node) {
    if (!node) {
      return null;
    } else if (node.value === value) {
      return node;
    } else if (value < node.value) {
      return this.searchNode(value, node.left);
    } else {
      return this.searchNode(value, node.right);
    }
  }

  delete(value) {
    if (!this.root) {
      return null;
    } else {
      this.deleteNode(value, this.root);
    }
  }

  deleteNode(value, node) {
    if (!node) {
      return;
    } else if (node.value === value) {
      this.removeNode(node);
    } else if (value < node.value) {
      this.deleteNode(value, value.left);
    } else {
      this.deleteNode(value, value.right);
    }
  }

  removeNode(node) {
    if (node.left === null && node.right === null) {
      if (node === this.root) {
        this.root = null;
      } else if (node.parent.left === node) {
        node.parent.left = null;
      } else {
        node.parent.right = null;
      }
    } else if (node.left === null) {
      if (node === this.root) {
        this.root = node.right;
      } else if (node.parent.left === node) {
        node.parent.left = node.right;
      } else {
        node.parent.right = node.right;
      }
      node.right.parent = node.parent;
    } else if (node.right === null) {
      if (node === this.root) {
        this.root = node.left;
      } else if (node.parent.left === node) {
        node.parent.left = node.left;
      } else {
        node.parent.right = node.left;
      }
      node.left.parent = node.parent;
    } else {
      const successor = this.findSuccessor(node.right);
      if (node === this.root) {
        this.root = successor;
      } else if (node.parent.left === node) {
        node.parent.left = successor;
      } else {
        node.parent.right = successor;
      }
      successor.parent = node.parent;
      successor.left = node.left;
      node.left.parent = successor;
      if (node.right !== successor) {
        successor.right = node.right;
        node.right.parent = successor;
      }
    }
  }

  findSuccessor(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findSuccessor(node.left);
    }
  }

  inOrderTraversal(node = this.root, result = []) {
    while (node) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }

  preOrderTraversal(node = this.root, result = []) {
    while (node) {
      result.push(node.value);
      this.preOrderTraversal(node.left, result);
      this.preOrderTraversal(node.right, result);
    }
  }

  postOrderTraversal(node = this.root, result = []) {
    while (node) {
      this.postOrderTraversal(node.left, result);
      this.postOrderTraversal(node.right, result);
      result.push(node.value);
    }
  }
}
