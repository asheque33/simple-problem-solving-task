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

const getMalePersonsNames = () => {
  const malePerson = persons.filter((p) => p.gender !== "female");
  const namesOfMalePersons = malePerson.map((m) => m.name);
  return namesOfMalePersons;
};
console.log(getMalePersonsNames());
