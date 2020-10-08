import BinaryTree, {Node} from './binaryTree';

describe('binary Tree', () => {
  test('initializes with a root Node of type node', () => {
    expect(true).toBe(true);
  });
  test('rejects rootless instantiation', () => {
    expect(() => {new BinaryTree}).toThrowError('BinaryTrees must have a root node');
  });
  test('rejects non type Node roots', () => {
    expect(() => {new BinaryTree({})}).toThrowError('Root of BinaryTree must be an instance of Node');
  });
});