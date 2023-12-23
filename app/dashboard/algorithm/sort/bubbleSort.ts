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
 *
 * @returns {Array<number>} returns a new sorted array of number
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

export default bubbleSort;
