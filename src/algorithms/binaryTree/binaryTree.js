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

  // could make this iterate through the array and run addChild. notably, this would mean that it wouldnt use the original array
  set children (newChildren) {
    if (!Array.isArray(newChildren)) {
      throw new Error('Children must be an array');
    } else if (!newChildren.every(node => node instanceof Node)) {
      throw new Error('Children must all be instances of Node')
    }
    this._children = newChildren;
  }

  // if i actually want to not allow it to be mutated i would have to return a new array
  get children () {
    return this._children;
  }

  // this can be used to validate that an array contains the same items as the node's children (in the same order)
  hasChildren (children) {

  }

  addChild (node) {

  }
}