import { useState } from "react";
import Timer from "./Timer";

const PizzaCard = ({ order, changeStatus }) => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

  //getting max time for each stage
  const getMaxTime = () => {
    //if order is in 'Order in Making stage'
    if (order.status === 2) {
      if (order.size === "small") return 3;
      if (order.size === "medium") return 4;
      if (order.size === "large") return 5;
    }
    return 3;
  };

  return (
    <>
      <div className="card mb-1">
        <div
          className={`card-body p-1 d-flex justify-content-center ${
            time.minutes >= getMaxTime() && `bg-danger`
          }`}
        >
          <div>
            <h6 className="card-title">Order : {order.orderid}</h6>
            {/* Showing timer and next button only in Stage 1, 2 ,3  */}
            {order.status < 4 ? (
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
            ) : (
              <p>Picked</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaCard;
