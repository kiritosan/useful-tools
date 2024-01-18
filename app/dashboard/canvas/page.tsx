"use client";

import { useEffect, useRef, useState } from "react";
import Canvas from "./Canvas";
import Control from "./Control";
import { Divider } from "antd";

export default function CanvasWrapper() {
  const wrapperRef = useRef(null);
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);

  const setWH = () => {
    setWidth(wrapperRef.current?.["clientWidth"] ?? 500);
    setHeight(wrapperRef.current?.["clientHeight"] ?? 500);
  };

  const onresize = () => {
    setWH();
  };

  const bindResize = () => {
    window.addEventListener("resize", onresize, false);
  };

  useEffect(() => {
    bindResize();
    // get width and height of main element and pass to Canvas component
    setWH();

    return () => {
      window.removeEventListener("resize", onresize, false);
    };
  }, []);

  return (
    <>
      <Control width={width} height={height} />
      <Divider />
      <main
        className="flex flex-col items-center justify-between"
        ref={wrapperRef}
      >
        <Canvas width={width} height={height} />
      </main>
    </>
  );
}
