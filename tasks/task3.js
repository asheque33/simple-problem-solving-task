const numbers = [13, 42, 21, 53, 94, 18, 37, 65, 49, 76];
const getMaximum = (arrOfNumbers) => {
  const maximum = Math.max(...arrOfNumbers);
  return maximum;
};
console.log(getMaximum(numbers));
