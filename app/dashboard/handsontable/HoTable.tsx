import { HotTable } from '@handsontable/react';
import { useEffect, useState } from 'react';
// import 'handsontable/dist/handsontable.full.min.css';

let timerId: any;

const HoTable = () => {
    const [data, setData] = useState([
        ['', 'Tesla', 'Volvo', 'Toyota', 'Ford'],
        ['2019', 10, 11, 12, 13],
        ['2020', 20, 11, 14, 13],
        ['2021', 30, 15, 12, 13]
    ]);

    // useEffect(() => {
    //     clearInterval(timerId)
    //     timerId = setInterval(() => {
    //         setData([...data])
    //         console.log('1', 1)
    //     }, 1 * 1000);
    // }, []);


    return (
        <div>
            <HotTable
                data={data}
                colHeaders={true}
                rowHeaders={true}
                width={'100%'}
                height={'auto'}
                stretchH={'last'}
                licenseKey={'non-commercial-and-evaluation'}
                autoWrapRow={true}
                autoWrapCol={true}
                afterChange={(changes, source) => {
                    if (source !== 'loadData') {
                        console.log('changes', changes);
                        console.log("🚀 ~ HoTable ~ source:", source)
                    }
                }}
            />
        </div>
    );
};

export default HoTable;