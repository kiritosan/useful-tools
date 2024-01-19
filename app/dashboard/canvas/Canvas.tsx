import React, { Suspense, useEffect, useRef, useState } from "react";

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
    console.log("🚀 ~ handleClick ~ e:clientX", e.clientX);
    console.log("🚀 ~ handleClick ~ e:clientY", e.clientY);
    console.log("🚀 ~ handleClick ~ e:pageX", e.pageX);
    console.log("🚀 ~ handleClick ~ e:pageY", e.pageY);
    console.log("🚀 ~ handleClick ~ e:screenX", e.screenX);
    console.log("🚀 ~ handleClick ~ e:screenY", e.screenY);
    console.log("🚀 ~ handleClick ~ e:offsetX", e.offsetX);
    console.log("🚀 ~ handleClick ~ e:offsetY", e.offsetY);
    console.log("🚀 ~ handleClick ~ e:x", e.x);
    console.log("🚀 ~ handleClick ~ e:y", e.y);
  };

  const onMouseDown = (e) => {
    e.preventDefault();
    const { pageX, pageY } = e;
    const _downPageX = pageX;
    const _downPageY = pageY;

    const onMouseMove = (e) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();

      const leftCenter = rect.left + rect.width / 2;
      const topCenter = rect.top;

      const { pageX, pageY } = e;

      let x = pageX - leftCenter;
      let y = pageY - _downPageY;
      console.log("🚀 ~ onMouseMove ~ x:", x);
      console.log("🚀 ~ onMouseMove ~ y:", y);
    };

    const onMouseUp = (e) => {
      e.preventDefault();
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);

      //   requestAnimationFrame(run);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.addEventListener("mousedown", onMouseDown);
    }
    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener("mousedown", onMouseDown);
      }
    };
  }, []);

  return (
    // width height dynamic
    <>
      {/* <Suspense fallback={<p>Loading feed...</p>}> */}
      <canvas
        id="canvas"
        ref={canvasRef}
        width={width}
        height={height}
        style={{
          width,
          height,
        }}
        className="border-double border-8 border-sky-500"
      ></canvas>
      {/* </Suspense> */}
    </>
  );
};

export default Canvas;
