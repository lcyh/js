/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
输入：head = [1,2,3,4]
输出：[2,1,4,3]

输入：head = []
输出：[]

输入：head = [1]
输出：[1]
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
              //pre
 // pre    n1   n2        
// null -> 1 -> 2 -> 3 -> 4 -> 5
var swapPairs = (head) => {
  if(head === null) return head;
  let dummy = new ListNode();
  dummy.next = head;
  let pre = dummy;
  while(pre.next !==null && pre.next.next!==null){
    let n1 = pre.next;
    let n2 = pre.next.next;
    pre.next = n2;
    n1.next = n2.next;
    n2.next = n1;
    pre = n1;
  }
  return dummy.next
}
console.log('rotateRight', JSON.stringify(swapPairs(root), null, 2));