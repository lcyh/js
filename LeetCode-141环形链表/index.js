/*
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * 
给你一个链表的头节点 head ，判断链表中是否有环。

 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
const root = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null
        },
    }
}
// [1,2,3]

function cycleList(head) {
    if (head === null) return false
    let slow = head
    let fast = head
    while (fast !== null) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            return true
        }
    }
    return false
}
// console.log('isPalindrome', isPalindrome(root));


// go() // 'go'
// go()('l') // 'gool'
// go()()('l') // 'goool'
function go(str, s = 'go') {
    if (!str) {
        return s + str;
    }
    function addO(str1) {
        if (!str1) {
            s = s + 'o'
            return go(s)
        } else {
            return s + str1;
        }
    }
    return addO
}
console.log('go', go()('l'));


