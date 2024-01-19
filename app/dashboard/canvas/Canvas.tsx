import React, { useEffect, useRef, useState } from "react";

// type CanvasProps = ({ width: number, height: number }) => any;

const Canvas = ({ width, height }: { width: number; height: number }) => {
  const canvasRef = useRef(null);
  const widthRef = useRef(width);
  const heightRef = useRef(height);

  const drawStraightLine = (e) => {
    const ctx = (window as any).ctx;
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(widthRef.current, heightRef.current);
      ctx.stroke();
    }
  };

  useEffect(() => {
    widthRef.current = width;
    heightRef.current = height;
  }, [width, height]);

  useEffect(() => {
    if (canvasRef.current) {
      (window as any).ctx = canvasRef.current.getContext("2d");
    }
  }, []);

  //   useEffect(() => {
  //     // bind event of draw line
  //     if (canvasRef.current) {
  //       canvasRef.current.addEventListener("click", drawStraightLine);
  //     }
  //   }, []);

  const handleClick = (e) => {
    console.log("🚀 ~ handleClick ~ e:", e);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    // width height dynamic
    <>
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
    </>
  );
};

export default Canvas;
