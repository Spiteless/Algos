import BinaryTree, { Node } from './binaryTree';

describe('BinaryTree', () => {
  test('A tree can be instantiated with a root node', () => {
    const tree = new BinaryTree(new Node('value'));
    expect(tree).toBeInstanceOf(BinaryTree);
  });
  test('A tree\'s root node can be accessed', () => {
    const root = new Node('root');
    const tree = new BinaryTree(root);
    expect(tree.root).toBe(root);
  });
  test('rejects rootless instantiation', () => {
    expect(() => {new BinaryTree}).toThrowError('BinaryTrees must have a root node');
  });
  test('rejects non type Node roots', () => {
    expect(() => {new BinaryTree({})}).toThrowError('Root of BinaryTree must be an instance of Node');
  });
  test('root cannot be set to a non node after instantiation', () => {
    const tree = new BinaryTree(new Node('value'));
    expect(() => {tree.root = 'a root'}).toThrowError('Root of BinaryTree must be an instance of Node');
  });
  test('root cannot be set to null (a falsy value) after instantiation', () => {
    const tree = new BinaryTree(new Node('value'));
    expect(() => {tree.root = null}).toThrowError('BinaryTrees must have a root node');
  });
});

describe('Node', () => {
  test('Can be initialized with a value', () => {
    const node = new Node('value');
    expect(node.value).toBe('value');
  });
  test('Must be initialized with a value', () => {
    expect(() => new Node()).toThrowError('Node must have a value');
  });
  test('Can be initialized with a parent', () => {
    const parent = new Node('parent');
    const node = new Node('value', parent);
    expect(node.parent).toBe(parent);
  });
  test('Can be initialized with children', () => {});
});