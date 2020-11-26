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
    console.log("BEGIN", nums, "target =", target)
    const triedFirsts = []
    
    for (let i = 0; i<nums.length; i++){
        let first = nums[i]
        if (triedFirsts.includes(first)) {
            console.log(`[${target}] skip frst ${first} @index[ ${i} ]`)
            continue
        }
        else {
            triedFirsts.push(first);
            console.log(`[${target}] add  frst ${first} @index[ ${i} ]`)
        }
        
        const triedSeconds = []
        let subset = nums.slice(i+1)
        for (let j = 0; j<subset.length; j++) {
            let second = nums[i+1+j]
            if (triedSeconds.includes(second)) {
                console.log(`[${target}] [${first+second}] skip scnd ${second} @index[ ${i + j} ]`)
                continue
            }
            else {
                triedSeconds.push(second);
                console.log(`[${target}] add  scnd ${second} @index[ ${i + j} ]`)
            }
            // if (triedVals[second] > (2 + i + 2)) { continue }
            // console.log(`[${target}] ${first} + ${second} = ${first+second}`)
            if (first + second === target){
                return [i+1, i+1+j+1]
            }
        }
    }
};

export {twoSumII}
export default twoSum