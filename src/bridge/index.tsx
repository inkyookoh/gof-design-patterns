// Implementor 인터페이스: 렌더링 로직을 정의합니다.
interface RenderImplementor {
  (): JSX.Element;
}

// Abstraction: 렌더링 로직을 사용하는 인터페이스를 정의합니다.
const useRenderer = (implementor: RenderImplementor): JSX.Element => {
  return implementor();
};

// Concrete Implementor: 목록 형태로 렌더링하는 구현체입니다.
const ListRenderer: RenderImplementor = () => {
  return (
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
};

// Concrete Implementor: 테이블 형태로 렌더링하는 구현체입니다.
const TableRenderer: RenderImplementor = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td>Item 1</td>
          <td>Item 2</td>
          <td>Item 3</td>
        </tr>
      </tbody>
    </table>
  );
};

// Refined Abstraction: 렌더링 로직을 사용하여 실제 컴포넌트를 구현합니다.
type RendererType = "list" | "table";

interface DataRendererProps {
  type: RendererType;
}

// 구체적인 Implementor를 선택합니다.
const getRenderer = (type: RendererType): RenderImplementor => {
  switch (type) {
    case "list":
      return ListRenderer;
    case "table":
      return TableRenderer;
    default:
      throw new Error(`Unknown renderer type: ${type}`);
  }
};

// DataRenderer는 Refined Abstraction의 역할을 합니다.
function DataRenderer({ type }: { type: RendererType }) {
  const renderer = getRenderer(type); // 구현을 선택합니다.
  return useRenderer(renderer); // 구현을 사용하여 렌더링합니다.
}

// 사용 예제: 브릿지 패턴을 사용하는 컴포넌트입니다.
export default function Bridge() {
  const isMobile = false;
  return (
    <div>
      {isMobile ? (
        <>
          <h1>List </h1>
          <DataRenderer type="list" />
        </>
      ) : (
        <>
          <h1>Table </h1>
          <DataRenderer type="table" />
        </>
      )}
    </div>
  );
}
