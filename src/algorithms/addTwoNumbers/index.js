/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode} 
 */
const addTwoNumbers = function (l1, l2) {
    const output = []

    const longer = (l1.length >= l2.length) ? l1 : l2
    const shorter = (l1.length < l2.length) ? l1 : l2
    let carry = false

    for (let i = 0; i<longer.length; i++){
        const sum = longer[i] + (shorter[i] || 0) + (carry ? 1 : 0)
        
        carry = sum > 9
        output.push(sum%10)
    }

    if (carry) { 
        output.push(1)
    }

    return output
};



export default addTwoNumbers

//
//  complet with ListNode next time
//  will need to make ListNode object
//  and maybe test listnode but hey, who knows

// https://leetcode.com/problems/add-two-numbers/