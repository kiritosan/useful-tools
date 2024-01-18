import React, { useState } from "react";

const Canvas = () => {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);

  return (
    // width height dynamic
    <canvas
      id="canvas"
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
