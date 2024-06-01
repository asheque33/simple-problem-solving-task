// non-pure function example
let sum = 0;
function increment() {
  return (sum += 2);
}
console.log("sum", increment());
console.log("sum", increment());

// pure function example
const add = (a, ...b) => {
  return a + b.reduce((acc, item) => acc + item, 0);
};
console.log(add(5, 6, 9, 2));
console.log(add(5, 6, 9, 2));
