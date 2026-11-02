let numbers = [10, 5, 8, 3, 12];

console.log("Исходный массив:", numbers);

numbers.push(7);
console.log("После добавления числа:", numbers);

numbers.shift();
console.log("После удаления первого числа:", numbers);

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Чётные числа:", evenNumbers);

let multipliedNumbers = numbers.map(num => num * 5);
console.log("Числа, умноженные на 5:", multipliedNumbers);

let sum = numbers.reduce((acc, num) => acc + num, 0);
let average = sum / numbers.length;
console.log("Среднее арифметическое:", average);

let sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log("Массив по возрастанию:", sortedNumbers);



let celebrities = [
    { name: "Michael Jackson", age: 50, role: "singer" },
    { name: "Cristiano Ronaldo", age: 41, role: "footballer" },
    { name: "Taylor Swift", age: 36, role: "singer" },
    { name: "Leonardo DiCaprio", age: 51, role: "actor" },
    { name: "Emma Watson", age: 36, role: "actress" },
    { name: "Justin Bieber", age: 32, role: "singer" },
    { name: "Tom Holland", age: 30, role: "actor" },
    { name: "Billie Eilish", age: 24, role: "singer" },
    { name: "Millie Bobby Brown", age: 22, role: "actress" },
    { name: "Blue Ivy Carter", age: 14, role: "singer" }
];

console.log("Исходный массив знаменитостей:", celebrities);


let names = celebrities.map(person => person.name);
console.log("Имена знаменитостей:", names);

let descriptions = celebrities.map(person =>
    `${person.name} is a ${person.role}`
);
console.log("Описание знаменитостей:", descriptions);

let oldest = celebrities.reduce((prev, current) =>
    current.age > prev.age ? current : prev
);

let youngest = celebrities.reduce((prev, current) =>
    current.age < prev.age ? current : prev
);

console.log("Самый старший:", oldest);
console.log("Самый младший:", youngest);


let ageDifference = oldest.age - youngest.age;
console.log("Разница в возрасте:", ageDifference);

let hasMinor = celebrities.some(person => person.age < 18);
console.log("Есть ли несовершеннолетние:", hasMinor);

let olderThan20 = celebrities.filter(person => person.age > 20);
console.log("Знаменитости старше 20 лет:", olderThan20);
