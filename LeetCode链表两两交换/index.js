/*
 * https://leetcode-cn.com/problems/add-two-numbers/
 * @Description: 两两交换链表中的节点
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
    你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换

输入：head = [1,2,3,4]
输出：[2,1,4,3]  

输入：head = [1]
输出：[1]

输入：head = []
输出：[]
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
let root = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}
// pre 1 2
// pre 2 1
var swapPairs = function (head) {
    let dummy = new ListNode();
    dummy.next = head;
    let cur = dummy;
    while (cur.next && cur.next.next) {
        let n1 = cur.next;
        let n2 = cur.next.next;
        cur.next = n2;
        n1.next = n2.next;
        n2.next = n1;
        cur = n1
    }
    return dummy.next;
};
// console.log('swapPairs', JSON.stringify(swapPairs(root), null, 2));

var swapPairs1 = function (head) {
    const dummy = new ListNode()
    dummy.next = head;
    let cur = dummy
    while (cur.next !== null && cur.next.next !== null) {
        let n1 = cur.next
        let n2 = cur.next.next
        cur.next = n2
        n1.next = n2.next
        n2.next = n1;
        cur = n1;
    }
    return dummy.next
}
console.log('swapPairs1', JSON.stringify(swapPairs1(root), null, 2));
