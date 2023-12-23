import { describe, it, expect } from 'vitest';
import bubbleSort from './bubble';


const originArr = [3,1,3,5,7,3]

describe('sort functions:', ()=> {
// TODO: 檢驗兩個對象是同一個對象
  it('bubble sort: pure and correct', ()=> {

    const sortedToTestArr = bubbleSort(originArr);
    const sortedArr = originArr.slice().sort((a,b)=> a-b);

    expect(sortedToTestArr).toStrictEqual(sortedArr);
    // expect(originArr).toBe(originArr);
  });

  // it('xx sort', ()=> {
  //   expect(false).toBe(false);
  // });

  // it("common matchers test", () => {
  //   let x = 20;
  //   let obj1 = { name: "leon" };
  //   let obj2 = { name: "leon" };
  //   let obj3 = { name: "leon", age: undefined };

  //   expect(20).toBe(20);
  //   expect(obj1).not.toBe(obj2);
  //   expect(obj1).toEqual(obj2);
  //   expect(obj1).toEqual(obj3);
  //   expect(obj1).not.toStrictEqual(obj3);
  // });

});