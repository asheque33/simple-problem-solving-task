const dupNumsArray = [18, 24, 31, 24, 49, 18, 73, 31, 94, 49, 86, 57, 94];
let uniqueNumsArray = [];
// const getUniqueNumbers = (numsOfArray) => {
//   const uniqueNumbers = numsOfArray.map((num) => num);
//   return uniqueNumsArray.push(uniqueNumbers);
// };
// 1. Filter Method
const getUniqueNumbers = (x) => {
  const uniques = x.filter((item, index) => x.indexOf(item) === index);
  return uniques;
};

console.log(getUniqueNumbers(dupNumsArray));
