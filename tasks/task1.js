// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.
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
