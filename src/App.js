import Header from "./Components/Header";
import "./App.css";
import PizzaStage from "./Components/PizzaStage";
import MainSection from "./Components/MainSection";
import OrderForm from "./Components/OrderForm";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div class="container">
        <div>
          <div class="pizza-stage">
            <h3>Pizza Stage</h3>
            <PizzaStage />
          </div>
          <div class="main-section">
            <h3>Main Section</h3>
            <MainSection />
          </div>
        </div>
        <div class="order-form">
          <h3>Create A Order</h3>
          <OrderForm />
        </div>
      </div>
    </>
  );
}

export default App;
