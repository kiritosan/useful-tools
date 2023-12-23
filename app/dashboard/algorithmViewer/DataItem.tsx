import React from 'react';
import { FC } from 'react'

interface DataItemProps {
}

const DataItem: FC<any> = (props) => {
    return (
        <span
            className='data-item'
            {...props}
        />
    );
};

export default DataItem;