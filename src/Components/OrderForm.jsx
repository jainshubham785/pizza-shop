import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../utils/orderSlice";
import { useState } from "react";
import { toast } from "react-toastify";

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

    //generting orderid
    const orderid = orders.length + 1;

    //checking for orders pending in Placed stage
    const PlacedStatusOrders = orders.filter((order) => order.status === 1);
    if (PlacedStatusOrders.length < 10) {
      //createing a order with formdata and other properties
      dispatch(
        createOrder({
          ...formdata,
          orderid: orderid,
          //for status please refer constant.js file
          status: 1,
          totalTime: { minutes: 0, seconds: 0 },
        })
      );
      toast.success("Order Created Successfully", {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      toast.error("Not Taking Any Order For Now", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Customer-name">Customer name</label>
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
          <label htmlFor="pizza-type">Pizza Type</label>
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
          <label htmlFor="Pizza-size">Pizza Size</label>
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
          <label htmlFor="Pizza-base">Pizza Base</label>
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
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default OrderForm;
