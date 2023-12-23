'use client';

import { useState } from 'react'
import { Flex } from 'antd';
import CodeDisplayComponent from '@/app/components/CodeDisplayComponent'
import FormComponent from '@/app/components/FormComponent'

function ReduxGenerator() {
  const [inputValues, setInputValues] = useState({
    moduleName: '',
    typeName: '',
    comment: '',
    initialValueKey: '',
    initialValueValue: '',
  });

  return (
    <>
      <Flex
        vertical
        gap='large'
      >
        <FormComponent
          setInputValues={setInputValues}
        />

        <CodeDisplayComponent
          inputValues={inputValues}
        />
      </Flex>
    </>
  )
}

export default ReduxGenerator
