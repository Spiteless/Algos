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
    test('can be initialized with a value of false', () => {
      const node = new Node(false);
      expect(node.value).toBe(false);
    });
    test('can be initialized with a value of null', () => {
      const node = new Node(null);
      expect(node.value).toBe(null);
    });
    test('cannot be initialized with an undefined value', () => {
      expect(() => new Node()).toThrowError('Node value cannot be undefined');
    });
    test('can be initialized with a parent of type Node', () => {
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
    test('cannot be initialized with children as a non array value', () => {
      expect(() => {new Node('value', null, 'non array!');}).toThrowError('Children must be an array');
    });
    test('cannot be initialized with non Node children', () => {
      const childNode = new Node('a');
      expect(() => {new Node('value', null, ['a', childNode]);}).toThrowError('Children must all be instances of Node');
      expect(() => {new Node('value', null, [childNode, 'a']);}).toThrowError('Children must all be instances of Node');
    });
    test('can be initialized with children as an empty array', () => {
      const children = [];
      const node = new Node('value', null, children);
      expect(node.children).toStrictEqual(children);
    });
    test('can be initialized with children as an array of Nodes', () => {
      const children = [new Node('a'), new Node('b')];
      const node = new Node('value', null, children);
      expect(node.children).toStrictEqual(children);
    });
  });
  describe('node.isChild()', () => {
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
  describe('node.addChild()', () => {
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
      expect(nodeWithChildren.children).toHaveLength(1);
    });
    it('moves the index of the child if it is already a child of the node', () => {
      const nodeWithChildren = new Node('value', null, [child, new Node('a'), new Node('b'), new Node('c')]);
      nodeWithChildren.addChild(child, 2);
      expect(nodeWithChildren.children[2]).toBe(child);
    });
    it('cannot add itself as a child', () => {
      expect(() => parent.addChild(parent)).toThrowError('Node cannot be a child to itself');
    });
  });
  describe('node.clearChildren()', () => {
    let parent;
    let children;
    beforeEach(() => {
      children = [new Node('a'), new Node('b')];
      parent = new Node('foo', null, children);
    });
    it('sets the parent to null on all previous children', () => {
      parent.clearChildren();
      children.forEach((child) => expect(child.parent).toBe(null));
    });
    it('sets the length of the node\'s "children" property to 0', () => {
      parent.clearChildren();
      expect(parent.children).toHaveLength(0);
    });
  });
  describe('node.removeChild()', () => {
    let child;
    let parent;
    beforeEach(() => {
      child = new Node('foo');
      parent = new Node('bar', null, [child]);
    });
    it('returns false if the argument is not a child', () => {
      expect(parent.removeChild(new Node('baz'))).toBe(false);
    });
    it('does not alter the length of the children property if argument is not a child', () => {
      const startingLength = parent.children.length;
      parent.removeChild(new Node('baz'));
      const endingLength = parent.children.length;
      expect(startingLength).toBe(endingLength);
    });
    it('reduces the length of the children property  by 1 if the node is a child', () => {
      const startingLength = parent.children.length;
      parent.removeChild(child);
      const endingLength = parent.children.length;
      expect(startingLength).toBe(endingLength + 1);
    });
    it('returns true if the node is a child', () => {
      expect(parent.removeChild(child)).toBe(true);
    });
    it('removes the child from the children property', () => {
      parent.removeChild(child);
      expect(parent.children).not.toContain(child);
    });
    it('sets the child\'s parent property to null', () => {
      parent.removeChild(child);
      expect(child.parent).not.toBe(parent);
    });
  });
  describe('getters and setters', () => {
    describe('.children', () => {
      let node;
      beforeEach(() => {
        node = new Node('value', null, [new Node('a'), new Node('b'), new Node('c')]);
      });
      test('Children array cannot be mutated', () => {
        const children = node.children;
        children.push('foo');
        expect(node.children).toHaveLength(3);
      });
      test('children cannot be mutated by mutating the array used to set them', () => {
        const newNode = new Node('value');
        const children = [new Node('e'), new Node('f'), new Node('g')];
        newNode.children = children;
        children.push(new Node('foo'));
        expect(node.children).not.toHaveLength(4);
      });
      test('new children array after setting is deep equal to array used to set', () => {
        const newNode = new Node('value');
        const children = [new Node('e'), new Node('f'), new Node('g')];
        newNode.children = children;
        expect(newNode.children).toStrictEqual(children);
      });
      test('Cannot be set with children as a non array value', () => {
        expect(() => {node.children = 'foo';}).toThrowError('Children must be an array');
      });
      test('Cannot be set with non Node children', () => {
        const childNode = new Node('e');
        expect(() => {node.children = ['a', childNode];}).toThrowError('Children must all be instances of Node');
        expect(() => {node.children = [childNode, 'a'];}).toThrowError('Children must all be instances of Node');
      });
      test('Can be set with children as an empty array', () => {
        const children = [];
        node.children = children;
        expect(node.children).toStrictEqual(children);
      });
      test('Can be set with children as an array of Nodes', () => {
        const children = [new Node('e'), new Node('f')];
        node.children = children;
        expect(node.children).toStrictEqual(children);
      });
    });
    describe('parent', () => {
      let parent;
      let child;
      beforeEach(() => {
        parent = new Node('foo');
        child = new Node('bar');
      });
      it('sets the parent to the parent property', () => {
        child.parent = parent;
        expect(child.parent).toBe(parent);
      });
      it('errors if the parent is not a node', () => {
        expect(() => {child.parent = 'foo';}).toThrowError('Node parent must be an instance of Node');
      });
      it('adds the node to the end of the parent\'s child list', () => {
        child.parent = parent;
        expect(parent.children[parent.children.length - 1]).toBe(child);
      });
      it('removes the child from the previous parent\'s list of children', () => {
        child.parent = parent;
        child.parent = new Node('baz');
        expect(parent.children).toHaveLength(0);
      });
    });
    describe('value', () => {
      it('cannot be set to undefined', () => {
        const node = new Node('foo');
        expect(() => {node.value = undefined;}).toThrowError('Node value cannot be undefined');
      });
    });
  });
});