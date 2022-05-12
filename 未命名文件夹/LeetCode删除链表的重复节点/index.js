/**
 * 删除排序链表中的重复元素
 * 描述:存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。
   返回同样按升序排列的结果链表
 * 
  输入：head = [1,1,2]
  输出：[1,2]

  输入：head = [1,1,2,3,3]
  输出：[1,2,3]
 */
let root = {
  val: '1',
  next: {
    val: '1',
    next: {
      val: '1',
      next: {
        val: '2',
        next: {
          val: '3',
          next: {
            val: '3',
            next: null
          }
        }
      }
    }
  }
}
// [1,1,1,2,3,3] -> [1,2,3]
// [1,2,3,3] -> [1,2,3]
// [1,2,3,3] -> [1,2,3]
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null) return head
  let current = head;
  while (current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
console.log('deleteDuplicates', JSON.stringify(deleteDuplicates(root), null, 2));