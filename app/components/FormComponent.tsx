import React from 'react';
import { Button, Col, Form, Input, Row, theme } from 'antd';

interface InputValues {
    typeName: string;
    comment: string;
    initialValueKey: string;
    initialValueValue: string;
}

type SetInputValues = (newValue: InputValues) => void

const FormComponent: React.FC<{ setInputValues: SetInputValues }> = ({ setInputValues }) => {
    const { token } = theme.useToken();
    const [form] = Form.useForm();
    const { getFieldsValue, setFieldsValue } = form

    const formStyle: React.CSSProperties = {
        maxWidth: 'none',
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        padding: 24,
    };

    const resetInputValues = () => {
        const initialObj = {
            typeName: '',
            comment: '',
            initialValueKey: '',
            initialValueValue: '',
        }
        setFieldsValue(initialObj)
        setInputValues(initialObj)
    }

    const getFields = () => {

        const childrenArr = [
            {
                name: 'typeName',
                label: '类型名',
                placeHolder: '类型名(小驼峰书写)'
            },
            {
                name: 'comment',
                label: '注释',
                placeHolder: '注释'
            },
            {
                name: 'initialValueKey',
                label: '初始值key',
                placeHolder: '初始值key'
            },
            {
                name: 'initialValueValue',
                label: '初始值value',
                placeHolder: '初始值value'
            },
        ]

        const children = childrenArr.map((childrenObj, i) => {
            const { name, label, placeHolder } = childrenObj
            return (
                <Col span={12} key={i}>
                    <Form.Item
                        name={name}
                        label={label}
                    >
                        <Input
                            placeholder={placeHolder}
                            onChange={() => setInputValues(getFieldsValue(['typeName', 'comment', 'initialValueKey', 'initialValueValue']))}
                        />
                    </Form.Item>
                </Col>
            )
        })

        return children;
    };


    return (
        <>
            <Form
                form={form}
                name="formComponent"
                style={formStyle}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 12 }}
            >
                <Row gutter={24}>{getFields()}</Row>
            </Form>
            <Button onClick={resetInputValues}>Reset</Button>
        </>

    );
};

export default FormComponent;