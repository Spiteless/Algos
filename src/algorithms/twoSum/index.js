/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i<nums.length; i++){
        let first = nums[i]
        let subset = nums.slice(i+1)
        for (let j = 0; j<subset.length; j++) {
            let second = nums[i+1+j]
            if (first + second === target){
                return [i, i+1+j]
            }
        }
    }
};

export default twoSum