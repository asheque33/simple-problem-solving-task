// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.
const cars = [
  {
    make: "Toyota",
    model: "Corolla",
    year: 2005,
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2010,
  },
  {
    make: "Ford",
    model: "Focus",
    year: 2000,
  },
  {
    make: "Chevrolet",
    model: "Impala",
    year: 2015,
  },
  {
    make: "Nissan",
    model: "Altima",
    year: 2012,
  },
];
const sortedCars = (arrayOfCars) => {
  return cars.sort((a, b) => a.year - b.year);
};
console.log(sortedCars(cars));
