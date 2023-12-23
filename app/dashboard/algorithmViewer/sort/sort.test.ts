import { describe, it, expect } from "vitest";
import { bubbleSort, getBubbleSortSnapshots } from ".";

describe("sort functions:", () => {
  it("bubble sort: pure and correct", () => {
    const originArr = [3, 1, 3, 5, 7, 3];

    const sortedToTestArr = bubbleSort(originArr);
    const sortedArr = originArr.slice().sort((a, b) => a - b);

    // check whether sort is correct
    expect(sortedToTestArr).toStrictEqual(sortedArr);
    // check whether the function is pure
    expect(sortedToTestArr).not.toBe(originArr);
  });

  describe("getBubbleSortSnapshots", () => {
    it("should return an array of snapshots for a sorted array", () => {
      const sortedArr = [1, 2, 3, 4, 5];
      const snapshots = getBubbleSortSnapshots(sortedArr);
      expect(snapshots).toEqual([
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
      ]);
    });

    it("should return an array of snapshots for an unsorted array", () => {
      const unsortedArr = [5, 4, 3, 2, 1];
      const snapshots = getBubbleSortSnapshots(unsortedArr);
      expect(snapshots).toEqual([
        [5, 4, 3, 2, 1],
        [4, 5, 3, 2, 1],
        [4, 3, 5, 2, 1],
        [4, 3, 2, 5, 1],
        [4, 3, 2, 1, 5],
        [3, 4, 2, 1, 5],
        [3, 2, 4, 1, 5],
        [3, 2, 1, 4, 5],
        [2, 3, 1, 4, 5],
        [2, 1, 3, 4, 5],
        [1, 2, 3, 4, 5],
      ]);
    });

    // 暂时不处理空的情况
    // it("should return an array of snapshots for an empty array", () => {
    //   const emptyArr = [];
    //   const snapshots = getBubbleSortSnapshots(emptyArr);
    //   expect(snapshots).toEqual([[]]);
    // });

    it("should return an array of snapshots for an array with one element", () => {
      const singleElementArr = [1];
      const snapshots = getBubbleSortSnapshots(singleElementArr);
      expect(snapshots).toEqual([[1]]);
    });

    it("should return an array of snapshots for an array with two elements", () => {
      const twoElementsArr = [2, 1];
      const snapshots = getBubbleSortSnapshots(twoElementsArr);
      expect(snapshots).toEqual([
        [2, 1],
        [1, 2],
      ]);
    });

    it("should return an array of snapshots for an array with negative numbers", () => {
      const negativeNumbersArr = [-5, 4, -3];
      const snapshots = getBubbleSortSnapshots(negativeNumbersArr);
      expect(snapshots).toEqual([
        [-5, 4, -3],
        [-5, 4, -3],
        [-5, -3, 4],
        [-5, -3, 4],
      ]);
    });
  });
});
