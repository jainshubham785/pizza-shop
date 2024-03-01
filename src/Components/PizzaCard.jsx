const PizzaCard = ({ order }) => {
  return (
    <>
      <div className="card mb-1">
        <div className="card-body p-1 d-flex justify-content-center">
          <div>
            <h6 className="card-title">Order {order.orderid}</h6>
            <p className="card-text mb-1">Time</p>
            <button className="btn btn-primary btn-sm">Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaCard;
