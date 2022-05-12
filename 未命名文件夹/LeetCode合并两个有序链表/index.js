/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * 
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
示例1：
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
 */

let l1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
}
let l2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
}
function listNode(val, next) {
    this.val = val
    this.next = next
}
//                 l1
// l1 = [ 1 ,2 ,4 ]

//             l2
// l2 = [ 1 ,3 ,4 ]
//                           cur
//                            4 ]
//                          4 ]
//                       3 ,4 ]
//                    2 ,4 ] 
//                 1 ,3 ,4 ]       
// cur.next = [ 1 ,2 ,4 ]

//  
// [ 1, 1, 2, 3, 4, 4]
//时间复杂度O(n)
//空间复杂度O(1)
function mergeListNode(l1, l2) {
    let head = new listNode();// 刚开始是空节点,head是初始化的引用地址,保存着所有的数据链
    let current = head; // 刚开始和head是同一个引用地址,后面会一直往右移动,记录当前节点的一个指针
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    if (l1 !== null) {
        current.next = l1;
    }
    if (l2 !== null) {
        current.next = l2;
    }
    console.log('current', current);
    console.log('head', JSON.stringify(head, null, 2));
    return head.next;
}
// console.log(JSON.stringify(mergeListNode(l1, l2),null,2)); // [1,1,2,3,4,4]

// 递归
/**
 * 这道题可以使用递归实现，新链表也不需要构造新节点，我们下面列举递归三个要素:
1.终止条件：两条链表分别名为 l1 和 l2，当 l1 为空或 l2 为空时结束
2.返回值：每一层调用都返回排序好的链表头
3.本级递归内容：如果 l1 的 val 值更小，则将 l1.next 与排序好的链表头相接，l2 同理
    O(m+n)O(m+n)，mm 为 l1的长度，nn 为 l2 的长度
 */
// 时间复杂度O（n）
// 空间复杂度O（n）
const mergeTwoLists = function (l1, l2) {
    if (l1 == null) {
        return l2;
    }
    if (l2 == null) {
        return l1;
    }
    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}
// console.log('mergeTwoLists', JSON.stringify(mergeTwoLists(l1, l2), null, 2)); // [1,1,2,3,4,4]


function mergeTwoLists1(l1, l2) {
    let head = new listNode();
    let cur = head;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    if (l1 !== null) {
        cur.next = l1;
    }
    if (l2 !== null) {
        cur.next = l2;
    }
    return head.next;
}
console.log('mergeTwoLists-1', JSON.stringify(mergeTwoLists1(l1, l2), null, 2)); // [1,1,2,3,4,4]
