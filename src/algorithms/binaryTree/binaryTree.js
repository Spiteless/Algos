// using https://medium.com/techie-delight/binary-tree-interview-questions-and-practice-problems-439df7e5ea1f for functionalities

export default class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  get root () {
    return this._root;
  }

  set root(newRoot) {
    if (!newRoot) {
      throw new Error('BinaryTrees must have a root node');
    } else if (!(newRoot instanceof Node)) {
      throw new Error('Root of BinaryTree must be an instance of Node');
    }
    this._root = newRoot
  }
}

export class Node {
  constructor (value, parent, children = []) {
    this.value = value;
    this.children = children;
    this.parent = parent;
  }

  set value (newValue) {
    if (typeof newValue === 'undefined') {
      throw new Error('Node value cannot be undefined');
    }
    this._value = newValue;
  }

  get value () {
    return this._value;
  }

  set parent (newParent) {
    if (newParent !== undefined && newParent !== null && !(newParent instanceof Node)) {
      throw new Error('Node parent must be an instance of Node');
    }
    this._parent = newParent;
  }

  get parent () {
    if (this._parent instanceof Node) {
      return this._parent;
    }
    return null;
  }

}