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

    return (
        <>
            <div
                className='viewer'
            >
                {snapshots[index].map((value, index) => {
                    return <DataItem
                        key={index}
                    >
                        {value}
                    </DataItem>
                })}
            </div>
            <div className="controller">
                <Button
                    onClick={() => setIndex(index - 1)}
                >Prev</Button>
                <div>{index}</div>
                <Button
                    onClick={() => setIndex(index + 1)}
                >Next</Button>
            </div>
        </>
    );
};

export default Viewer;