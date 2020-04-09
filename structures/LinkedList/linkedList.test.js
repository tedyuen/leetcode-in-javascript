const { LinkedList } = require('./LinkedList');

describe('test LinkedList', () => {
  it('should LinkedList has correct methods', () => {
    let linkedList = new LinkedList();
    linkedList.append('a')
    expect(linkedList.size()).toEqual(1);
    expect(linkedList.getNodeList().val).toEqual('a');
    linkedList.append('b')
    linkedList.append('c')
    expect(linkedList.size()).toEqual(3);
  })
  it('should LinkedList can be constructed by Array args', () => {
    let arr = [2, 3, 4, 5, 6]
    let linkedList = new LinkedList(arr);
    expect(linkedList.getNodeList().val).toEqual(2);
    expect(linkedList.size()).toEqual(5);
    expect(linkedList.toArray()).toEqual(arr)
  })
})
