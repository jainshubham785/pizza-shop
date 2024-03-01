import { useDispatch, useSelector } from "react-redux";
import { status } from "../utils/constant";
import PizzaCard from "./PizzaCard";
import { updateOrder } from "../utils/orderSlice";

const PizzaStage = () => {
  const orders = useSelector((store) => store.order);
  const dispatch = useDispatch();

  const changeStatus = (orderid, time) => {
    dispatch(
      updateOrder({
        orderid: orderid,
        time: time,
      })
    );
  };

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            {Object.values(status)
              ?.slice(0, 4)
              ?.map((status) => (
                <th key={status}>{status}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {orders
                ?.filter((order) => order.status === 1)
                ?.map((order) => (
                  <PizzaCard
                    key={order.orderid}
                    order={order}
                    changeStatus={changeStatus}
                  />
                ))}
            </td>
            <td>
              {orders
                ?.filter((order) => order.status === 2)
                ?.map((order) => (
                  <PizzaCard
                    key={order.orderid}
                    order={order}
                    changeStatus={changeStatus}
                  />
                ))}
            </td>
            <td>
              {orders
                ?.filter((order) => order.status === 3)
                ?.map((order) => (
                  <PizzaCard
                    key={order.orderid}
                    order={order}
                    changeStatus={changeStatus}
                  />
                ))}
            </td>
            <td>
              {orders
                ?.filter((order) => order.status === 4)
                ?.map((order) => (
                  <PizzaCard
                    key={order.orderid}
                    order={order}
                    changeStatus={changeStatus}
                  />
                ))}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default PizzaStage;
