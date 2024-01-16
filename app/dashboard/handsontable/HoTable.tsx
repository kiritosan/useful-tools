import { HotTable } from '@handsontable/react';
import { registerRenderer, textRenderer } from 'handsontable/renderers';
import { useEffect, useRef, useState } from 'react';
// import 'handsontable/dist/handsontable.full.min.css';

let timerId: any;

const HoTable = () => {
    const hotRef = useRef(null);
    const [data, setData] = useState([
        ['year', 'Tesla', 'Volvo', 'Toyota', 'Ford'],
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
    registerRenderer('customStylesRenderer', (hotInstance, TD, ...rest) => {
        textRenderer(hotInstance, TD, ...rest);

        TD.style.fontWeight = 'bold';
        TD.style.color = 'green';
        TD.style.background = '#d7f1e1';
    });

    const customRender = (
        instance: any,
        td: HTMLTableCellElement,
        // row,
        // col,
        // prop,
        // value,
        // cellProperties,
        ...rest: any[]
    ) => {
        textRenderer(instance, td, ...rest);

    }

    useEffect(() => {
        // if (!hotRef.current) {
        //     return
        // }
        (window as any).hot = hotRef.current?.['hotInstance'];
    }, []);

    return (
        <div>
            <HotTable
                ref={hotRef}
                className="custom-table"
                cell={[
                    {
                        row: 0,
                        col: 0,
                        className: 'custom-cell',
                        // renderer: 'customStylesRenderer',
                        renderer: customRender,
                    },
                ]}
                data={data}
                colHeaders
                rowHeaders
                width={'100%'}
                height={'auto'}
                stretchH={'last'}
                autoWrapRow
                autoWrapCol
                afterChange={(changes, source) => {
                    if (source !== 'loadData') {
                        console.log('changes', changes);
                        console.log("🚀 ~ HoTable ~ source:", source)
                    }
                }}
                contextMenu
                licenseKey={'non-commercial-and-evaluation'}
            />
        </div>
    );
};

export default HoTable;