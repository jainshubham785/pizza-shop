const PizzaCard = ({ order, changeStatus }) => {
  return (
    <>
      <div className="card mb-1">
        <div className="card-body p-1 d-flex justify-content-center">
          <div>
            <h6 className="card-title">Order {order.orderid}</h6>
            <p className="card-text mb-1">Time</p>
            {order.status < 4 && (
              <button
                className="btn btn-primary btn-sm"
                onClick={() => changeStatus(order.orderid, order.status)}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaCard;
