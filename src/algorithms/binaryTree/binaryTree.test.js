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
  describe('initialization', () => {
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
    test('Cannot be initialized with children as a non array value', () => {
      expect(() => {new Node('value', null, 'non array!');}).toThrowError('Children must be an array');
    });
    test('Cannot be initialized with non Node children', () => {
      const childNode = new Node('a');
      expect(() => {new Node('value', null, ['a', childNode]);}).toThrowError('Children must all be instances of Node');
      expect(() => {new Node('value', null, [childNode, 'a']);}).toThrowError('Children must all be instances of Node');
    });
    test('Can be initialized with children as an empty array', () => {
      const children = [];
      const node = new Node('value', null, children);
      expect(node.children).toBe(children);
    });
    test('Can be initialized with children as an array of Nodes', () => {
      const children = [new Node('a'), new Node('b')];
      const node = new Node('value', null, children);
      expect(node.children).toBe(children);
    });
  });
  describe('node.isChild', () => {
    it('returns true if the argument is a child of the node', () => {
      const child = new Node('child');
      const parent = new Node('parent', null, [child]);
      expect(parent.isChild(child)).toBe(true);
    });
    it('returns false if the argument is not a child of the node', () => {
      const child = new Node('child');
      const parent = new Node('parent', null, [child]);
      const notChild = new Node('not child');
      expect(parent.isChild(notChild)).toBe(false);
    });
  });
  describe('node.addChild', () => {
    let parent;
    let child;
    beforeEach(() => {
      parent = new Node('value');
      child = new Node('child');
    });
    it('cannot be passed a non node', () => {
      expect(() => parent.addChild('not a node')).toThrowError('Child must be an instance of Node')
    });
    it('requires at least 1 argument', () => {
      expect(() => parent.addChild()).toThrowError('Child must be an instance of Node');
    });
    it('adds the node to the end of its child list by default', () => {
      const nodeWithChildren = new Node('value', null, [new Node('a'), new Node('b')]);
      nodeWithChildren.addChild(child);
      expect(nodeWithChildren.children[2]).toBe(child);
    });
    it('sets the parent of the child to itself', () => {
      parent.addChild(child);
      expect(child.parent).toBe(parent)
    });
    it('errors if the second argument is not a number >= -1', () => {
      expect(() => parent.addChild(child, -10)).toThrowError('Index must be a vaild index or -1');
    });
    it('errors if the second argument is larger than the length of the children', () => {
      expect(() => parent.addChild(child, parent.children.length + 1)).toThrowError('Index must be a vaild index or -1');
    });
    it('places the child at the index of the second argument', () => {
      const nodeWithChildren = new Node('value', null, [new Node('a'), new Node('b')]);
      nodeWithChildren.addChild(child, 1);
      expect(nodeWithChildren.children[1]).toBe(child);
    });
    it('maintains placement of other nodes in ', () => {
      const node1 = new Node('a');
      const node2 = new Node('b');
      const nodeWithChildren = new Node('value', null, [node1, node2]);
      nodeWithChildren.addChild(child, 1);
      expect(nodeWithChildren.children[0]).toBe(node1);
      expect(nodeWithChildren.children[2]).toBe(node2);
    });
    it('does not change the length of children if node is already a child', () => {
      const nodeWithChildren = new Node('value', null, [child]);
      nodeWithChildren.addChild(child);
      expect(nodeWithChildren.children.length).toBe(1);
    });
    it('moves the index of the child if it is already a child of the node', () => {
      const nodeWithChildren = new Node('value', null, [child, new Node('a'), new Node('b'), new Node('c')]);
      nodeWithChildren.addChild(child, 2);
      expect(nodeWithChildren.children[2]).toBe(child);
    });
  });
  xdescribe('getters and setters', () => {});
  // how much do I actually want to control this? is it better to let the actual array be passed
  xtest('Children array cannot be mutated', () => {})
});