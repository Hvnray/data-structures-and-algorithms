/**Binary Search for a number in a numbers array
 * for binary search to work; list has to be sorted
 * @param list Numbers Array to search
 * @param target number to find in array
 * @returns the `index` location of number in array if found else returns -1
 */
function binarySearch(list: Array<number>, target: number): number {
  let firstIndex = 0;
  let lastIndex = list.length - 1;

  /** measures the space complexity of operation */
  let runs = 1;
  while (firstIndex <= lastIndex) {
    /** round down(floor) the first + last index dive by 2 to get middle index */
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

    /** return middleIndex if list middleIndex equal to target(best case) */
    if (list[middleIndex] == target) {
      console.log("Operation ran: ", runs, " times");
      return middleIndex;
    }
    /** else check if number at middle index is less  than target then set middleIndex to firstIndex else set to lastIndex */
    if (list[middleIndex] < target) {
      firstIndex = middleIndex + 1;
    } else {
      lastIndex = middleIndex - 1;
    }
    runs++;
  }
  console.log("Operation ran: ", runs, " times");
  // did not fine the value
  return -1;
}

const arr = [...Array(100).keys()];
// const arr: Array<Number> = [...Array(10000)].map((_, i) => i + 1)
console.log("arr[1000]", arr[1000]);

function findIndexofValue(value: number) {
  const search = binarySearch(arr, value);
  return search == -1
    ? `The search Value ${value} is not in the array`
    : `The search Value ${value} is in the array[index]: ${search}`;
}
console.log(findIndexofValue(474));
