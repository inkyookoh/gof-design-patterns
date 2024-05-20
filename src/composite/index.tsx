import React from "react";

// Component 인터페이스 정의 : Leaf와 Composite가 구현해야 하는 render 메서드를 포함합니다.
interface Component {
  render: () => JSX.Element;
}

// Leaf 컴포넌트 : 개별 객체를 나타내며, 단순한 이름을 렌더링합니다.
const Leaf = (props: { name: string }): Component => {
  return {
    // Leaf 객체의 render 메서드
    render: () => <div style={{ padding: 10 }}>{props.name}</div>,
  };
};

// Composite 컴포넌트 : 다른 컴포넌트들을 자식으로 가질 수 있는 객체를 나타냅니다.
const Composite = (props: {
  name: string;
  children: Component[];
}): Component => {
  return {
    // Composite 객체의 render 메서드
    render: () => (
      <div
        style={{
          border: "1px solid black",
          padding: 15,
        }}
      >
        <div style={{ padding: 10 }}>{props.name}</div>
        <div style={{ marginLeft: "20px" }}>
          {/* 자식 컴포넌트들을 렌더링 */}
          {props.children.map((child, index) => (
            <div key={index}>{child.render()}</div>
          ))}
        </div>
      </div>
    ),
  };
};

// 복합체 패턴의 클라이언트 역할을 합니다.
const App: React.FC = () => {
  // Leaf 객체 생성
  const leaf1 = Leaf({ name: "Leaf 1" });
  const leaf2 = Leaf({ name: "Leaf 2" });

  // 두 개의 Leaf 객체를 포함하는 Composite 객체 생성
  const composite1 = Composite({
    name: "Composite 1",
    children: [leaf1, leaf2],
  });

  // 또 다른 Leaf 객체 생성
  const leaf3 = Leaf({ name: "Leaf 3" });

  // 첫 번째 Composite과 새로운 Leaf 객체를 포함하는 Composite 객체 생성
  const composite2 = Composite({
    name: "Composite 2",
    children: [composite1, leaf3],
  });

  // 최종 트리 구조를 렌더링
  return (
    <div
      style={{
        textAlign: "left",
      }}
    >
      {composite2.render()}
    </div>
  );
};

export default App;
