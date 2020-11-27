import lengthOfLongestSubstring from './index'

describe("lengthOfLongestSubstring", () => {
    test("str 'b' to return 1", () => {
        let test = "b"
        let response = 1
        expect(lengthOfLongestSubstring(test)).toStrictEqual(response)
    })

    test("empty string to return 0", () => {
        let test = ""
        let response = 0
        expect(lengthOfLongestSubstring(test)).toStrictEqual(response)
    })

    test("longer test case to return 3", () => {
        let test = "abcabcbb"
        let response = 3
        expect(lengthOfLongestSubstring(test)).toStrictEqual(response)
    }
    )

    test(`str 'abcdefghhijklmnopq' to return 10`, () => {
        let test = "abcdefghhijklmnopq"
        let response = 10
        expect(lengthOfLongestSubstring(test)).toStrictEqual(response)
    }
    )
    
    test(`str 'dvdf' to return 3`, () => {
        let test = "dvdf"
        let response = 3
        expect(lengthOfLongestSubstring(test)).toStrictEqual(response)
    }
    )

    test(`str 'aabaabcbb' to return 3`, () => {
        let test = "aabaabcbb"
        let response = 3
        expect(lengthOfLongestSubstring(test)).toStrictEqual(response)
    }
    )

})
