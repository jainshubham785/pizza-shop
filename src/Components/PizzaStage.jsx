import { useSelector } from "react-redux";
import { status } from "../utils/constant";
import PizzaCard from "./PizzaCard";

const PizzaStage = () => {
  const orders = useSelector((store) => store.order);

  return (
    <>
      <table class="table table-bordered">
        <thead>
          <tr>
            {Object.values(status)
              ?.slice(0, 4)
              ?.map((status) => (
                <th>{status}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {orders
                ?.filter((order) => order.status === 1)
                ?.map((order) => (
                  <PizzaCard order={order} />
                ))}
            </td>
            <td>
              {orders
                ?.filter((order) => order.status === 2)
                ?.map((order) => (
                  <PizzaCard order={order} />
                ))}
            </td>
            <td>
              {orders
                ?.filter((order) => order.status === 3)
                ?.map((order) => (
                  <PizzaCard order={order} />
                ))}
            </td>
            <td>
              {orders
                ?.filter((order) => order.status === 4)
                ?.map((order) => (
                  <PizzaCard order={order} />
                ))}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default PizzaStage;
