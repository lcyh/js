/*
 * https://leetcode-cn.com/problems/palindrome-linked-list/
 * 
给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

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
            next: {
                val: 3,
                next: {
                    val: 2,
                    next: {
                        val: 1,
                        next: null
                    }
                }
            },
        },
    }
}
// [1,2,3,3,2,1]

function isPalindrome(head) {
    if (head === null) return false
    const res = [];
    let current = head
    while (current !== null) {
        res.push(current.val)
        current = current.next
    }
    let s = 0;
    let e = res.length - 1;
    console.log('res',res);
    while (s < e) {
        if (res[s] !== res[e]) {
            return false
        }
        s++
        e--
    }
    return true
}
console.log('isPalindrome', isPalindrome(root));

function isPalindrome1(root){
    if(root ===null) return false
    const traverse = ()=>{

    }
}
console.log('isPalindrome1', isPalindrome1(root));
