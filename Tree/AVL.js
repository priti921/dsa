class Node {
  constructor(value) {
    this.value = value;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  // Get the height of a node
  getHeight(node) {
    if (node === null) return 0;
    return node.height;
  }

  // Get the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Update the height of a node
  updateHeight(node) {
    if (node === null) return;
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Perform a right rotation
  rotateRight(node) {
    const newRoot = node.left;
    const temp = newRoot.right;

    newRoot.right = node;
    node.left = temp;

    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  // Perform a left rotation
  rotateLeft(node) {
    const newRoot = node.right;
    const temp = newRoot.left;

    newRoot.left = node;
    node.right = temp;

    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  // Insert a value into the AVL tree
  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  // Recursive function to insert a value into the AVL tree
  insertNode(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      // Duplicate values are not allowed in this implementation
      return node;
    }

    this.updateHeight(node);

    const balanceFactor = this.getBalanceFactor(node);

    // Left-Left case
    if (balanceFactor > 1 && value < node.left.value) {
      return this.rotateRight(node);
    }

    // Right-Right case
    if (balanceFactor < -1 && value > node.right.value) {
      return this.rotateLeft(node);
    }

    // Left-Right case
    if (balanceFactor > 1 && value > node.left.value) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    // Right-Left case
    if (balanceFactor < -1 && value < node.right.value) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  // Inorder traversal of the AVL tree
  inorder() {
    this.inorderHelper(this.root);
  }

  // Recursive function to perform inorder traversal
  inorderHelper(node) {
    if (node === null) return;

    this.inorderHelper(node.left);
    console.log(node.value);
    this.inorderHelper(node.right);
  }
}
