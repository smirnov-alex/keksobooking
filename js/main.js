const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomFloatingPoint = (a, b, fixed) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.floor(Math.random() * (upper - lower + 1) + lower) + Number(Math.random().toFixed(fixed));
  return ( result);
}

console.log(getRandomPositiveInteger(1, 10));

console.log(getRandomFloatingPoint(1, 100, 5));
