"use client";

import CodeDisplay from "@/app/components/CodeDisplay";
import { bubbleSort, getBubbleSortSnapshots } from "./sort";
import Viewer from "./Viewer";

const bubbleSortStr = bubbleSort.toString();

const arr = [3, 1, 2, 4, 5, 6, 7, 8];

const algorithmViewer = () => {
  return (
    <div>
      <CodeDisplay code={bubbleSortStr} language={"javascript"} />
      <Viewer snapshots={getBubbleSortSnapshots(arr)} />
    </div>
  );
};

export default algorithmViewer;
