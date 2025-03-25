//  Задание 1

let n1 = 100;
let n2 = 25 % 3;
let myNumber = 100 / n2;
console.log(myNumber);
document.getElementById('task1').innerHTML = `1. Результат: ${myNumber}`;

// Задание 2

let myString = "Hello " + " world" + "!" +` 2024`;
console.log(myString);
document.getElementById('task2').innerHTML = `2. Результат: ${myString}`;
        
// Задание 3 

let isHuman = 42 == "42";
console.log(isHuman);
document.getElementById('task3').innerHTML = `3. Результат сравнения: ${isHuman}`;

// Задание 4

let myNumber2 = Number('123smth');
console.log(myNumber2);
document.getElementById('task4').innerHTML = `4. Результат преобразования: ${myNumber2}`;
