// using https://medium.com/techie-delight/binary-tree-interview-questions-and-practice-problems-439df7e5ea1f for functionalities

export default class BinaryTree {
  constructor(root) {
    this._validate(root);
    this._rootNode = root;
  }

  _validate (root) {
    if (!root) {
      throw new Error('BinaryTrees must have a root node');
    } else if (!(root instanceof Node)) {
      throw new Error('Root of BinaryTree must be an instance of Node');
    }
  }
}

export class Node {
  constructor (value) {
    this.value = value;
    this.children = [];
  }
}