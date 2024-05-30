// Write A Function That Uses The Reduce Function To Calculate The Total Value Of An Array Of Objects With A 'Quantity' And 'Price' Property.
// Create an array of objects
const items = [
  {
    quantity: 2,
    price: 10,
  },
  {
    quantity: 3,
    price: 20,
  },
  {
    quantity: 5,
    price: 15,
  },
  {
    quantity: 6,
    price: 25,
  },
];

// Function to calculate total value
const calculateTotalValue = (itemsArray) => {
  return itemsArray.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
};

console.log(calculateTotalValue(items));
