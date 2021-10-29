class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let cur = head; 
    let prev = null;
    let next = null;
    
    
    while(cur != null) {        
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    return head;
};



const list = new ListNode([1,2,3,4,5]);
// list = [1,2,3,4,5];
const head = list.head;



const result = reverseList(list[0]);


console.log('result: ', result);
