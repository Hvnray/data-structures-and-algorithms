/**
 * @class ListNode
 * this class instanciates a linkedList node
 */
export class ListNode {
  /** @param {number} data - The data stored in node.*/
  data: number;

  /** @param {ListNode | undefined} nextNode - The pointer to nextNode.*/
  nextNode: ListNode | undefined;

  /**
   * @constructs ListNode
   * @param {number} data - The data to be stored in node.
   *
   */
  constructor(data: number) {
    this.data = data;
  }
}

/**
 * @class LinkedList
 * this class instanciates a linkedList
 */
export default class LinkedList {
  /**
  this points the first node on the linkedList or undefined
  */
  head: ListNode | undefined;

  /**
   * @constructs LinkedList
   * initialize the `head` node to undefined
   *
   */
  constructor() {
    this.head = undefined;
  }

  /**
  checks if the `head` node is empty i.e no data is stored on linkedList
  */
  public get isEmpty(): boolean {
    return this.head == undefined;
  }

  /**
  gets the size of the linkedList instance
  has O(n) time complexity
  */
  public get size() {
    let current = this.head;
    let count = 0;
    while (current) {
      count += 1;
      current = current?.nextNode;
    }
    return count;
  }
  /**
   * Returns a string representation of the linkedList instance
   *
   * Takes 0(n) time i.e linear time
   */
  public get toString(): string {
    let nodes: Array<string> = [];
    let current = this.head;
    while (current) {
      if (current == this.head) {
        nodes.push(`[Head: ${current.data}]`);
      } else if (current.nextNode == undefined) {
        nodes.push(`[Tail: ${current.data}]`);
      } else {
        nodes.push(`[${current.data}]`);
      }
      current = current.nextNode;
    }
    return nodes.join("->");
  }

  /**
   *adds new node with data at  head of list
   * @param data data for New Node
   */
  public add(data: number) {
    const newNode = new ListNode(data);
    newNode.nextNode = this.head;
    this.head = newNode;
  }
  /**
   * Inserts a new Node into the linked list at a specified index
   * insertion takes O(1) but finding the node is O(n) time
   * @param data data for New Node
   * @param index location on LinkedList to insert New Node
   * @returns `Error` for invalid index or void
   */
  public insert(data: number, index: number = 0): Error | undefined {
    if (index == 0) {
      this.add(data);
      return;
    }
    if (index > 0) {
      const newNode = new ListNode(data);
      let position = index;
      let current = this.head;
      while (position > 1) {
        current = current?.nextNode;
        position -= 1;
      }
      let previousNode = current;
      let nextNode = current?.nextNode;

      if (previousNode) previousNode.nextNode = newNode;
      newNode.nextNode = nextNode;
      return;
    }

    return new Error("index not available for insert");
    // return this;
  }

  /**
   * Fines a Node at a specified index
   * @param index node  on LinkedList to find
   * @returns {ListNode} Node at the specifed index
   */
  public nodeAtIndex(index: number): ListNode {
    if (index == 0) return this.head as ListNode;

    let current = this.head;
    let position = 0;
    while (position < index) {
      current = current?.nextNode;
      position += 1;
    }
    return current as ListNode;
  }
  /**
   * Removes a Node from the linked list at a specified index
   * removal takes O(1) but finding the node is O(n) time
   * @param key location on LinkedList to insert New Node
   * @returns `ListNode` or `undefined` if node not found
   */
  public remove(key: number = 0): ListNode | undefined {
    let current = this.head;
    let previousNode: ListNode | undefined;
    let isFound = false;
    while (current && !isFound) {
      if (current.data === key && current === this.head) {
        isFound = true;
        this.head = current.nextNode;
      } else if (current.data == key) {
        isFound = true;
        if (previousNode) previousNode.nextNode = current.nextNode;
      } else {
        previousNode = current;
        current = current.nextNode;
      }
    }
    return current;
  }
  /**
   * Searches for the firstNode containing data that matches key
   * @param key Number
   * @returns ListNode
   */
  public search(key: number) {
    let current = this.head;
    while (current) {
      if (current.data === key) {
        return current;
      } else {
        current = current.nextNode;
      }
    }
    return undefined;
  }
}

const list = new LinkedList();
// console.log(list.isEmpty);
// // const node1 = new ListNode(10);
// // list.add(1);
// list.add(1);
// list.add(2);
// list.add(3);
// console.log(list.isEmpty);

// console.log(list.toString);
// console.log(list.insert(21, 1));

// console.log(list.toString);
// console.log(list.remove(5));
// console.log(list.toString);

// console.log(list.search(3));
