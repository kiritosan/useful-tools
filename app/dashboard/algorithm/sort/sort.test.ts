import { describe, it, expect } from 'vitest';
import bubbleSort from './bubble';


// const originArr = [3,1,3,5,7,3]
const originArr = [1,2]

describe('sort functions:', ()=> {
  it('bubble sort: pure and correct', ()=> {

    const sortedToTestArr = bubbleSort(originArr);
    const sortedArr = originArr.slice().sort((a,b)=> a-b);

    // check whether sort is correct
    expect(sortedToTestArr).toStrictEqual(sortedArr);
    // check whether the function is pure
    expect(sortedToTestArr).not.toBe(originArr);
  });

  // it('xx sort', ()=> {
  //   expect(false).toBe(false);
  // });

});