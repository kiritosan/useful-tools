import { HotTable } from '@handsontable/react';
// import 'handsontable/dist/handsontable.full.min.css';

const HoTable = () => {

    const settings = {
        data: [
            ['', 'Tesla', 'Volvo', 'Toyota', 'Ford'],
            ['2019', 10, 11, 12, 13],
            ['2020', 20, 11, 14, 13],
            ['2021', 30, 15, 12, 13]
        ],
        rowHeaders: true,
        colHeaders: true,
        width: "100%",
        height: "auto",
        autoWrapRow: true,
        autoWrapCol: true,
        licenseKey: "non-commercial-and-evaluation", // for non-commercial use only
    }

    return (
        <div>
            <HotTable
                settings={settings}
                stretchH='last'
            />
        </div>
    );
};

export default HoTable;