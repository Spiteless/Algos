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
  test('Can be initialized with a value of false', () => {
    const node = new Node(false);
    expect(node.value).toBe(false);
  });
  test('Can be initialized with a value of null', () => {
    const node = new Node(null);
    expect(node.value).toBe(null);
  });
  test('cannot be initialized with an undefined value', () => {
    expect(() => new Node()).toThrowError('Node value cannot be undefined');
  });
  test('Can be initialized with a parent of type Node', () => {
    const parent = new Node('parent');
    const node = new Node('value', parent);
    expect(node.parent).toBe(parent);
  });
  test('When initialized without a parent, parent property returns null', () => {
    const node = new Node('value');
    expect(node.parent).toBe(null);
  });
  test('When initialized with parent as null, parent property returns null', () => {
    const node = new Node('value', undefined);
    expect(node.parent).toBe(null);
  });
  test('When initialized with parent as undefined, parent property returns null', () => {
    const node = new Node('value', null);
    expect(node.parent).toBe(null);
  });
  test('cannot be initialized with a non Node, non null or undefined parent', () => {
    expect(() => {new Node('value', 'a parent');}).toThrowError('Node parent must be an instance of Node');
  });
  xtest('Can be initialized with children', () => {});
});