import React from "react";
import { Button } from "antd";

const Control = ({ width, height }: { width: number; height: number }) => {
  const onClear = () => {
    // 清除画布
    (window as any).ctx.clearRect(0, 0, width, height);
  };

  const drawDoubleRect = () => {
    (window as any).ctx.fillStyle = "rgb(200,0,0)";
    (window as any).ctx.fillRect(10, 10, 55, 50);

    (window as any).ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    (window as any).ctx.fillRect(30, 30, 55, 50);
  };

  return (
    <>
      <section className="flex space-x-4">
        <Button onClick={onClear}>clear</Button>
        <Button onClick={drawDoubleRect}>drawDoubleRect</Button>
      </section>
    </>
  );
};

export default Control;
