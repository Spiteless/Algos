import twoSum, { twoSumII } from './index'

describe("twoSum", () => {
    test("given ([0, 0], 0) to be [0,1]", () => (
        expect(twoSum([0, 0], 0)).toStrictEqual([0, 1])
    )
    )

    test("given ([2,7,11,15], 9) to be [0,1]", () => (
        expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1])
    )
    )

    test("given ([3,2,4], 6) to be [1,2]", () => (
        expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2])
    )
    )

})

describe("twoSumII", () => {
    test("given ([-1,0], -1) to be [1,2]", () => (
        expect(twoSumII([-1, 0], -1)).toStrictEqual([1, 2])
    )
    )

    test("given ([2,7,11,15], 9) to be [1,2]", () => (
        expect(twoSumII([2, 7, 11, 15], 9)).toStrictEqual([1, 2])
    )
    )

    test("given ([2,3,4], 6) to be [1,3]", () => (
        expect(twoSumII([2, 3, 4], 6)).toStrictEqual([1, 3])
    )
    )

    test("given ([2,3,4,11,33,66,77,99,101,102,106,108], 208) to be [1,3]", () => (
        expect(twoSumII([2, 3, 4, 11, 33, 66, 77, 99, 101, 102, 106, 108], 208)).toStrictEqual([10, 11])
    )
    )

    test("given ([3,24,50,79,88,150,345], 200) to be [3,6]", () => (
        expect(twoSumII([3, 24, 50, 79, 88, 150, 345], 200)).toStrictEqual([3, 6])
    )
    )

    test("given ([1,2,3,4,4,9,56,90], 8) to be [4,5]", () => (
        expect(twoSumII([1, 2, 3, 4, 4, 9, 56, 90], 8)).toStrictEqual([4, 5])
    )
    )

    
    test("many repeat digits with correct vals in middle", () => {

        const nums = "0000000000000000000002399999999999999999999".split("").map(x=>+x)
        const target = 5

        expect(twoSumII(nums, target)).toStrictEqual([nums.indexOf(2)+1,nums.indexOf(3)+1])
    }
    )

})
