// import { vi, expect, afterEach } from "vitest";
// import { cleanup } from "@testing-library/react";
// import matchers, {
//   TestingLibraryMatchers,
// } from "@testing-library/jest-dom/matchers";

// // 引入jest-dom的matchers来扩展vite的测试方法 @testing-library/jest-dom

// declare global {
//   namespace Vi {
//     interface JestAssertion<T = any>
//       extends jest.Matchers<void, T>,
//         TestingLibraryMatchers<T, void> {}
//   }
// }
// // 继承 testing-library 的扩展 except
// expect.extend(matchers);
// // 全局设置清理函数，避免每个测试文件手动清理
// afterEach(() => {
//   cleanup();
// });

// https://v3.ice.work/docs/guide/advanced/unit-test/
// import matchers from '@testing-library/jest-dom/matchers';
// import { expect } from 'vitest';

// expect.extend(matchers);
