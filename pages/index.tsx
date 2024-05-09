import Kanban from "@/components/Kanban";
import Modal from "@/components/Modal";
import OrdersLayout from "@/layouts/OrdersLayout";

export default function Index() {
  return (
    <>
      <OrdersLayout>
        <Kanban />
        <Modal />
      </OrdersLayout>
    </>
  );
}
