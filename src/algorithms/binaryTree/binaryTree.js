// using https://medium.com/techie-delight/binary-tree-interview-questions-and-practice-problems-439df7e5ea1f for functionalities

export default class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  get root () {
    return this._root;
  }

  set root(newRoot) {
    this._validate(newRoot);
    this._root = newRoot
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
  constructor (value, parent, children = []) {
    if (!value) {
      throw new Error('Node must have a value');
    }
    this.value = value;
    this.children = children;
    this.parent = parent;
  }

}