import { useState } from "react";
import { Counter } from "./counter";

export default function Singleton() {
  // Counter 인스턴스를 두 번 생성하더라도 동일한 인스턴스를 반환한다.
  const counter1 = Counter.getInstance();
  const counter2 = Counter.getInstance();

  // Counter 인스턴스의 값을 화면에 표시하기 위해 상태를 사용한다.
  const [count, setCount] = useState<number>(counter1.getValue());

  // Counter 인스턴스의 값을 증가시키는 함수
  const handleIncrementCounter1 = () => {
    counter1.increment();
    setCount(counter1.getValue());
  };

  // Counter 인스턴스의 값을 증가시키는 함수
  const handleIncrementCounter2 = () => {
    counter1.increment();
    setCount(counter2.getValue());
  };

  // Counter 인스턴스의 값을 감소시키는 함수
  const handleDecrementCounter1 = () => {
    counter1.decrement();
    setCount(counter1.getValue());
  };

  // Counter 인스턴스의 값을 감소시키는 함수
  const handleDecrementCounter2 = () => {
    counter2.decrement();
    setCount(counter2.getValue());
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 15,
      }}
    >
      <div>conter : {count}</div>
      <div>
        {/* 두 인스턴스가 동일한지 비교 */}
        counter1 === counter2 :{" "}
        {Boolean(counter1 === counter2) ? "true" : "false"}
      </div>

      <div>
        <button onClick={handleIncrementCounter1}>counter1.increment</button>
        <button onClick={handleIncrementCounter2}>counter2.increment</button>
      </div>

      <div>
        <button onClick={handleDecrementCounter1}>counter1.decrement</button>
        <button onClick={handleDecrementCounter2}>counter2.decrement</button>
      </div>
    </div>
  );
}
