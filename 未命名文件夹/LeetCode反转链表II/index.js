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
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
//next
//pre  cur
// null -> 1 -> 2 -> 3 -> 4 -> 5
//prev2 cur2
var reverseBetween = function (head, left, right) {
  let pre = null;
  let cur = head;
  let next = head;
  for (let i = 1; i < left; i++) {
    pre = cur;
    cur = cur.next;
  }
  let prev2 = pre; // 记录第一段的尾节点
  let cur2 = cur; // 记录第二段的头节点

  for (let i = left; i <= right; i++) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  if (prev2 !== null) { // left>1
    prev2.next = pre;
  } else {
    head = pre
  }
  cur2.next = cur;
  return head;
};
console.log('reverseBetween',JSON.stringify(reverseBetween(root,2,4),null,2));
