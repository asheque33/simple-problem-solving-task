// Create An Array Of Objects Representing Students With 'Name' And 'Grades' Properties. Write A Function To Sort The Students By Average Grade In Descending Order.
const students = [
  { name: "John", grades: [88, 90, 85] },
  { name: "Jane", grades: [70, 90, 80] },
  { name: "Jack", grades: [80, 80, 90] },
  { name: "Jill", grades: [90, 95, 90] },
  { name: "James", grades: [70, 80, 90] },
];
const averageGrade = (grades) => {
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  const average = sum / grades.length;
  return average;
};
const sortStudentsByGrade = (x) => {
  return x.sort((a, b) => averageGrade(b.grades) - averageGrade(a.grades));
};

console.log(sortStudentsByGrade(students));
