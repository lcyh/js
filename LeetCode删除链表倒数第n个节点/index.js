/*
 * https://leetcode-cn.com/problems/SLwz0R/
 * @Description: 给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]

输入：head = [1], n = 1
输出：[]

输入：head = [1,2], n = 1
输出：[1]
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
let head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}
let head1 = {
    val: 1,
    next: null
}
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
//n1     n2  
//  [1,2,3,4,5],n=2 -> [1,2,3,5]
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode()
    dummy.next = head;
    n1 = dummy;
    n2 = dummy;
    for (let i = 0; i <= n; i++) {
        n2 = n2.next;
    }
    while (n2 !== null) {
        n1 = n1.next;
        n2 = n2.next;
    }
    n1.next = n1.next.next;
    return dummy.next;
};
// console.log('removeNthFromEnd', JSON.stringify(removeNthFromEnd(head, 1), null, 2));


var removeNthFromEnd1 = function (head, n) {
    if (head === null) return null
    let dummy = new ListNode();
    dummy.next = head
    let pre = dummy;
    let cur = dummy;
    for (let i = 0; i < n; i++) {
        cur = cur.next
    }
    while (cur && cur.next) {
        pre = pre.next
        cur = cur.next
    }
    pre.next = pre.next.next
    return dummy.next
}
console.log('removeNthFromEnd1', JSON.stringify(removeNthFromEnd1(head, 3), null, 2));
