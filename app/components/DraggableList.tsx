import React, { useState } from 'react';
import { useSprings, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { CSSTransition } from 'react-transition-group';
import './AnimatedSpan.css'; // 导入样式文件

const items = ['Item 1', 'Item 2', 'Item 3'];

const DraggableList = () => {
    const [springs, set] = useSprings(items.length, (index) => ({
        y: index * 100,
        zIndex: 1,
    }));

    const bind = useDrag(({ args: [originalIndex], movement: [, y], down }) => {
        const curIndex = Math.round((originalIndex * 100 + y) / 100);
        const newY = curIndex * 100;

        set((index) => {
            if (index === originalIndex) {
                return { y: down ? newY : originalIndex * 100, zIndex: 1 };
            }
            if (index === curIndex) {
                return { y: originalIndex * 100, zIndex: 1 };
            }
            return { y: index * 100, zIndex: 1 };
        });
    });

    return (
        <ul>
            {
                springs.map(({ y, zIndex }, index) => (
                    <animated.li
                        key={index}
                        {...bind(index)}
                        style={{
                            zIndex,
                            transform: y.to((y) => `translate3d(0,${y}px,0)`)
                        }}
                    >
                        {items[index]}
                    </animated.li>
                ))
            }
        </ul>
    );
};

export default DraggableList;