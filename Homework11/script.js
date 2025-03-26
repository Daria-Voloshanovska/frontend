// Задание 1
const names = ['Семен', 'Иван','Петр', 'Татьяна'];
const ages = [18,27,74,34];
const people = [];
for (let i =0; i < names.length; i++){
  people.push(names[i] + " " + ages[i] + "лет/годов") 
}
console.log(people);

document.getElementById('task1').textContent = `1. Результат: ${people}`;

// Задание 2
const newPeople = [];
for(let i = names.length -1; i>=0; i--){
    newPeople.push(people[i])
}
console.log(newPeople);

document.getElementById('task2').textContent = `2. Результат: ${newPeople}`;

// Задание 3
 const fruits = [];
 fruits.push('яблоко', 'банан', 'апельсин');
 const lastFruit = fruits.pop();
 fruits.unshift(lastFruit);
 console.log(fruits);

 document.getElementById('task3').textContent = `3. Результат: ${fruits}`;
 
// Задание 4
const fruits1 = ['яблоко', 'банан', 'апельсин'];
const veggies = ['морковь','помидор','капуста'];
const fruitsAndVeggies = [...fruits, ...veggies];
const [fruit1,fruit2,fruit3,veggie1, veggie2, veggie3] = fruitsAndVeggies;
console.log(fruitsAndVeggies);

document.getElementById('task4').textContent = `4. Результат: ${fruitsAndVeggies}`;