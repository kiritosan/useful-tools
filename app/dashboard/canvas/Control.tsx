import React from "react";
import { Button } from "antd";

const Control = ({ width, height }: { width: number; height: number }) => {
  const onClear = () => {
    // 清除画布
    (window as any).ctx.clearRect(0, 0, width, height);
  };

  return (
    <>
      <Button onClick={onClear}>clear</Button>
    </>
  );
};

export default Control;
