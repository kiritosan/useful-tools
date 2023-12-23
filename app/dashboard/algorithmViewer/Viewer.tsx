import React from 'react';
import { FC } from 'react';
import './index.css'
import DataItem from './DataItem';

interface ViewerProps {
    // 假设data为arr
    data: number[];
    onRun: () => void;
    width: number;
    height: number;
}

const Viewer: FC<ViewerProps> = ({
    data,
    onRun,
    width,
    height,
}) => {

    const getContainerStyle = (width: number, height: number) => {
        return {
            width: `${width}px`,
            height: `${height}px`,
        }
    }

    return (
        <div
            className='viewer'
            style={{
                ...getContainerStyle(width, height)
            }}
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