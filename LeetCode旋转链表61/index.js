/**
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

 * 
输入：head = [1,2,3,4,5], k = 2
输出：[4,5,1,2,3]

head = [0,1,2], k = 4
输出：[2,0,1]
 */
let root = {
  val: "1",
  next: {
    val: "2",
    next: {
      val: "3",
      next: {
        val: "4",
        next: {
          val: "5",
          next: null,
        },
      },
    },
  },
};
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
//                   cur
// 1 -> 2 -> 3 -> 4 -> 5
var rotateRight = (head, k) => {
  if (head === null || k === 0) return head;
  let len = 1;
  let cur = head;
  // 获取链表的长度
  while (cur.next !== null) {
    cur = cur.next; // 此时 cur在链表的尾节点
    len++;
  }
  if (k % len === 0) return head; // 说明 k是len的倍数,直接返回原链表
  // 连成环形链表
  cur.next = head;
  // cur走到尾节点(拆环的位置),需要走 num 步数
  let num = len - k; // 5 - 2 = 3
  while (num) {
    cur = cur.next; // 循环结束后,cur走到了拆环的位置(尾节点)
    num--;
  }
  let res = cur.next; // 记录头节点
  cur.next = null; // 拆环
  return res;
};
// console.log("rotateRight", JSON.stringify(rotateRight(root, 2), null, 2));

const fn = (head, k) => {
  if (head === null || k === 0) return head;
  let len = 1;
  let cur = head;
  while (cur.next) {
    cur = cur.next;
    len++;
  }
  if (k % len === 0) return head;
  cur.next = head; // 形成环形链表
  let num = len - k;
  while (num) {
    cur = cur.next;
    num--;
  }
  let res = cur.next;
  cur.next = null;
  return res;
};
console.log("fn", JSON.stringify(fn(root, 2), null, 2));
