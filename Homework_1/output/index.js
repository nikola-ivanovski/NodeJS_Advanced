var filterByProperty = function (people, property, value) {
    return people.filter(function (person) { return person[property] === value; });
};
var peopleArray = [
    { name: "John", age: 25, gender: "male" },
    { name: "Nikola", age: 26, gender: "male" },
    { name: "Evgenija", age: 27, gender: "female" },
];
var filterByGender = filterByProperty(peopleArray, "gender", "male");
console.log(filterByGender);
var filterByAge = filterByProperty(peopleArray, "age", 27);
console.log(filterByAge);
