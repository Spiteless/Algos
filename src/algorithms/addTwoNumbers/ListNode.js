class ListNode {
    constructor(val, next) {
        this.val = val
        if (Array.isArray(next)) {
            this.next = next.reverse().reduce((node, nextVal) => {
                return new ListNode(nextVal, node)
            }, undefined);
        } else {
            this.next = next;
        }
    }
    set next(newNext) {
        if ((newNext !== undefined) && !(newNext instanceof ListNode)) {
            throw new Error(`next must be a ListNode, instead received ${newNext}`)
        }
        this._next = newNext
    }
    get next() {
        return this._next
    }

    hasSameValue(testNode) {
        if (testNode === undefined || testNode.val !== this.val) {
            return false
        } else if (testNode.next === undefined && this.next === undefined) {
            return true
        }
        return !!this.next && this.next.hasSameValue(testNode.next)
    }
}

export default ListNode