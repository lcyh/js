/*
 * https://leetcode-cn.com/problems/add-two-numbers/
 * @Description: 两个链表相加,合并成一个链表
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
    请你将两个数相加，并以相同形式返回一个表示和的链表。

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.   

输入：l1 = [9,9,9,9 ,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9, 0,0,0,1]
 */
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
let l1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: {
                val: 6,
                next: null
            }
        }
    }
}
let l2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: {
                val: 8,
                next: null
            }
        }
    }
}
// 输入：l1 = [2,4,3,6], l2 = [5,6,4,8]
// 输出：[7,0,8]
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var addTwoNumbers = function (l1, l2) {
    let root = new ListNode();
    let cur = root;
    let carry = 0;
    let sum = 0;
    while (l1 !== null || l2 !== null || carry !== 0) {
        l1Val = l1?.val || 0
        l2Val = l2?.val || 0
        sum = l1Val + l2Val + carry;
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);
        cur = cur.next
        if (l1 !== null) l1 = l1.next
        if (l2 !== null) l2 = l2.next
    }
    return root.next
};
// console.log('addTwoNumbers', JSON.stringify(addTwoNumbers(l1, l2), null, 2));

// 方法2:
var addTwoNumbers2 = function (l1, l2) {
    let dummy = new ListNode()
    let cur = dummy;
    let carry = 0;
    while (l1 !== null || l2 !== null) {
        let sum = 0;
        if(l1!==null){
            sum = sum + l1.val;
            l1 = l1.next
        }
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next
        }
        sum = sum + carry
        carry = Math.floor(sum/10)
        cur.next = new ListNode(sum%10);
        cur = cur.next
    }
    if(carry!==0){
        cur.next = new ListNode(carry)
    }
    return dummy.next
}
// 输入：l1 = [2,4,3,6,9], l2 = [5,6,4,8]
// 输出：[7,0,8,4,0,1]
let l3 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: {
                val: 6,
                next: {
                    val:9,
                    next:null
                }
            }
        }
    }
}
let l4 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: {
                val: 8,
                next: null
            }
        }
    }
}
console.log('addTwoNumbers2', JSON.stringify(addTwoNumbers2(l3, l4), null, 2));
