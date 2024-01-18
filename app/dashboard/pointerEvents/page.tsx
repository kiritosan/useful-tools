"use client";

import React, { useEffect } from "react";
import "./index.css";

const pointerEvents = () => {
  const onPointerdown = (e) => {
    console.log("🚀 ~ file: page.tsx:9 ~ onPointerdown ~ e:", e);
    let xDiff, yDiff;
    const dom = document.querySelector(".moveBlock");
    dom?.setPointerCapture(e.pointerId);

    if (dom && dom.style) {
      dom.style.position = "absolute";
    }

    const rect = dom?.getBoundingClientRect();
    if (dom) {
      let centerX = rect.left + rect.width / 2;
      let centerY = rect.top + rect.height / 2;
      let x = e.clientX;
      let y = e.clientY;
      xDiff = x - centerX;
      yDiff = y - centerY;
    }

    const moveDom = (e) => {
      const rect = dom?.getBoundingClientRect();

      let x = e.clientX;
      let y = e.clientY;

      if (dom && dom.style) {
        dom.style.left = `${x - rect.width / 2 - xDiff}px`;
        dom.style.top = `${y - rect.height / 2 - yDiff}px`;
      }
    };

    const onMove = (e) => {
      moveDom(e);
    };

    dom?.addEventListener("pointermove", onMove);

    const stopListenMove = () => {
      dom?.removeEventListener("pointermove", onMove);
      dom?.removeEventListener("pointerup", stopListenMove);
    };

    dom?.addEventListener("pointerup", stopListenMove);
  };

  useEffect(() => {
    const dom = document.querySelector(".moveBlock");
    dom?.addEventListener("pointerdown", onPointerdown);
    // dom?.addEventListener('ondragstart', () => { return false })
    if (dom) {
      dom.ondragstart = () => false;
    }
  }, []);

  return (
    <div>
      <div className="moveBlock"></div>
    </div>
  );
};

export default pointerEvents;
