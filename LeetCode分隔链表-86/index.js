/**
 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 你应当 保留 两个分区中每个节点的初始相对位置。

 * 
输入：head = [1,4,3,2,5,2], x = 3
输出：[1,2,2,4,3,5]

输入：head = [2,1], x = 2
输出：[1,2]

 */
let root = {
  val: '1',
  next: {
    val: '4',
    next: {
      val: '3',
      next: {
        val: '2',
        next: {
          val: '5',
          next: {
            val: '2',
            next: null
          }
        }
      }
    }
  }
}
let root1 = {
  val: '2',
  next: {
    val: '1',
    next: null
  }
}
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
// 分隔链表

var separate = function (head, x) {
  if (head === null) return null;
  let left = new ListNode(); // 左边的第一个空节点
  let right = new ListNode(); // 右边的第一个
  let currentLeft = left;
  let currentRight = right;
  while (head !== null) {
    const val = head.val;
    if (val < x) {
      let node1 = new ListNode(val)
      currentLeft.next = node1; //[1,2,2]
      currentLeft = currentLeft.next; // currentLeft是左边链表的最后一个
    } else {
      let node2 = new ListNode(val);
      currentRight.next = node2; //[4,3,5]
      currentRight = currentRight.next; // currentRight是右边链表的最后一个
    }
    head = head.next
  }
  currentLeft.next = right.next // 左右两边拼接
  return left.next;
}
// console.log('separate', JSON.stringify(separate(root, 3), null, 2));


// 输入：head = [1,4,3,2,5,2], x = 3
// 输出：[1,2,2,4,3,5]
var separate1 = function (head, x) {
  if (head === null) return head;
  let left = new ListNode();
  let right = new ListNode();
  let curLeft = left;
  let curRight = right;
  while (head) {
    let val = head.val;
    if (val < x) {
      curLeft.next = new ListNode(val)
      curLeft = curLeft.next
    } else {
      curRight.next = new ListNode(val)
      curRight = curRight.next
    }
    head = head.next
  }
  curLeft.next = right.next
  return left.next
}
console.log('separate1', JSON.stringify(separate1(root, 3), null, 2));
