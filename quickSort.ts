import { generateDummyJson } from "./utils";

/**
 * Quicksort algorithm
 * @description algorithmic function that sorts an array in ascending implementing the quick sort algorithm
 * @param list array of numbers (algorithm implemented to sort through numbers)
 * @returns `list` the sorted array
 */
function quickSort<T>(list: Array<T>): Array<T> {
  /** Base case return the array if lenght is less than one as nothing to sort then exit function */
  if (list.length <= 1) return list;

  /** use the first value as the `pivot` (value to use as a base and compare other array elements) */
  let pivot = list.splice(0, 1)[0];

  /** array to store values less than the pivot value in the array */
  let lessTanPivot: Array<T> = [];

  /** array to store values greater than the pivot value in the array */
  let greaterTanPivot: Array<T> = [];

  /** the list is now without the first index because Array.splice mutates the first array
   * use all values of mutated list is now to be sorted into `lessTanPivot` or `greaterTanPivot`
   */
  /**loop throught the list without pivot */
  for (let index = 0; index < list.length; index++) {
    /** if current element less than pivot element add it to lessTanPivot array */
    if (list[index] <= pivot) {
      lessTanPivot.push(list[index]);
    } else {
      /** if current element greater than pivot element add it to greaterTanPivot array */
      greaterTanPivot.push(list[index]);
    }

    // console.log(listWithoutPivot, " <> pivot[ ", pivot, " ]");
    console.log(lessTanPivot, " <> ", greaterTanPivot);
  }
  /** recursively quicksort the `lessThanPivot` and 'greaterThanPivot` and them merge them into an array with the pivot element at the center of new array */
  return [...quickSort(lessTanPivot), pivot, ...quickSort(greaterTanPivot)];
}

const randomNumber = generateDummyJson(10).map((b) => b.randomNumber);

console.table(randomNumber);
console.table(quickSort(randomNumber));
