import { Button, Card, Space } from 'antd';
import CodeDisplay from './CodeDisplay';
import { useEffect, useState } from 'react';
import ClipboardJS from 'clipboard';

interface InputValues {
    moduleName: string;
    typeName: string;
    comment: string;
    initialValueKey: string;
    initialValueValue: string;
}

interface Props {
    inputValues: InputValues;
}

interface CardArr {
    title: string,
    code: string,
    show: boolean
}

const CodeDisplayComponent = ({ inputValues }: Props) => {
    const [cardArr, setCardArr] = useState<CardArr[]>([]);
    const { typeName, comment, initialValueKey, initialValueValue } = inputValues

    const reducerName = `${typeName || '$$custom$$'}Reducer`
    const actionName = typeName
    ? `set${typeName.charAt(0).toUpperCase()}${typeName.slice(1)}`
    : `set$$CustomAction$$`
    const stateName = `${typeName || '$$custom$$'}State`

    const typeNameWrapper = typeName?.replace(/([A-Z])/g, '_$1').toUpperCase() || '$$TYPE_NAME$$'
    const commentWrapper = comment || '$$中文注释$$'
    const initialValueKeyWrapper = initialValueKey || '$$key$$'
    const initialValueValueWrapper = initialValueValue || '$$value$$'

    const typeTemplate = `const ${typeNameWrapper} = "${typeNameWrapper}"; // ${commentWrapper}`
    const reducerTemplate = `//start ${commentWrapper}
const ${stateName} = {
    ${initialValueKeyWrapper}: ${initialValueValueWrapper}
}

const ${reducerName} = (initialValue = ${stateName}, action) => {
    switch (action.type) {
        case ${typeNameWrapper}:
            return {
                ${initialValueKeyWrapper}: action.payload
            }
        default:
            return initialValue
    }

}
//end ${commentWrapper}`
    const actionTemplate = `//start ${commentWrapper}
const ${actionName} = (${initialValueKeyWrapper}) => {
    return async (dispatch) => {
        dispatch({
            type: ${typeNameWrapper},
            payload: ${initialValueKeyWrapper}
        })
    }
}
//end ${commentWrapper}`

    // 输入一旦变化，三个卡片重新显示
    useEffect(() => {
        setCardArr([
            {
                title: 'Type',
                code: typeTemplate,
                show: true
            },
            {
                title: 'Reducer',
                code: reducerTemplate,
                show: true
            },
            {
                title: 'Action',
                code: actionTemplate,
                show: true
            },
        ])
    }, [typeTemplate, reducerTemplate, actionTemplate, inputValues]);

    const handleDestroyComponent = (title: string) => {
        const newCardArr = [...cardArr]
        newCardArr.filter(item => item.title === title)[0].show = false

        setCardArr(newCardArr)
    }

    useEffect(() => {
        const clipboard = new ClipboardJS('.copy-button');

        return () => {
            clipboard.destroy();
        };
    }, []);

    return (
        <Space
            direction="vertical"
            size="middle"
            style={{
                display: 'flex',
            }}
        >
            {
                cardArr.map(({ title, code, show }) =>
                    show
                    && <Card
                    className='text-center'
                    title={title}
                    size="small"
                    key={title}>
                        <Button
                            className="copy-button"
                            data-clipboard-text={code}
                            onClick={() => handleDestroyComponent(title)}
                        >Copy</Button>
                        <CodeDisplay
                            code={code}
                            language="javascript"
                        />
                    </Card>)
            }
        </Space>
    );
};

export default CodeDisplayComponent;