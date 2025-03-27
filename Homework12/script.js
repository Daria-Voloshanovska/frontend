const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

// Task 1.1 - новый массив с name и isJedi

const newStarWarsHeroes = (heroes) =>{
    return heroes.map ((el) =>({ name: el.name, isJedi: el.isJedi }));
}
//console.log(newStarWarsHeroes(starWarsHeroes));
document.getElementById('task1.1').textContent = `1.1. Результат: ${newStarWarsHeroes}`;

// Task 1.2 - массив с джедаями младше 40 лет

function starWarsHeroesYung(heroes){
    return heroes.filter(hero => hero.isJedi && hero.age < 40);
} 
//console.log(starWarsHeroesYung(starWarsHeroes));
document.getElementById('task1.2').textContent = `1.2. Результат: ${starWarsHeroesYung}`;

// Task 1.3 - Посчитать возраст всех джедаев

const getTotalJediAge = (heroes) => {
    return heroes
    .filter(hero => hero.isJedi)
    .reduce((total,hero) => total + hero.age, 0);
}
//console.log(getTotalJediAge(starWarsHeroes));
document.getElementById('task1.3').textContent = `1.3. Результат: ${getTotalJediAge}`;


// Task 1.4 - Повысить возраст героев на 10 лет

function increaseHeroesAge (heroes){
    return heroes.map(hero => ({
        ...hero,
        age: hero.age +10
    }));
}
// console.log(increaseHeroesAge(starWarsHeroes));
document.getElementById('task1.4').textContent = `1.4. Результат: ${increaseHeroesAge}`;


// Task 1.5 - Создайте новый массив, где "Anakin Skywalker" заменен на:
// { name: "Darth Vader", isJedi: false, age: 50 }

const replaceAnakin = (heroes) => 
    heroes.reduce((acc, hero) => [
        ...acc,
        hero.name === "Anakin Skywalker" 
            ? { name: "Darth Vader", isJedi: false, age: 50 } 
            : hero
    ], []);
console.log(replaceAnakin(starWarsHeroes));
document.getElementById('task1.5').textContent = `1.5. Результат: ${replaceAnakin}`;
    