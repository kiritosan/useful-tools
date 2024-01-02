'use client';

import React, { useEffect } from 'react';
import './index.css';

const pointerEvents = () => {

  const handler = (e) => {
    const dom = document.querySelector('.moveBlock')
    if (dom && dom.style) {
      dom.style.position = 'absolute';
    }
    console.log("🚀 ~ file: page.tsx:30 ~ handler ~ dom?.style:", dom?.style?.position)

    const moveDom = (e) => {
      const rect = dom?.getBoundingClientRect()


      let x = e.clientX
      let y = e.clientY

      if (dom && dom.style) {
        dom.style.left = `${x - rect.width / 2}px`
        dom.style.top = `${y - rect.height / 2}px`
      }

      console.log("🚀 ~ file: page.tsx:17 ~ moveDom ~ rect:", rect, x, y)
    }

    const onMove = (e) => {
      moveDom(e)
    }

    document.addEventListener('pointermove', onMove)

    const stopListenMove = () => {
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerup', stopListenMove)
    }

    document.addEventListener('pointerup', stopListenMove)
  }

  useEffect(() => {
    // const dom = document.querySelector('.moveBlock')
    document.addEventListener('pointerdown', handler)
    // dom?.addEventListener('ondragstart', () => { return false })
    document.ondragstart = () => false
  }, []);

  return (
    <div>
      <div
        className='moveBlock'
      ></div>
    </div>
  );
};

export default pointerEvents;
