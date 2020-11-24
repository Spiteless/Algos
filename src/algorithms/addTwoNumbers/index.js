/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/

import ListNode from "./ListNode";

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

const listNodeTwoNumbers = (l1, l2) => {
    let output = new ListNode((l1.val + l2.val) % 10) // does't cover carry
    let n1 = l1.next
    let n2 = l2.next

    let carry = (l1.val + l2.val) > 9

    let tail = output

    while (!!n1 || !!n2 || carry) {
        let sum = (n1 ? n1.val : 0) + (n2 ? n2.val : 0) + (carry ? 1 : 0);
        carry = sum > 9;
        tail.next = new ListNode(sum % 10);
        
        n1 = (!!n1 && n1.next ? n1.next : null)
        n2 = (!!n2 && n2.next ? n2.next : null)

        tail = tail.next;
    }

    return output;
}

export {listNodeTwoNumbers}
export default addTwoNumbers

//
//  complete with ListNode next time
//  will need to make ListNode object
//  and maybe test listnode but hey, who knows

// https://leetcode.com/problems/add-two-numbers/