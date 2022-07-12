import { generateDummyJson, shuffleArray, Person } from "./utils.js";

const json100 = generateDummyJson(10);
console.table(json100);
shuffleArray(json100);
console.table(json100);

/**
 * Checks if a given array is sorted ascending by a given property key `prop`
 *
 * has a linear time complexity O(n)
 *
 * uses a constant space complexity O(1)
 *
 * @param list -array to check if Sorted
 * @param prop - property key to check if array is sorted by
 * @returns ```boolean``` true if sorted else false
 */
function isSorted(list: Array<Person>, prop: "randomNumber" | "id" = "id") {
  // we want to run the loop on list minus the last array index cause no vlue to compare with
  const len = list.length - 1;
  // let index = 0;
  for (let index = 0; index < len; index++) {
    // console.log('list[index]',list[index])
    if (list[index][prop] > list[index + 1][prop]) return false;
  }
  return true;
}
/**
 * Randomly shuffles the array until its sorted
 *
 * has a very bad time complexity cause it's random
 *
 * uses a constant space complexity O(1)
 *
 * @param list -array to check if Sorted
 * @returns ```Array<Person>``` once it sorts suscessfully
 */
function bogoSort(list: Array<Person>): Array<Person> {
  let attempts = 0;
  while (!isSorted(list)) {
    shuffleArray(list);
    attempts += 1;
  }
  console.log("it shuffled: ", attempts, " times");
  return list;
}


// console.log("is Json sorted?: ", isSorted(json100, "id"));
// console.log("is Json sorted?: ", );
console.table(bogoSort(json100))
