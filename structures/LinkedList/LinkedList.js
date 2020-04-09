class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    if (arguments.length > 0 && Array.isArray(arguments[0])) {
      arguments[0].forEach(item => {
        this.append(item)
      })
    }
  }
  static toArray(ListNode) {
    let result = [];
    let current = ListNode;
    result.push(current.val)
    while (current.next) {
      current = current.next
      result.push(current.val)
    } 
    return result
  }
  toArray() {
    let result = [];
    if (this.head != null) {
      let current = this.head;
      result.push(current.val)
      while (current.next) {
        current = current.next
        result.push(current.val)
      } 
    }
    return result
  }
  append(val) {
    let node = new ListNode(val)
    if (this.head == null) {
      this.head = node
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }


  getNodeList() {
    return this.head;
  }

  size() {
    return this.length;
  }
}

module.exports = {
  LinkedList,
  ListNode
}