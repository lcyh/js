/*
 * @Author: changluo
 * @Description: 
 循环链表是另一种形式的链式存储结构
 它的特点是表中最后一个结点的指针域指向头结点，整个链表形成一个环
 */

function dispatchAction(queue, action) {
    const update = { action, next: null };
    const pending = queue.pending;
    if (pending === null) {
        update.next = update;
    } else {
        update.next = pending.next;
        pending.next = update;
    }
    queue.pending = update;
}
let queue = { pending: null };
dispatchAction(queue, 'action1');
dispatchAction(queue, 'action2');
dispatchAction(queue, 'action3');
const pendingQueue = queue.pending;
console.log('pendingQueue',pendingQueue);

if (pendingQueue !== null) {
    const first = pendingQueue.next;
    let update = first;
    do {
        const action = update.action;
        console.log(action);
        update = update.next;

    } while (update !== null && update !== first);
}