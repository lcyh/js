/**
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * 输入：head = [1,2,3,4,5]
   输出：[5,4,3,2,1] 
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
var reverse = (head) => {
  let temp = new ListNode(-1);
  while (head) {
    let next = head.next;
    head.next = temp.next;
    temp.next = head;
    head = next;
  }
  return temp.next
}
// console.log(JSON.stringify(reverse(root), null, 2));


// [1->2->3->4->5] -> [1<-2<-3<-4<-5]
function reverseList(head) {
  if (head === null) return null;
  let pre = null;
  let cur = head;
  while (cur !== null) {
    let nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }
  return pre;
}
// console.log(JSON.stringify(reverseList(root), null, 2));
// 打印结果:
/**
 {
  "val": "5",
  "next": {
    "val": "4",
    "next": {
      "val": "3",
      "next": {
        "val": "2",
        "next": {
          "val": "1",
          "next": null
        }
      }
    }
  }
}
 */

// 方法2 递归 反转链表

// function reverseList2(head){
//     if(head===null || head.next===null){
//         return head;
//     }
//     let nextNode = reverseList2(head.next);
//     head.next.next = head;
//     head.next = null
//     return nextNode;
// }

function traverse(head) {
  let pre = null;
  let cur = head;
  console.log('head-1', JSON.stringify(head, null, 2));
  // let pre = new ListNode();
  while (cur !== null) {
    const nxt = cur.next;
    cur.next = pre
    pre = cur;
    cur = nxt;
  }
  console.log('head-2', JSON.stringify(head, null, 2));
  // return pre
}
//                                              pre      cur       nxt
// null  <-  1    <-   2   <-   3   <-   4   <-   5
console.log('traverse', JSON.stringify(traverse(root), null, 2));
