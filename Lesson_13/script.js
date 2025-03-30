//* 1. обьявление переменных
// подумаем какие элементы будут интерактивными 
// находим их DOM методами и кладем в переменные

const minus = document.querySelector('#btn-minus');
const plus = document.querySelector('#btn-plus');
const value = document.querySelector('#value');

//* 2. описали логику работы с данными
let counter = 0;

const handlePlus = () => {
    counter++;
    //перезаписываем текстовое значение value
    // counter += 10; // Увеличение на 10
     value.innerText =counter;
};
const handleMinus = () => {
    counter--;
    //  counter -= 10; // Уменьшение на 10
    value.innerText =counter;
}

//* 3. добавили данные интерактивными элементами

plus.addEventListener('click',handlePlus);
minus.addEventListener('click',handleMinus);

// ! ToDO list

// * 1. нашли интерактивные элементы
const form = document.getElementById('form-todo');
const ul =  document.getElementById('list-todo');

// функция очистки элементов списка
function clearList() {
    // пока у  ul есть дочерние элементы удаляй первый элемент 
    while (ul.hasChildNodes()){
        ul.firstChild.remove()
    }
} 
// * 2. создали массив под список задач
const taskList = [
    {
        where: 'home',
        what: 'kodinng'
    },
    {
        where: 'home',
        what: 'cleaning',
    },
    {
        where: 'market',
        what: 'shopping'
    },
]

// функция изменения стилей для элементов списка
const changeStatus = (event) => {
    if (event.target.style.textDecoration === 'line-through') {
      event.target.style.textDecoration = 'none'
    } else {
      event.target.style.textDecoration = 'line-through'
    }
  }

// функция создания элементов списка
function createList() {
taskList.map(el => {
    const li = document.createElement('li')
        li.innerText = `${ el.what} : ${ el.where}`
        ul.append(li)
})
}
// * 3. вывели элементы на странице (функция описана ниже)
createList()

// * 4. создали слушатель событий по нажатию на кнопку для формы
form.addEventListener('submit', (event) => {
    // предотвращаем отправку формы и перезагрузку страницы по умолчанию
    event.preventDefault()
     
  // создаем для удобства обьект со значениями из формы  
    let task ={
        where: event.target.where.value.toLowerCase,
        what: event.target.what.value.toLowerCase
    };

    // очищаем значения в форме
    event.target.where.value='';
    event.target.what.value='';

//  добавляем проверку на наличие в массиве
// если check  не пустой - значит такой элемент уже есть
    const check = taskList.find(el => el.what === task.what && el.where === task.where);

    if (check) {
        alert('Такая задача уже в списке дел');
    } else {
        // добавляем новый элемент в массив
        taskList.push(task);

        // очищаем ul от значений предыдущего вызова
     clearList();

      // снова создаем список элементов
     createList();
    }  
});

