// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

const square = (x) => {
  return x * x;
};
const double = (x) => {
  return 2 * x;
};
const add5 = (x) => {
  return x + 5;
};
const composedFunction = (value) => {
  return add5(double(square(value)));
};
console.log(composedFunction(5));
