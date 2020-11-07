// using https://medium.com/techie-delight/binary-tree-interview-questions-and-practice-problems-439df7e5ea1f for functionalities
// I am aware that this is obnoxiously over-engineered.

const _root = Symbol('root');
export default class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  get root () {
    return this[_root];
  }

  set root(newRoot) {
    if (!newRoot) {
      throw new Error('BinaryTrees must have a root node');
    } else if (!(newRoot instanceof Node)) {
      throw new Error('Root of BinaryTree must be an instance of Node');
    }
    this[_root] = newRoot
  }
}

const _value = Symbol('value');
const _children = Symbol('children');
const _parent = Symbol('parent');
export class Node {
  constructor (value, parent, children = []) {
    this.value = value;
    // might not need to do these setters if no data. if they don't get values and the getters deal with null case then it's just inefficient.
    this.parent = parent;
    this.children = children;
  }

  set value (newValue) {
    if (typeof newValue === 'undefined') {
      throw new Error('Node value cannot be undefined');
    }
    this[_value] = newValue;
  }

  get value () {
    return this[_value];
  }

  set parent (newParent) {
    if (newParent !== undefined && newParent !== null && !(newParent instanceof Node)) {
      throw new Error('Node parent must be an instance of Node');
    }
    this[_parent] = newParent;
    if (newParent && !newParent.isChild(this)) {
      newParent.addChild(this);
    }

  }

  get parent () {
    if (this[_parent] instanceof Node) {
      return this[_parent];
    }
    return null;
  }

  set children (newChildren) {
    if (!Array.isArray(newChildren)) {
      throw new Error('Children must be an array');
    } else if (!newChildren.every(node => node instanceof Node)) {
      throw new Error('Children must all be instances of Node')
    }
    this.clearChildren();
    newChildren.forEach(child => this.addChild(child));
  }

  get children () {
    return Array.from(this[_children] || []);
  }

  clearChildren () {
    this.children && this.children.forEach(child => this.removeChild(child));
    this[_children] = [];
  }

  isChild (node) {
    return this.children.includes(node);
  }

  removeChild (child) {
    const childIndex = this.children.indexOf(child);
    if (childIndex >= 0) {
      child.parent = null;
      this[_children].splice(childIndex, 1);
      return true;
    }
    return false;
  }

  addChild (child, index=-1) {
    if (!(child instanceof Node)) {
      throw new Error('Child must be an instance of Node');
    } else if(typeof index !== 'number' || index < -1 || index > this.children.length) {
      throw new Error('Index must be a vaild index or -1');
    } else if (child === this) {
      throw new Error('Node cannot be a child to itself')
    }
    if (this.isChild(child)) {
      this[_children].splice(this.children.indexOf(child), 1);
    }
    index === -1 ? this[_children].push(child) : this[_children].splice(index, 0, child);
    if(child.parent !== this) {
      child.parent = this;
    }
  }
}