import React, { useState } from 'react';
import { FC } from 'react';
import { Button } from 'antd'
import './index.css'

import DataItem from './DataItem';

interface ViewerProps {
    // 假设data为arr
    snapshots: number[][];
}

const Viewer: FC<ViewerProps> = ({
    snapshots,
}) => {
    const [index, setIndex] = useState(0);

    const onPrevClick = () => {
        if (index === 0) return;
        setIndex(index - 1)
    }
    const onNextClick = () => {
        if (snapshots.length === index + 1) return;
        setIndex(index + 1)
    }
    return (
        <>
            <div
                className='viewer'
            // className='md mx-auto h-96 flex items-center justify-center bg-var(--main-color)'
            >
                {snapshots[index].map((value, index) => {
                    return <DataItem
                        key={index}
                    >
                        {value}
                    </DataItem>
                })}
            </div>
            <div className="md mx-auto flex justify-center items-center mt-4">
                <div className='flex space-x-6 justify-center items-center'>
                    <Button
                        onClick={onPrevClick}
                    >Prev</Button>
                    <div>{index}</div>
                    <Button
                        onClick={onNextClick}
                    >Next</Button>
                </div>
            </div>
        </>
    );
};

export default Viewer;