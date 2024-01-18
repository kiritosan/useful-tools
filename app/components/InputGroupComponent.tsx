import { Flex, Input } from "antd";

interface InputValues {
  typeName: string;
  comment: string;
  initialValueKey: string;
  initialValueValue: string;
}

type handleInputChangeType = (
  e: React.ChangeEvent<HTMLInputElement>,
  inputName: string,
) => void;

const InputGroupComponent: React.FC<{
  inputValues: InputValues;
  handleInputChange: handleInputChangeType;
}> = ({ inputValues, handleInputChange }) => {
  const { typeName, comment, initialValueKey, initialValueValue } = inputValues;

  return (
    <div className="InputGroupComponent">
      <Flex gap="middle" vertical>
        <Flex justify={"center"} align={"center"} gap="large">
          <Input
            style={{ width: "40%" }}
            placeholder="类型名(小驼峰书写)"
            value={typeName}
            onChange={(e) => handleInputChange(e, "typeName")}
          />
          <Input
            placeholder="注释"
            style={{ width: "40%" }}
            value={comment}
            onChange={(e) => handleInputChange(e, "comment")}
          />
        </Flex>
        <Flex justify={"center"} align={"center"} gap="large">
          <Input
            placeholder="初始值key"
            style={{ width: "40%" }}
            value={initialValueKey}
            onChange={(e) => handleInputChange(e, "initialValueKey")}
          />
          <Input
            style={{ width: "40%" }}
            placeholder="初始值value"
            value={initialValueValue}
            onChange={(e) => handleInputChange(e, "initialValueValue")}
          />
        </Flex>
      </Flex>
    </div>
  );
};

export default InputGroupComponent;
