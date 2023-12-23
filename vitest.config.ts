// import react from "@vitejs/plugin-react";
// import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";
import { resolve } from "path";

// https://juejin.cn/post/7158478077670981662

// 让vite支持react测试 @vitejs/plugin-react
// node中的dom环境 jsdom
// react测试套件 @testing-library/react
// 引入jest-dom的matchers来扩展vite的测试方法 @testing-library/jest-dom

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), tsconfigPaths()],
  test: {
    // globals: true,
    // environment: "jsdom",
    setupFiles: ["./vitest-setup.ts"],
  },

  resolve: {
    alias: {
      "@": resolve(__dirname, "."),
    },
  },
});
