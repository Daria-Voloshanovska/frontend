//! Arrays methods - методы массивов

const brothers = [
    {name:'Gandalf', height: 160, hasMagic: true, race: 'maia', age: 2500},
    {name: 'Legolas', height: 170, hasMagic: true, race: 'elf', age: 900},
    {name: 'Frodo', height: 60, hasMagic: false, race: 'hobbit', age: 30},
    {name: 'Saruman', height: 155, hasMagic: true, race: 'maia', age: 2000},
    {name: 'Aragon', height: 160, hasMagic: false, race: 'human', age: 120},
    {name: 'Sam', height: 63, hasMagic: false, race: 'hobbit', age: 32}
];

const hero = {name: 'Arwen', height: 175, hasMagic: true, race: 'elf', age: 850};
brothers.push(hero);
//console.log(brothers);

//* 1. метод map ()
// не мутирующий - не изменит исходный массив
// метод возвращает новый массив с кол-ством элементов исходного
// используется для создания нового массива на основе предыдущего
// также используется для последовательных операций без изменения над элементами исходного массива
// метод итерируется по элементам исходного массива


//* создаем массив из имен наших героев
// передаем в качестве аргумента стрелочную функцию
// за место параметра el на каждой итерации будет приходить последовательно все  элементы массива
// значение после  => - это возращенное значение функции - оно и станет элемента массива

const brothersNames = brothers.map(el => el.name);
//console.log(brothersNames);


//* массив с возрастом всех героев

const brothersAges = brothers.map(brothers=>brothers.age);
//console.log(brothers);

//* создать массив из строк с именем и возрастом

const namesAndAges = brothers.map(el => el.name + ':' + el.age);
//console.log(namesAndAges);



//* 2. метод filter()
// не мутирующий - не изменит исходный массив
// метод возвращает новый массив  элементов удовлетворяющих заданому условию
//  на вход передаем аргументом стрелочную функцию с условием
//! если элементов подхлдящих условию нет - возвращает пустой массив


const  brothers1 = brothers.filter(el => (el.age > 100) && (el.hasMagic ===true ));
// console.log(brothers1);
const elfs = brothers.filter(el => el.race ==='elf');

// * 3. метод  find()
// не мутирующий 
// возвращает первый элемент удовлетворяющи1 условию
// если такого элемента нет - возрвращает undefined

const  brothers2 = brothers.find(el => el.name ==='elf');

//* 3. метод reduce()
// не мутирующий
// первый аргумент - стрелочная функция с описанием действия
//  второй аргумент - начальное значение аккумулируемой переменной(acc), точка отсчета, current - на каждой итерации будет следующее значение
//* в примере ниже счмтает сумму возрастов всех братьев

const sumOfAges = brothersAges.reduce((acc, current) => acc + current, 0);
//console.log(brothersAges);
//console.log(sumOfAges);

// * сложение строк с reduce()

const brothersNames1 = brothers.reduce((acc,el) => acc + el.name +', ', 'Братство Кольца: ');
//console.log(brothersNames1);

// * 4. метод slice()
// не мутирующий
// обрезает массив и возвращает новый измененный 
// передаете два аргумента:
//  индекс с которого обрезаем (включительно)
// индекс до которого (не включительно) - не обязательный аргумент (по умолчанию обрежет до конца массива)

const shortBrothers = brothers.slice(1,4);
//console.log(shortBrothers);

const lastTwoBrothers = brothers.slice(-2);
//console.log(lastTwoBrothers);

//! не мутирующие методы массивов можно использовать по цепочке
// каждый следуюший метод будет вызван у возвращенного значения предыдущего

const result = brothers.slice(-2).map(el => el.age).reduce((acc,el) => acc + el, 0);
// console.log(result);


//! functions - функции

// функции позволяют переиспользовать написанный код
// функции помогают организовывать и структурировать код

// * function declaration

// обьявление функции через ключевое слово function
// переменную в круглых скобках называют параметром 


function greeting(value) {
    console.log('Hello, ' + value + '!')
}

//* чтобы функция заработала нужно ее вызвать 
//  передаваемое на место параметра значение при вызове функции назыают аргументом

//* функции могут быть вызваны много раз с разными аргументами

// greeting('arrays');
// greeting('functions');
// greeting('objects');

let returnedValue = greeting('arrays');
// console.log(returnedValue);

//! функции без return возвращают undefined
// функции обьявленные с помощью function могут быть вызваны до обьявления - это называется 'поднятие' (hoisting) 
// особенность -- могут быть вызваны до того как их обьявят 

//* стрелочные функции  - arrow function
// назыв. так из-за символа => 
// такие функции не используються до обьявления (нет hoisting)

// стрелочные функции из простой операции в одну строку не требуют return - возвращенным значением становится результат операции после =>

const sum = (num1,num2) => num1 + num2;
const result1 = sum(42,30);

// console.log(result1);

//* если мы хотим написать операцию из нескольких строк нам нужны фигурные скобки 
// ! а в фигурных скобках нужно будет не забыть написать return

const multiply = (a, b, c) => {
    const result = a * b * c
    return `${result} - это результат умножения ${a}, ${b} и ${c}`
}

const result2 = multiply(22, 25, 16)

// console.log(result2)
// console.log(multiply(30, 20, 5))

