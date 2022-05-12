/**
 * 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]

输入：head = [1,2,3,4,5], k = 3
输出：[3,2,1,4,5]

输入：head = [1,2,3,4,5,6,7], k = 3
输出：[3,2,1,6,5,4,7]
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
var reverseKGroup = function (head, k) {
  let dummy = new ListNode();
  dummy.next = head;
  let pre = dummy;
  let end = dummy;
  while (end.next !== null) {
    for (let i = 0; i < k; i++) {
      end = end.next
    }
    if (end === null) break;
    let start = pre.next;  //记录头节点 1 
    let next = end.next; //记录尾节点 4
    end.next = null; // 断开链表的第k节点
    pre.next = reverse(start);// 1->2->3 反转 => 3 -> 2-> 1
    start.next = next //连接后面的链表 1->4 

    pre = start;// 头节点右移
    end = start; // 尾节点右移
  }

  return dummy.next
};
var reverse = (head) => {
  let pre = null;
  let cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}
console.log('reverseKGroup', JSON.stringify(reverseKGroup(root,3), null, 2));
