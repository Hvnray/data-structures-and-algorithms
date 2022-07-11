/**
 * Recursive Binary search Algorithm implementation
 * runs in logarithmic time O(log n)
 * Returns two sub arrays - left and right
 * @param {Array.<number>} list array of numbers
 * @param {number} target number to find within array
 * @returns  {number}`index` location of `target` in given array or -1 if not found
 * @returns 
 */
function recursive_binary_search(list: Array<number>, target: number):number {
  if (list.length === 0) return -1;

  let middleIndex = Math.floor(list.length / 2);

  if (list[middleIndex] === target) return middleIndex;

  if (list[middleIndex] < target) {
    return recursive_binary_search(list.slice(middleIndex + 1), target);
  } else {
    return recursive_binary_search(list.slice(0, middleIndex), target);
  }
}

console.log("value found at index: ", recursive_binary_search([1, 2, 3, 4, 5], 5));
