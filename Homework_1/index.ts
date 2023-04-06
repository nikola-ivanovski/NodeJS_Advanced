interface Person {
  name: string;
  age: number;
  gender: "male" | "female";
}

const filterByProperty = (
  people: Person[],
  property: keyof Person,
  value: string | number
): Person[] => {
  return people.filter((person) => person[property] === value);
};

const peopleArray: Person[] = [
  { name: "John", age: 25, gender: "male" },
  { name: "Nikola", age: 26, gender: "male" },
  { name: "Evgenija", age: 27, gender: "female" },
];

const filterByGender = filterByProperty(peopleArray, "gender", "male");
console.log(filterByGender);

const filterByAge = filterByProperty(peopleArray, "age", 27);
console.log(filterByAge);
