// Counter interface
interface CounterInterface {
  getValue: () => number;
  increment: () => void;
  decrement: () => void;
}

// Counter 싱글톤 모듈
const Counter = (function () {
  // 클로저를 이용하여 private 변수를 선언
  let instance: CounterInterface;
  // private 변수
  let count: number = 0;

  // private 함수
  function createInstance(): CounterInterface {
    return {
      getValue: () => count,
      increment: () => count++,
      decrement: () => count--,
    };
  }

  return {
    // public 함수
    getInstance: () => {
      // instance가 없다면 생성
      if (!instance) {
        instance = createInstance();
      }
      // instance가 있다면 반환
      return instance;
    },
  };
})();

Object.freeze(Counter);
export { Counter };
