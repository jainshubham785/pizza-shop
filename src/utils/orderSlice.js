import { createSlice } from "@reduxjs/toolkit";
import { addTime } from "./constant";

const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    createOrder: (state, action) => {
      state.push(action.payload);
    },
    updateOrder: (state, action) => {
      const updateOrder = state.find(
        (order) => order.orderid === action.payload.orderid
      );
      updateOrder.status = updateOrder.status + 1;
      updateOrder.totalTime = addTime(
        updateOrder.totalTime,
        action.payload.time
      );
    },
    cancleOrder: (state, action) => {
      const updateOrder = state.find(
        (order) => order.orderid === action.payload
      );
      updateOrder.status = 6;
    },
  },
});

export const { createOrder, updateOrder, cancleOrder } = orderSlice.actions;
export default orderSlice.reducer;
