import React from 'react';
import { FC } from 'react';
import './index.css'
import DataItem from './DataItem';

interface ViewerProps {
    // 假设data为arr
    data: number[];
    onRun: () => void;
}

const Viewer: FC<ViewerProps> = ({
    data,
    onRun,
}) => {

    return (
        <div
            className='viewer'
        >
            {data.map((value, index) => {
                return <DataItem
                    key={index}
                >
                    {value}
                </DataItem>
            })}

        </div>
    );
};

export default Viewer;