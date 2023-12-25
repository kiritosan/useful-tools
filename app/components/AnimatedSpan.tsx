import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './AnimatedSpan.css'; // 导入样式文件

const AnimatedSpan = () => {
    const [show, setShow] = useState(false);

    const handleDrag = (event) => {
        setShow(event.pageX > 200); // 根据位置判断是否显示
    };

    return (
        <div
            style={{
                height: 100
            }}
        >
            <CSSTransition
                in={show}
                timeout={300}
                classNames="animated-span"
                unmountOnExit
            >
                <span className="span">拖动我</span>
            </CSSTransition>
            <div
                style={{
                    height: 100,
                }}
                className="drag-area"
                onMouseMove={handleDrag}
            // onMouseLeave={() => setShow(false)}
            />
        </div>
    );
};

export default AnimatedSpan;