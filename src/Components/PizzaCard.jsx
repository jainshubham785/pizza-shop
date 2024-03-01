import { useState } from "react";
import Timer from "./Timer";

const PizzaCard = ({ order, changeStatus }) => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

  return (
    <>
      <div className="card mb-1">
        <div className="card-body p-1 d-flex justify-content-center">
          <div>
            <h6 className="card-title">Order : {order.orderid}</h6>
            {order.status < 4 && (
              <div>
                <p className="card-text mb-1">
                  <Timer time={time} setTime={setTime} />
                </p>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => changeStatus(order.orderid, time)}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaCard;
