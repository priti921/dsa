class TreeNode {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
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
      this.searchNode(value, this.root);
    }
  }

  searchNode(value, node) {
    if (!node) {
      return null;
    } else if (node.value === value) {
      return node;
    } else if (value < node.value) {
      this.searchNode(value, node.left);
    } else {
      this.searchNode(value, node.right);
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
      return null;
    } else if (node.value === value) {
      this.removeNode(node);
    } else if (value < node.value) {
      this.deleteNode(value, node.left);
    } else {
      this.deleteNode(value, node.right);
    }
  }

  removeNode(node) {
    //first
    if (!node.left && !node.right) {
      if (node === this.root) {
        this.root = null;
      } else if (node.parent.left === node) {
        node.parent.left = null;
      } else {
        node.parent.right = null;
      }
    }
    //second
    else if (!node.left) {
      if (node === this.root) {
        this.root = node.right;
      } else if (node.parent.left === node) {
        node.parent.left = node.right;
      } else {
        node.parent.right = node.right;
      }
    }
    //third
    else if (!node.right) {
      if (node === this.root) {
        this.root = node.left;
      } else if (node.parent.left === node) {
        node.parent.left = node.left;
      } else {
        node.parent.right = node.left;
      }
    }
    //fourth
    else {
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
    if (!node.left) {
      return node;
    } else {
      return this.findSuccessor(node.left);
    }
  }
}
