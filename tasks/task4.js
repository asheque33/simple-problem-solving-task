// Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.
let numbers2 = [13, 42, 21, 53, 94, 18, 37, 65, 49, 76];
const getEvenSum = () => {
  let initialValue = 0;
  const sum = numbers2.reduce((acc, total) => {
    if (total % 2 === 0) {
      return acc + total;
    }
    return acc;
  }, initialValue);
  return sum;
};
console.log(getEvenSum());
