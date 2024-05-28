// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.
const persons = [
  {
    name: "Xohn",
    age: 21,
    gender: "male",
  },
  {
    name: "Bohn",
    age: 22,
    gender: "female",
  },
  {
    name: "Kohn",
    age: 23,
    gender: "female",
  },
  {
    name: "Vohn",
    age: 24,
    gender: "male",
  },
  {
    name: "John",
    age: 25,
    gender: "male",
  },
];
const searchPerson = () => {
  const person = persons.find((p) => p.name === "John");
  if (person) {
    person.age = 35;
  }
  return person;
  //   return { ...person, age: person.age };
};
console.log(searchPerson());
