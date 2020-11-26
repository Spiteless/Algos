import twoSum from './index'

describe("twoSum", () => {
    test("given ([0, 0], 0) to be [0,1]", () => (
        expect(twoSum([0,0], 0)).toStrictEqual([0,1])
    )
    )
    
    test("given ([2,7,11,15], 9) to be [0,1]", () => (
        expect(twoSum([2,7,11,15], 9)).toStrictEqual([0,1])
    )
    )

    test("given ([3,2,4], 6) to be [1,2]", () => (
        expect(twoSum([3,2,4], 6)).toStrictEqual([1,2])
    )
    )



})