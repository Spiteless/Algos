import addTwoNumbers from './index'

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
        const l1 = [2,2]
        const l2 = [3,3]
        const l3 = [5,5]
        expect(addTwoNumbers(l1, l2)).toStrictEqual(l3)
    })
    test("Add 22 and 33 to be 55", () => {
        const l1 = [2,2]
        const l2 = [3,3]
        const l3 = [5,5]
        expect(addTwoNumbers(l1, l2)).toStrictEqual(l3)
    })
    
    test("Add 2 and 33 to be 35", () => {
        const l1 = [2]
        const l2 = [3,3]
        const l3 = [5,3]
        expect(addTwoNumbers(l1, l2)).toStrictEqual(l3)
    })

    test("Add 33 and 2 to be 35", () => {
        const l1 = [3,3]
        const l2 = [2]
        const l3 = [5,3]
        expect(addTwoNumbers(l1, l2)).toStrictEqual(l3)
    })

    test("Add 39 and 4 to be 43", () => {
        const l1 = [9,3]
        const l2 = [4]
        const l3 = [3,4]
        expect(addTwoNumbers(l1, l2)).toStrictEqual(l3)
    })

    test("Add 9 and 4 to be 13", () => {
        const l1 = [9]
        const l2 = [4]
        const l3 = [3,1]
        expect(addTwoNumbers(l1, l2)).toStrictEqual(l3)
    })

    test("Add 39 and 4 to be 43", () => {
        const l1 = [9,3]
        const l2 = [4]
        const l3 = [3,4]
        expect(addTwoNumbers(l1, l2)).toStrictEqual(l3)
    })
    

    test("Adds ", () => {
        const l1 = [9, 9, 9, 9, 9, 9, 9]
        const l2 = [9, 9, 9, 9]
        const l3 = [8, 9, 9, 9, 0, 0, 0, 1]
        expect(addTwoNumbers(l1, l2)).toStrictEqual(l3)
    }
    )

})
// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


