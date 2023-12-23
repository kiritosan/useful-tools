// interface BubbleSort {
//   (arr: Array<number>): Array<number>;
// }

// type BubbleSort = (arr: Array<number>) => Array<number>;

/**
 * requires:
 * an array of number
 *
 * effects:
 * returns a new sorted array of number
 */

/**
 * sort an array of number with bubble sort
 * @returns returns a new sorted array of number
 */
const bubbleSort: (arr: Array<number>) => Array<number> = (
  arr: Array<number>
): Array<number> => {
  // copy origin list to make the function pure
  const sortedArr = [...arr];
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length - i - 1; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        const temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
      }
    }
  }

  return sortedArr;
};

/**
 * get snapshots of each step of sort
 * @returns returns an array of snapshots
 */
const getBubbleSortSnapshots: (arr: Array<number>) => Array<Array<number>> = (
  arr: Array<number>
): Array<Array<number>> => {
  const snapshots = [[...arr]]
  // copy origin list to make the function pure
  const sortedArr = [...arr];
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length - i - 1; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        const temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
      }
      snapshots.push([...sortedArr]);
    }
  }

  return snapshots;
};

export default bubbleSort;

export {
  getBubbleSortSnapshots
}
