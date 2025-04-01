const form = document.getElementById("movie-form"); 
const clearBtn = document.getElementById("clear-all");
const moviesGrid = document.getElementById('movies-grid');


const movies = [
    // Начальный массив с фильмами (база данных при загрузке)
{
    title: "Leon",
    director: "Luc Besson",
    year: "1995",
    image: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/189/2024/03/28122947/yI6X2cCM5YPJtxMhUd3dPGqDAhw.jpg"
},
{
    title: "Train to Busan",
    director: "Yeon Sang-ho",
    year: "2016",
    image:  "https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_.jpg"
},
{
    title: "Back in Action",
    director: "Seth Gordon",
    year: "2025",
    image:  "https://m.media-amazon.com/images/M/MV5BMWQ4YWYxYTAtZTlhNC00Nzc3LWE3OWUtZjY5MThlNWNiYTBiXkEyXkFqcGc@._V1_.jpg"
},

{
    title: "Black Panther",
    director: "Ryan Coogler",
    year: "2018",
     image: "https://m.media-amazon.com/images/I/81X5C1jxEQL._AC_UF894,1000_QL80_.jpg"
},
];
//Создает HTML-карточку для одного фильма
// Создает div с классом card
// Добавляет кнопку удаления (иконку trash) с обработчиком события
// Создает элементы для изображения, названия, автора и года
// Возвращает готовую карточку.
function createMovieCard(movie) {
    const card = document.createElement("div");
    card.classList.add("card");

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.addEventListener("click", () => {
        const index = movies.findIndex(m => m.title === movie.title);
        if (index !== -1) {
            movies.splice(index, 1);
            renderMovies();
        }
    });
    
    const img = document.createElement("img");
    img.src = movie.image;
    img.alt = movie.title;

    const titleElem = document.createElement("h3");
    titleElem.textContent = movie.title;

    const directorElem = document.createElement("p");
    directorElem.textContent = `Director: ${movie.director}`;

    const yearElem = document.createElement("p");
    yearElem.textContent = `Year: ${movie.year}`;

    card.append(deleteBtn, img, titleElem, directorElem, yearElem);
    return card;
}
// Отрисовывает все фильмы из массива movies в moviesGrid
function renderMovies() {
    //Очищает контейнер (innerHTML = "")
    moviesGrid.innerHTML = "";
    movies.forEach(movie => {
        //Для каждого фильма вызывает createMovieCard() и добавляет карточку в сетку
        moviesGrid.appendChild(createMovieCard(movie));
    });
}

//Добавляет новый фильм в массив и обновляет отображение.
form.addEventListener('submit', (event) => {
    //Отменяет стандартную отправку формы (preventDefault())
    event.preventDefault();
// Получает данные из полей формы
    const title = event.target.title.value.trim();
    const director = event.target.director.value.trim();
    const year = event.target.year.value.trim();
    const image = event.target.image.value.trim();

    const newMovie = { title, director, year, image };


//Проверяет, нет ли такого фильма в массиве (some())
    const exist = movies.some(movie => 
        movie.title.toLowerCase() === title.toLowerCase() && 
        movie.director.toLowerCase() === director.toLowerCase() && 
        movie.year === year
      
    );
    
    if (exist) {
        alert('This movie is already in the list!');
        return;
    }
//Если фильм новый — добавляет в массив и вызывает renderMovies()
    movies.push(newMovie);
    renderMovies();
    //Очищает форму (reset())
    form.reset();
});
//  удаляет все фильмы 
 clearBtn.addEventListener("click", () => {
    movies.length = 0; // очистка массива
    renderMovies();
});
renderMovies(); 
//Функция  renderMovie("отрисовывать"- процесс преобразования данных в визуальные элементы на странице ) отвечает за отображение (рендеринг) всех фильмов на странице
