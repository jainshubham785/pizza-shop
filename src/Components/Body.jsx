import PizzaStage from "./PizzaStage";
import MainSection from "./MainSection";
import OrderForm from "./OrderForm";

const Body = () => {
  return (
    <div className="container-body">
      <div>
        <div className="pizza-stage">
          <h3>Pizza Stage</h3>
          <PizzaStage />
        </div>
        <div className="main-section">
          <h3>Main Section</h3>
          <MainSection />
        </div>
      </div>
      <div className="order-form">
        <h3>Create A Order</h3>
        <OrderForm />
      </div>
    </div>
  );
};

export default Body;
