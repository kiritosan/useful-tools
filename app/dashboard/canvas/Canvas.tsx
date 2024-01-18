import React, { useEffect, useRef, useState } from "react";

// type CanvasProps = ({ width: number, height: number }) => any;

const Canvas = ({ width, height }: { width: number; height: number }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      (window as any).ctx = canvasRef.current.getContext("2d");
    }
  }, []);

  return (
    // width height dynamic
    <canvas
      id="canvas"
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        width,
        height,
      }}
    ></canvas>
  );
};

export default Canvas;
