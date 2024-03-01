import { useDispatch, useSelector } from "react-redux";
import { status } from "../utils/constant";
import { cancleOrder } from "../utils/orderSlice";

const MainSection = () => {
  const orders = useSelector((store) => store.order);
  const dispatch = useDispatch();

  //calculating the total order delivered
  const totalOrderDelivered = orders.filter(
    (order) => order.status === 5
  ).length;

  const handleOrdercancle = (orderid) => {
    dispatch(cancleOrder(orderid));
  };

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Stage</th>
            <th>Total time spent (time from order placed)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <tr key={order.orderid}>
              <td>{order.orderid}</td>
              <td>{status[order.status]}</td>
              <td>{`${order.totalTime.minutes} min ${order.totalTime.seconds} sec`}</td>
              <td>
                {/* Showing Cancle button only when Stage is below Order Making */}
                {order.status < 3 && (
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleOrdercancle(order.orderid)}
                  >
                    Cancle
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h6>Total Order Delivered : {totalOrderDelivered}</h6>
    </>
  );
};

export default MainSection;
