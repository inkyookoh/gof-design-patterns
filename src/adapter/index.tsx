// 클라이언트가 기대하는 인터페이스
interface OrderInterface {
  id: number;
  name: string;
  categoryName: string;
}

// 클라이언트 컴포넌트
const OrderComponent = ({ order }: { order: OrderInterface }) => {
  return (
    <div>
      <h1>Order Component</h1>
      <p>id : {order.id}</p>
      <p>name : {order.name}</p>
      <p>categoryName : {order.categoryName}</p>
    </div>
  );
};

// 적응자(Adaptee) 인터페이스. 클라이언트가 기대하는 인터페이스와 다름
interface MeditOrderInterface {
  orderId: number;
  orderName: string;
  category: string;
}

// Adapter 함수 : 적응자(Adaptee)를 클라이언트가 기대하는 인터페이스로 변환
const adaptOrder = (order: MeditOrderInterface): OrderInterface => {
  return {
    id: order.orderId,
    name: order.orderName,
    categoryName: order.category,
  };
};

export default function Adapter() {
  // 적응자(Adaptee) 데이터
  const meditOrder: MeditOrderInterface = {
    orderId: 100,
    orderName: "order1",
    category: "category1",
  };

  // 어댑터 사용하여 클라이언트가 기대하는 인터페이스로 변환
  const adaptOrderData = adaptOrder(meditOrder);
  return (
    <div>
      <OrderComponent order={adaptOrderData} />
    </div>
  );
}
