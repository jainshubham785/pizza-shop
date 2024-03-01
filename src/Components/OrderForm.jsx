import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../utils/orderSlice";
import { useState } from "react";

const OrderForm = () => {
  const [formdata, setFormdata] = useState({
    username: "",
    type: "veg",
    size: "small",
    base: "thick",
  });
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.order);

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderid = orders.length + 1;
    const PlacedStatusOrders = orders.filter((order) => order.status === 1);
    if (PlacedStatusOrders.length < 3) {
      dispatch(
        createOrder({
          ...formdata,
          orderid: orderid,
          status: 1,
        })
      );
      alert(`Order is created with Orderid ${orderid}`);
    } else {
      alert("Not taking any Order For Now");
    }
  };

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="Customer-name">Customer name</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={formdata.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label for="pizza-type">Pizza Type</label>
          <select
            className="form-control"
            name="type"
            value={formdata.type}
            onChange={handleChange}
            required
          >
            <option value="veg">Veg</option>
            <option value="Non-veg">NonVeg</option>
          </select>
        </div>
        <div className="form-group">
          <label for="Pizza-size">Pizza Size</label>
          <select
            className="form-control"
            name="size"
            value={formdata.size}
            onChange={handleChange}
            required
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="form-group">
          <label for="Pizza-base">Pizza Base</label>
          <select
            className="form-control"
            name="base"
            value={formdata.base}
            onChange={handleChange}
            required
          >
            <option value="thick">Thick</option>
            <option value="thin">Thin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-1">
          Submit
        </button>
      </form>
    </>
  );
};

export default OrderForm;
