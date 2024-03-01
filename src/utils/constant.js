export const status = {
  1: "Order Placed",
  2: "Order in Making",
  3: "Order Ready",
  4: "Order Picked",
  5: "Order Delivered",
  6: "Order Cancelled",
};

export const addTime = (time1, time2) => {
  const totalSeconds = time1.seconds + time2.seconds;
  const extraMinutes = Math.floor(totalSeconds / 60);

  return {
    minutes: time1.minutes + time2.minutes + extraMinutes,
    seconds: totalSeconds % 60,
  };
};
