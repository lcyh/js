/*
 * @Author: changluo
 * @Description: 反转链表 II
 */
/**
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。
 * 请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 * 
输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]

输入：head = [5], left = 1, right = 1
输出：[5]
 */
let root = {
    val: '1',
    next: {
        val: '2',
        next: {
            val: '3',
            next: {
                val: '4',
                next: {
                    val: '5',
                    next: null
                }
            }
        }
    }
}
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
//                 rNode
//      pre
// null  1,  2,  3,  4,  5  
var reverseBetween = function (head, left, right) {
    const dummyNode = new ListNode(-1);
    dummyNode.next = head;//虚拟头节点

    let pre = dummyNode;
    for (let i = 0; i < left - 1; i++) {//pre遍历到left的前一个节点
        pre = pre.next;
    }

    let rightNode = pre;
    for (let i = 0; i < right - left + 1; i++) {//rightNode遍历到right的位置
        rightNode = rightNode.next;
    }

    let leftNode = pre.next;//保存leftNode  2
    let curr = rightNode.next;//保存rightNode.next  5

    //切断left到right的子链
    pre.next = null;
    rightNode.next = null;

    //206题的逻辑 反转left到right的子链
    reverseLinkedList(leftNode);

    //返乡连接
    pre.next = rightNode;
    leftNode.next = curr;
    return dummyNode.next;
};

const reverseLinkedList = (head) => {
    let pre = null;
    let cur = head;

    while (cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
}

