// ! Arrays - массивы

const arr1 = new Array();
const arr2 = [] // предпочтительный способ

// создание массива со значениями

const numbers = [4,8,15,16,23,42];
const fruits = ['apple', 'orange', 'pear'];

// обращение к элементам массива происходит через индекс - числовое порядковое значение начинающееся с 0

const paar = fruits[2];

// мы можем создавать массивы из разных типов данных, но как правило это не нужно и не удобно
const party = ['alien',42,undefined,['man', 'woman']]

// * как узнать длин массива
// обратится к свойству length возвращающему длину массива

const numbersLength = numbers.length;

//! цикл for loop
// указываем:
// 1. переменную итератор
// 2. условие для выхода из цикла
// 3. изменение происходящее после каждой итерации (здесь увеличение переменной i на 1)

for (let i = 0; i < numbers.length; i++) {
    const answer = Number([i])+ 1 + 'й ' + 'элемент: ' + numbers[i]
   // console.log(answer)
  }

  //! методы массивов - добавление и удаление элементов
//   функции которые позволяют удобно совершать основные операции с массивами
// * все методы деляться на мутирующие и не мутирующие
// 1. мутирующие - изменяют исходный массив
// 2. не мутирующие - не изменяют исзодный, часто возвращают новый массив с измененными значениями

const animals = ['panda', 'otter', 'capybara', 'rabbit'];

//* push() - добавление элемента в конце массива
// мутирующий метод
// добавляет элемент в конец массива
// возращанное значение - длина нового массива
// const el =animals.push('hippo') //! в el будет длина элемента

animals.push('hippo');
//! при этом animals изменяется
// console.log(animals);
// console.log(el);


//* pop() - удаление элемента из конца массива

// мутирующий метод
// удаляет элемент из конца массива
// возвразенное значение - удаленный элемент

const el = animals.pop() //! в el удаленный элемент

animals.pop();


//* unshift() - добавление элемента в начале массива
// мутирующий метод
// добавляет элемент в начале массива
// возращанное значение - длина нового массива
animals.unshift('racoon');

//* shift() -  удаление элемента из начала массива
// мутирующий метод
// удаляет элемент из начала массива
// возвразенное значение - удаленный элемент

animals.shift();


//! spread syntax
//  позволяет создавать копии массивов
// перед переменной ссылкой на массив пишем '...'

const newAnimals = [...animals];
newAnimals.unshift('racoon');
// console.log(newAnimals);
// console.log(animals);

// можно создать новый массив из 2 других

const fruitsAndAnimals = [...fruits,...animals];

//! не путать с созданием двумерного массива
const fruitsAndAnimals1 = [fruits,animals];

//* со spread  можно дописывать новые элементы в массив

const zoo = ['squirrel', ... newAnimals, '🐿️', '🐊'];
// console.log(zoo);

//!  деструктиризация массивов
// это способ в одну строку :
// обьявить новые переменные
// забрать данные от исходного массива
// и положить в эти переменные

const cities = ['Hamburg', 'Leipzig', 'Berlin','Hannover'];

// * решение задачи без деструктиризации
// const hamburg = cities[0];
// const leipzig = cities[1];
// const berlin = cities[2];
// const hannover = cities[3];

// * решение задачи с деструктиризацией (в одну строку)
//  значение переменных зависит от их индекса и порядка при деструктиризации - имя переменной может быть любым

// если какой-то элемент не нужен - мы пропускаем его

const[hamburg,leipzig,berlin,hannover] = cities;


//console.log(leipzig,hannover);

//! oject- обьекты
// сложный тип данных, в котором данные хранятся в формате: 'ключ:значения'
// ключи - это строковые значения

const person1 = {
    name: 'Ron',
    lastName: 'Weasley',
    age: 16,
    isAdult: false,
    siblings: ['Fred', 'George', 'Jinny']
}
// получить  значения обьекта можно обратившись к его ключу через точку

//console.log(person1.siblings)

const person2 = {
    name: 'Fred',
    lastName: 'Weasley',
    age: 19,
    isAdult: true,
    siblings: ['Ron', 'George', 'Jinny']
}
const family = [person1,person2];

// * практикуем цикл с массивом из обьектов

for (let i=0; i < family.length; i++){
    // перезаписываем данные по возрасту на каждой итерации
    family[i].age = family[i].age +2;
}

const person3 = {
    name: 'Jinny',
    lastName: 'Weasley',
    age: 14,
    isAdult: false,
    siblings: ['Ron', 'George', 'Fred']
}

// * добавили нового ребенка в семье 
family.push(person3);
//console.log(family);

person3.siblings.push('Bill');
for(let i=0; i<person3.siblings.length; i++){
    console.log(person3.siblings[i]);
}

//! document -это очень большой  иподробный обьект описывающий все данные о странице в браузре

console.dir(document);

//let el = document.getElementsByTagName('h1');

//console.log(el[0]);

  