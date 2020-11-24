import addTwoNumbers, { listNodeTwoNumbers } from './index'
import ListNode from './ListNode'

describe("addTwoNumbers", () => {

    test("Add 0 and 0 to be 0", () => (
        expect(addTwoNumbers([0], [0])).toStrictEqual([0])
    )
    )

    test("Add 2 and 3 to be 5", () => {
        const l1 = [2]
        const l2 = [3]
        const l3 = [5]
        expect(addTwoNumbers(l1, l2)).toStrictEqual(l3)
    })

    test("Add 22 and 33 to be 55", () => {
        const l1 = [2, 2]
        const l2 = [3, 3]
        const l3 = [5, 5]
        expect(addTwoNumbers(l1, l2)).toStrictEqual(l3)
    })
    test("Add 22 and 33 to be 55", () => {
        const l1 = [2, 2]
        const l2 = [3, 3]
        const l3 = [5, 5]
        expect(addTwoNumbers(l1, l2)).toStrictEqual(l3)
    })

    test("Add 2 and 33 to be 35", () => {
        const l1 = [2]
        const l2 = [3, 3]
        const l3 = [5, 3]
        expect(addTwoNumbers(l1, l2)).toStrictEqual(l3)
    })

    test("Add 33 and 2 to be 35", () => {
        const l1 = [3, 3]
        const l2 = [2]
        const l3 = [5, 3]
        expect(addTwoNumbers(l1, l2)).toStrictEqual(l3)
    })

    test("Add 39 and 4 to be 43", () => {
        const l1 = [9, 3]
        const l2 = [4]
        const l3 = [3, 4]
        expect(addTwoNumbers(l1, l2)).toStrictEqual(l3)
    })

    test("Add 9 and 4 to be 13", () => {
        const l1 = [9]
        const l2 = [4]
        const l3 = [3, 1]
        expect(addTwoNumbers(l1, l2)).toStrictEqual(l3)
    })

    test("Add 39 and 4 to be 43", () => {
        const l1 = [9, 3]
        const l2 = [4]
        const l3 = [3, 4]
        expect(addTwoNumbers(l1, l2)).toStrictEqual(l3)
    })


    test("Adds 9999999 and 9999 to be 10009998", () => { 
        const l1 = [9, 9, 9, 9, 9, 9, 9]
        const l2 = [9, 9, 9, 9]
        const l3 = [8, 9, 9, 9, 0, 0, 0, 1]
        expect(addTwoNumbers(l1, l2)).toStrictEqual(l3)
    }
    )

})

describe("listNodeTwoNumbers", () => {

    test("Add 0 and 0 to be 0", () => {
        const l1 = new ListNode(0)
        const l2 = new ListNode(0)
        const l3 = new ListNode(0)
        expect(listNodeTwoNumbers(l1,l2).hasSameValue(l3)).toBe(true)
    }
    )

    test("Add 2 and 3 to be 5", () => {
        const l1 = new ListNode(2)
        const l2 = new ListNode(3)
        const l3 = new ListNode(5)
        expect(listNodeTwoNumbers(l1,l2).hasSameValue(l3)).toBe(true)
    })

    test("Add 22 and 33 to be 55", () => {
        const l1 = new ListNode(2, [2])
        const l2 = new ListNode(3, [3])
        const l3 = new ListNode(5, [5])
        expect(listNodeTwoNumbers(l1,l2).hasSameValue(l3)).toBe(true)
    })

    test("Add 2 and 33 to be 35", () => {
        const l1 = new ListNode(2)
        const l2 = new ListNode(3, [3])
        const l3 = new ListNode(5, [3])
        expect(listNodeTwoNumbers(l1,l2).hasSameValue(l3)).toBe(true)
    })

    test("Add 33 and 2 to be 35", () => {
        const l1 = new ListNode(3, [3])
        const l2 = new ListNode(2)
        const l3 = new ListNode(5, [3])
        expect(listNodeTwoNumbers(l1,l2).hasSameValue(l3)).toBe(true)
    })

    test("Add 39 and 4 to be 43", () => {
        const l1 = new ListNode(9, [3])
        const l2 = new ListNode(4)
        const l3 = new ListNode(3, [4])
        expect(listNodeTwoNumbers(l1,l2).hasSameValue(l3)).toBe(true)
    })

    test("Add 9 and 4 to be 13", () => {
        const l1 = new ListNode(9)
        const l2 = new ListNode(4)
        const l3 = new ListNode(3, [1])
        expect(listNodeTwoNumbers(l1,l2).hasSameValue(l3)).toBe(true)
    })

    test("Add 39 and 4 to be 43", () => {
        const l1 = new ListNode(9, [3])
        const l2 = new ListNode(4)
        const l3 = new ListNode(3, [4])
        expect(listNodeTwoNumbers(l1,l2).hasSameValue(l3)).toBe(true)
    })


    test("Adds 9999999 and 9999 to be 10009998", () => {
        const l1 = new ListNode(9, [9, 9, 9, 9, 9, 9])
        const l2 = new ListNode(9, [9, 9, 9])
        const l3 = new ListNode(8, [9, 9, 9, 0, 0, 0, 1])
        expect(listNodeTwoNumbers(l1,l2).hasSameValue(l3)).toBe(true)
    }
    )

})



