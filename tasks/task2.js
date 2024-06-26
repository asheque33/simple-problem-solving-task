// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.
const books = [
  {
    title: "7 Habits of Highly Effective People",
    author: "Stephen Covey",
    year: 1989,
  },
  {
    title: "Miracle Morning",
    author: "Hal Elrod",
    year: 2012,
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    year: 1937,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
  },
  {
    title: "Time Management",
    author: "Brian Tracy",
    year: 2004,
  },
];
const booksTitle = (arrOfBooks) => {
  return arrOfBooks.map((book) => book.title);
};
console.log(booksTitle(books));
