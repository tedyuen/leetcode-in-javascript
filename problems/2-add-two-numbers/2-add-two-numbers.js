function ListNode(val, next) {
  this.val = val;
  this.next = next;
}
function arrayToNode(arr1, arr2) {
  let l1, l2;
  for(let i=arr1.length-1;i>=0;i--) {
    if(i===arr1.length-1) {
      l1 = new ListNode(arr1[i], null);
    } else {
      l1 = new ListNode(arr1[i], l1);
    }
  }
}
var addTwoNumbers = function(l1, l2) {
    
};

module.exports = {
  addTwoNumbers,
  ListNode
}