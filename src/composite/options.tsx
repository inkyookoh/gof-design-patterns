import React from "react";

// Leaf 인터페이스:  Option 옵션 정보를 정의합니다.
interface Option {
  name: string;
  optionValues: OptionValue[];
}

// Composite 인터페이스 : OptionValue 옵션 값 정보를 정의합니다
interface OptionValue {
  name: string;
  childOptions: Option[]; // 하위 Option들을 포함할 수 있도록 합니다.
}

// Composite 인터페이스 : OptionGroup 옵션 그룹 정보를 정의합니다
interface OptionGroup {
  name: string;
  options: Option[];
}

// Leaf :  Option 컴포넌트 옵션 정보를 렌더링하며, 여러 OptionValue를 포함할 수 있습니다.
const Option: React.FC<Option> = ({ name, optionValues }) => (
  <div style={{ border: "2px solid black", margin: "10px", padding: "10px" }}>
    <h2>{name}</h2>
    <div>
      {optionValues.map((optionValue, index) => (
        <OptionValue key={index} {...optionValue} />
      ))}
    </div>
  </div>
);

// Composite:  OptionValue 컴포넌트 옵션 값 정보를 렌더링하며, 하위 옵션들을 재귀적으로 렌더링합니다.
const OptionValue: React.FC<OptionValue> = ({ name, childOptions }) => (
  <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
    <h3>{name}</h3>
    <div>
      {childOptions.map((childOption, index) => (
        <Option key={index} {...childOption} />
      ))}
    </div>
  </div>
);

// Composite : OptionGroup 컴포넌트 옵션 그룹 정보를 렌더링하며, 여러 Option을 포함할 수 있습니다.
const OptionGroup: React.FC<OptionGroup> = ({ name, options }) => (
  <div style={{ border: "3px solid black", margin: "10px", padding: "10px" }}>
    <h1>{name}</h1>
    <div>
      {options.map((option, index) => (
        <Option key={index} {...option} />
      ))}
    </div>
  </div>
);

// Client : Composite 패턴의 클라이언트 역할을 합니다.
const Options: React.FC = () => {
  // 예제 데이터를 정의합니다.
  const optionGroups: OptionGroup[] = [
    {
      name: "옵션그룹",
      options: [
        {
          name: "옵션",
          optionValues: [
            {
              name: "옵션 -> 옵션 항목",
              childOptions: [
                {
                  name: "옵션 -> 옵션 항목 -> 옵션",
                  optionValues: [
                    {
                      name: "옵션 -> 옵션 항목 -> 옵션 -> 옵션 항목",
                      childOptions: [
                        {
                          name: "옵션 -> 옵션 항목 -> 옵션 -> 옵션 항목 -> 옵션",
                          optionValues: [
                            {
                              name: "옵션 -> 옵션 항목 -> 옵션 -> 옵션 항목 -> 옵션 -> 옵션 항목",
                              childOptions: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "옵션그룹",
      options: [
        {
          name: "옵션",
          optionValues: [
            {
              name: "옵션 -> 옵션 항목",
              childOptions: [
                {
                  name: "옵션 -> 옵션 항목 -> 옵션",
                  optionValues: [
                    {
                      name: "옵션 -> 옵션 항목 -> 옵션 -> 옵션 항목",
                      childOptions: [
                        {
                          name: "옵션 -> 옵션 항목 -> 옵션 -> 옵션 항목 -> 옵션",
                          optionValues: [
                            {
                              name: "옵션 -> 옵션 항목 -> 옵션 -> 옵션 항목 -> 옵션 -> 옵션 항목",
                              childOptions: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  // OptionGroup을 순회하며 OptionGroup 컴포넌트를 렌더링합니다.
  return (
    <div style={{ textAlign: "left" }}>
      {optionGroups.map((group, index) => (
        <OptionGroup key={index} {...group} />
      ))}
    </div>
  );
};

export default Options;
