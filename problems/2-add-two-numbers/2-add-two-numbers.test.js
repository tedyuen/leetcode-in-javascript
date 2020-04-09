const addTwoNumbers = require('./2-add-two-numbers')
const { LinkedList } = require('../../structures/LinkedList/LinkedList');

describe('test 2-add-two-numbers', () => {
  it('should function return correct Node 1', () => {
    let arr1 = [2, 4, 3];
    let arr2 = [5, 6, 4];
    let l1 = new LinkedList(arr1).getNodeList();
    let l2 = new LinkedList(arr2).getNodeList();
    let result = addTwoNumbers(l1, l2);
    expect(LinkedList.toArray(result)).toEqual([7, 0, 8])
  })
  it('should function return correct Node 2', () => {
    let arr1 = [0, 4, 5];
    let arr2 = [5, 6, 6];
    let l1 = new LinkedList(arr1).getNodeList();
    let l2 = new LinkedList(arr2).getNodeList();
    let result = addTwoNumbers(l1, l2);
    expect(LinkedList.toArray(result)).toEqual([5, 0, 2, 1])
  })
  it('should function return correct Node 3', () => {
    let arr1 = [0];
    let arr2 = [5, 6, 6];
    let l1 = new LinkedList(arr1).getNodeList();
    let l2 = new LinkedList(arr2).getNodeList();
    let result = addTwoNumbers(l1, l2);
    expect(LinkedList.toArray(result)).toEqual([5, 6, 6])
  })
})