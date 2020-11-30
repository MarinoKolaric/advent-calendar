export const remainingTime = (endDate) => {
  const now = new Date();
  const distance = endDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(distance / day) > 0 ? Math.floor(distance / day) : 0;
  const hours = Math.floor((distance % day) / hour) > 0 ? Math.floor((distance % day) / hour) : 0;
  const minutes = Math.floor((distance % hour) / minute) > 0  ? Math.floor((distance % hour) / minute): 0;
  const seconds = Math.floor((distance % minute) / second) > 0 ? Math.floor((distance % minute) / second) : 0;

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

