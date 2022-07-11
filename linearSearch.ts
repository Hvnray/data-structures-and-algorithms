/**
 * Linear Search Algorithm example
 * o(n) time complexity
 * @param list numbers Array to search
 * @param target number to find in array
 * @returns the `index` location of number in array if found else returns -1
 */
function linearSearch(list: Array<number>, target: number) {
  //Returns the Index position of target if found else none
  let index: number;
  for (index = 0; index < list.length; index++) {
    if (target === list[index]) return index;
  }
  return -1;
}
/**
 * Examples
 */
console.log(linearSearch([3, 6, 63, 17], 4));
console.log(linearSearch([27, 3, 2, 6, 7, 13], 7));
