fetch("https://hp-api.onrender.com/api/characters")
.then((res) => res.json())
.then((data) => {
    // обрезаем массив не мутирующим slice
    const shortHeroes = data.slice(0,50);
// data.slice(0,50),map((el) => console.log(el.name));
// обрезаем shortHeroes мутирующим splice
// первый аргумент - с какого индекса
// второй аргумент - кол-ство удаляемых элементов
shortHeroes.splice(1,10);
// заводим переменную под персонажа
const hero = shortHeroes[0];

// ! string methods - методы строк
//* length свойство возвращающее длину строки
//console.log(hero.name.length);
//* slice  образает строку по индексам
//console.log(hero.name.slice(0,5));
//* indexOf() ищет индекс символа  или подстроки
// возвращает -1, если не находит искаемое значение
//console.log(hero.name.indexOf('ry'));
//* получаем переменные только имена персонажей
data.map(el => {
    const actor = el.actor;
    // проверем у кого есть пробел 
    const indexOfSpace = actor.indexOf(' ')
   // console.log(indexOfSpace);
//    выбираем первое имя у кого из актеров нет -1, выдает актера
    const firstWord = indexOfSpace !=-1 ? actor.slice(0,indexOfSpace) : actor
    //console.log(firstWord)
})

//* изменеие регистра 
// к верхнему регистру 
const capsLockName=(hero.actor.toUpperCase().slice(0,6));

// к нижнему регистру + заглавная буква для имени
const formattedName = capsLockName.charAt(0).toUpperCase() + capsLockName.toLowerCase().slice(1);
//console.log(formattedName);

// * charAt() возвращает символ в строке по индексу
//console.log(hero.name.charAt(0));

// ! строки в JS имутабельны  - нет мутирующих методов
// * split() - делает из строки массив с элементами 
//  принимает аргументом сивол-разделитель

// * reverse() - метод массива меняюзий последов ательность элемента в массиве

//console.log(hero.house.split('').reverse());

// * join() - склеивает строку
// принимает аргументом символ-обьеденитель

//console.log(hero.name.split(' ').reverse().join(''));

// ! Object methods - методы обьектов
//* Object.values() - массив из всех значений обьектов
//console.log(Object.values(hero));

//* Object.keys() - массив из всех значений по ключам обьекта
Object.keys(hero).slice(0,4).map(el => {
    const p = document.createElement('p')
        p.textContent = `Поле: ${el}`
    //    document.body.appendChild(p)
})
// * for ... in цикл для обьектов
// перебор ключей в обьекте

for(const key in hero){
  //  console.log(`По ключу ${key} лежит значение ${hero[keys]}`);
}
});


const gridContainer = document.querySelector('.grid-container');

const getNews = async() =>{
    fetch("https://newsapi.org/v2/everything?q=animal+otter&from=2025-03-07&sortBy=publishedAt&apiKey=b99bfac3612f40f6bb28dfab990cde8d");
    const data = await res.json();
    data.articles.slice(1,12).map((el) => {
        const card = document.createElement('section')
        const p = document.createElement("p");
        p.textContent = el.title;
        const img = document.createElement('img')
        img.src = el.urlToImage
        const a = document.createElement('a')
        a.href = el.url
        a.target = '_blank'
        a.textContent = 'link to source'
        card.append(p, img, a)
        gridContainer.append(card)
    });
  };
  getNews();

