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

var twoSumII = function(nums, target) {
    const triedFirsts = []
    
    for (let i = 0; i<nums.length; i++){
        let first = nums[i]
        if (triedFirsts.includes(first)) {
            continue
        }
        else {
            triedFirsts.push(first);
        }
        
        const triedSeconds = []
        let subset = nums.slice(i+1)
        for (let j = 0; j<subset.length; j++) {
            let second = nums[i+1+j]
            if (triedSeconds.includes(second)) {
                continue
            }
            else {
                triedSeconds.push(second);
            }
            if (first + second === target){
                return [i+1, i+1+j+1]
            }
        }
    }
};

export {twoSumII}
export default twoSum