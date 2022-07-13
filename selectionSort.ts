import { generateDummyJson, shuffleArray, Person } from "./utils.js";

const json100 = generateDummyJson(5).map((r) => r.randomNumber);
// console.table(json100);
shuffleArray(json100);
console.table(json100);

/**
 * Searchs an array for smallest number and returns the index location
 * @param unsortedList unsorted array
 * @returns `index` of smallest value in the unsorted array
 */
function findMinimumValueIndex<T>(unsortedList: Array<T>): number {
  let minIndex: number = 0;
  let index: number = 0;
  const len = unsortedList.length;
  for (index; index < len; index++) {
    if (unsortedList[index] < unsortedList[minIndex]) {
      minIndex = index;
    }
  }
  return minIndex;
}

/**
 * Takes in an unsorted Array, sorts it and returns a new sorted array
 * @param unsortedList array to sort
 * @returns `sortedList` the sorted array
 */
function selectionSort<T>(unsortedList: Array<T>): Array<T> {
  // performance.mark('start')
  /** `sortedList` sorted array container */
  const sortedList: Array<T> = [];
  const listLen = unsortedList.length;
  let index = 0;
  let indexWithMinValue: number;
  console.log(unsortedList, " ", sortedList);
  for (index; index < listLen; index++) {
    // const element = array[index];
    indexWithMinValue = findMinimumValueIndex<T>(unsortedList);
    sortedList.push(unsortedList.splice(indexWithMinValue, 1)[0]);
    console.log(unsortedList, " ", sortedList);
  }
  
  // console.log(performance.measure("measure from navigation start to now"));
  return sortedList;
}

console.table(selectionSort(json100));
