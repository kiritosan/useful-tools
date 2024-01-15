'use client';

import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

import HoTable from './HoTable';

registerAllModules();

const HandsontableWrapper = () => {
    return (
        <div>
            <HoTable />
        </div>
    );
};

export default HandsontableWrapper;
