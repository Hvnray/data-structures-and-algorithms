import LinkedList, { ListNode } from "./linkedList";

/**
 * Divide the unsorted linkedList at midpoint into sub linkedLists
 * runs in logarithmic time O(log n)
 * Returns two sub `linkedList` in array - `left` and `right`
 *
 * @param {LinkedList} list - linkedList to split
 * @return `Array<LinkedList>` - Array of two sub linkLists
 */
function split(list: LinkedList): Array<LinkedList | undefined> {
  // Divide the unsorted list at midpoint
  let leftHalf: LinkedList | undefined;
  let rightHalf: LinkedList | undefined;
  if (list == null || list.head == undefined) {
    leftHalf = list;
    rightHalf = undefined;
    return [leftHalf, rightHalf];
  } else {
    const middle = Math.ceil(list.size / 2);
    const middleNode = list.nodeAtIndex(middle - 1);
    leftHalf = list;
    rightHalf = new LinkedList();
    rightHalf.head = middleNode.nextNode;
    middleNode.nextNode = undefined;
    return [leftHalf, rightHalf];
  }
}

/**
 * Merges two linked list by sorting data in the ListNodes
 * - Recursively divide the linked list into sublists containing a single node
 * - Repeatedly merge the sublists to producesorted sublists until one list remains
 *
 * @param {LinkedList} left - left linked list
 * @param {LinkedList} right - right linked list
 * @return {LinkedList} sorted Linked List
 */

function merge(left: LinkedList, right: LinkedList): LinkedList {
  /**
   * Create a new linkedlist that contins node from
   * merging left and right linked lists
   */
  const merged = new LinkedList();
  /**  create a dummy head */
  merged.add(0);

  /** set current to the head of the linked list */
  let current = merged.head as ListNode;

  /** Obtain head noodes for left and right linked list */

  let leftHead = left.head;
  let rightHead = right.head;

  /** Iterate over left and right until we reach the tail node */
  while (leftHead || rightHead) {
    /** If the head node of left is undefined, we're past the tail
     * Add the node from the right to merged linked list
     */
    if (leftHead == undefined) {
      current.nextNode = rightHead;
      /** call next on right to set loop condition to false */
      rightHead = rightHead?.nextNode;
    } else if (rightHead == undefined) {
      /** If the head node of right is undefined, we're past the tail
       * Add the node from the right to merged linked list
       */
      current.nextNode = leftHead;
      /** call next on left to set loop condition to false */
      leftHead = leftHead?.nextNode;
    } else {
      /**
       * Not at either tail node
       * Obtain node data to perform comparison operations
       */
      let leftData = leftHead.data;
      let rightData = rightHead.data;
      // If data on left is less than right, set current to left node
      if (leftData < rightData) {
        current.nextNode = leftHead;
        // move left head to next node
        leftHead = leftHead.nextNode;
      }else{
        // If data on left is greater than right, set current to right node
        current.nextNode = rightHead;
        // move right head to next node
        rightHead = rightHead.nextNode;
        
      }
    }
    // move current to next node
    current= current.nextNode as ListNode
  }
  // discard fake head and set first merged node as head
  let head = merged.head?.nextNode
  merged.head = head
  return merged
}

/**
 * Sorts a linked list in ascending order
 * - Recursively divide the linked list into sublists containing a single node
 * - Repeatedly merge the sublists to producesorted sublists until one list remains
 *
 * @param {LinkedList} list - linked list
 * @return {LinkedList} sorted Linked List
 */
function mergeSort(list: LinkedList): LinkedList {
  //Divide: Find the midpoint of the array and divided into sub-arrays
  //Conquer: Recursively sort the sub-arrays created in previous step
  //Combine: Merge the sorted sub arrays created
  if (list.size == 1 || list.head == undefined) return list;

  /** Divide: Find the midpoint of the array and divided into sub-arrays */
  const [leftList, rightList] = split(list);
  
  //Conquer: Recursively sort the sub-arrays created in previous step
  const left = mergeSort(leftList as LinkedList);
  const right = mergeSort(rightList as LinkedList);

  //Combine: Merge the sorted sub arrays created
  return merge(left, right);
}
const link = new LinkedList();

link.add(10);
link.add(40);
link.add(20);
link.add(15);
link.add(35);
link.add(7);
link.add(97);

console.log(link.toString);
console.log(mergeSort(link).toString);
