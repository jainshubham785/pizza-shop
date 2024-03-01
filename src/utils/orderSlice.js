import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    createOrder: (state, action) => {
      state.push(action.payload);
    },
    updateOrder: (state, action) => {
      const updateOrder = state.find(
        (order) => order.orderid === action.payload
      );
      updateOrder.status = updateOrder.status + 1;
    },
  },
});

export const { createOrder, updateOrder } = orderSlice.actions;
export default orderSlice.reducer;
