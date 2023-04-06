interface Person {
    name: string;
    age: number;
    gender: "male" | "female";
    [key: string]: any;
}
declare const filterByProperty: (people: Person[], property: string, value: string | number) => Person[];
declare const peopleArray: Person[];
declare const filterByGender: Person[];
declare const filterByAge: Person[];
