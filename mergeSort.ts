/**
 * Divide the unsorted array at midpoint into sub arrays
 * runs in logarithmic time O(log n)
 * Returns two sub arrays - left and right
 * @param {Array.<number>} array array
 * @returns  `Array<number>` - two numbers array
 */
function split(array: Array<number>): Array<Array<number>> {
  const midpoint = Math.floor(array.length / 2);
  const left = array.slice(0, midpoint);
  const right = array.slice(midpoint);

  // OR const left = array.splice(0, array.length / 2); // the first half of the array
  // const right = array;

  // console.log("split: [left]: ", left, " [right]: ", right);
  return [left, right];
}

/**
 * Merges twos array at sorting them in the process
 * Returns a new array
 * runs in linear time O(n)
 * @param left number array
 * @param right number array
 * @returns merged Array
 */
function merge(left: Array<number>, right: Array<number>): Array<number> {
  const array: Array<number> = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift() as number);
    } else {
      array.push(right.shift() as number);
    }
  }

  // use spread operator and create a new array, combining the three arrays
  const finalArray: Array<number> = [...array, ...left, ...right];

  // console.log("array: ", array);
  // console.log("finalArray : ", finalArray);

  return finalArray;
}

/**
 * Sorts an array in ascending order
 * Returns a new sortedList
 * Total runtime is linear times logarithmic time O(n log n)
 * @param {*} array
 */
function mergeSort(array: Array<number>): Array<number> {
  //Divide: Find the midpoint of the array and divided into sub-arrays
  //Conquer: Recursively sort the sub-arrays created in previous step
  //Combine: Merge the sorted sub arrays created

  if (array.length <= 1) return array;

  //Divide: Find the midpoint of the array and divided into sub-arrays
  const [leftHalf, rightHalf] = split(array);

  //Conquer: Recursively sort the sub-arrays created in previous step
  const left =mergeSort(leftHalf)
  const right =mergeSort(rightHalf)

  //Combine: Merge the sorted sub arrays created
  return merge(left,right);
}

function isSorted(array: Array<number>): boolean {
  if (array.length <= 1) return true;
  return array[0] < array[1] && isSorted(array.slice(1));
}

const alist = [54, 32, 93, 17, 77, 31, 44, 55, 20, 18];

// console.log("alist: ", alist);

const sortedList = mergeSort(alist);
console.log("isSorted:", isSorted(sortedList));
console.log("alist isSorted:", isSorted(alist));
console.log("sortedList: ", sortedList);
