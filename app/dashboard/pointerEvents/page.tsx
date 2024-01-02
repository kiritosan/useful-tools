'use client';

import React, { useEffect } from 'react';
import './index.css';

const pointerEvents = () => {

  const handler = (e) => {
    let xDiff, yDiff
    const dom = document.querySelector('.moveBlock')
    if (dom && dom.style) {
      dom.style.position = 'absolute';
    }
    console.log("🚀 ~ file: page.tsx:30 ~ handler ~ dom?.style:", dom?.style?.position)


    const rect = dom?.getBoundingClientRect()
    if (dom) {
      let centerX = rect.left + rect.width / 2
      let centerY = rect.top + rect.height / 2
      let x = e.clientX
      let y = e.clientY
      xDiff = x - centerX
      yDiff = y - centerY
    }

    const moveDom = (e) => {
      const rect = dom?.getBoundingClientRect()

      let x = e.clientX
      let y = e.clientY


      if (dom && dom.style) {
        dom.style.left = `${x - rect.width / 2 - xDiff}px`
        dom.style.top = `${y - rect.height / 2 - yDiff}px`
      }
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
