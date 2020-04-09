const { ListNode } = require('../../structures/LinkedList/LinkedList')

var addTwoNumbers = function (l1, l2) {
  let nodeHead = new ListNode('head')
  let currentNode = nodeHead;
  let carry = 0; // 进位标志
  let sum = 0; // 当前位置上的数的和
  while (l1 || l2) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    sum = val1 + val2 + carry;
    currentNode.next = new ListNode(sum % 10);
    carry = parseInt(sum / 10);
    currentNode = currentNode.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry > 0) {
    currentNode.next = new ListNode(carry) // 最后一位进位
  }
  return nodeHead.next // 返回head以后的链表
};

module.exports = addTwoNumbers