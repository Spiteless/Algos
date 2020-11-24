import ListNode from './ListNode'

describe("listNode", () => {

    test("can be instantiated", () => {
        const node = new ListNode()
        expect(node).toBeInstanceOf(ListNode)
    })

    test("can be instantiated with val", () => {
        const node = new ListNode("foo")
        expect(node.val).toBe("foo")
    })

    test("can be instantiated with next", () => {
        const child = new ListNode()
        const node = new ListNode("foo", child)
        expect(node.next).toBe(child)
    })

    test("errors if next is not instance of ListNode", () => {
        expect(() => {
            new ListNode("foo", "not ListNode")
        }).toThrow(/next must be a ListNode/)
    })

    describe(".hasSameValue()", () => {

        test("can equate the value of two depth 1 node lists", () => {
            const node1 = new ListNode(1)
            const node2 = new ListNode(1)
            expect(node1.hasSameValue(node2)).toBe(true)
        })

        test("returns false if passed different values with depth 1", () => {
            const node1 = new ListNode(1)
            const node2 = new ListNode(2)
            expect(node1.hasSameValue(node2)).toBe(false)
        })

        test("returns true if passed same values with depth 2", () => {
            const node1 = new ListNode(1, new ListNode(2))
            const node2 = new ListNode(1, new ListNode(2))
            expect(node1.hasSameValue(node2)).toBe(true)
        })

        test("returns true if passed same values with depth 5", () => {
            const node1 = new ListNode(
                1, new ListNode(2,
                    new ListNode(3,
                        new ListNode(4,
                            new ListNode(5)
                        )
                    )
                )
            )
            const node2 = new ListNode(
                1, new ListNode(2,
                    new ListNode(3,
                        new ListNode(4,
                            new ListNode(5)
                        )
                    )
                )
            )
            expect(node1.hasSameValue(node2)).toBe(true)
        })

        test("nodes of different length return false with first node being longer", () => {
            const node1 = new ListNode(
                1, new ListNode(2,
                    new ListNode(3,
                        new ListNode(4,
                            new ListNode(5)
                        )
                    )
                )
            )
            const node2 = new ListNode(
                1, new ListNode(2,
                    new ListNode(3)

                )
            )
            expect(node1.hasSameValue(node2)).toBe(false)
        }
        )

        test("nodes of different length return false with second node being longer", () => {
            const node1 = new ListNode(
                1, new ListNode(2,
                    new ListNode(3)

                )
            )
            const node2 = new ListNode(
                1, new ListNode(2,
                    new ListNode(3,
                        new ListNode(4,
                            new ListNode(5)
                        )
                    )
                )
            )
            expect(node1.hasSameValue(node2)).toBe(false)
        }
        )

        test("constructor works with array", () => {
            const node = new ListNode(2, [1])
            expect(node).toBeInstanceOf(ListNode)
        })
    })
})