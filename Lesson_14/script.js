const form = document.getElementById("movie-form");
const clearBtn = document.getElementById("clear-all");
const moviesGrid = document.getElementById('movies-grid');


const movies = [
{
    title: "Leon",
    author: "Luc Besson",
    year: "1995",
    image: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/189/2024/03/28122947/yI6X2cCM5YPJtxMhUd3dPGqDAhw.jpg"
},
{
    title: "Train to Busan",
    author: "Yeon Sang-ho",
    year: "2016",
    image:  "https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_.jpg"
},
{
    title: "Back in Action",
    author: "Seth Gordon",
    year: "2025",
    image:  "https://m.media-amazon.com/images/M/MV5BMWQ4YWYxYTAtZTlhNC00Nzc3LWE3OWUtZjY5MThlNWNiYTBiXkEyXkFqcGc@._V1_.jpg"
},

{
    title: "Black Panther",
    author: "Ryan Coogler",
    year: "2018",
     image: "https://m.media-amazon.com/images/I/81X5C1jxEQL._AC_UF894,1000_QL80_.jpg"
},
];

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

    const authorElem = document.createElement("p");
    authorElem.textContent = `Author: ${movie.author}`;

    const yearElem = document.createElement("p");
    yearElem.textContent = `Year: ${movie.year}`;

    card.append(deleteBtn, img, titleElem, authorElem, yearElem);
    return card;
}

function renderMovies() {
    moviesGrid.innerHTML = "";
    movies.forEach(movie => {
        moviesGrid.appendChild(createMovieCard(movie));
    });
}


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = event.target.title.value.trim();
    const author = event.target.author.value.trim();
    const year = event.target.year.value.trim();
    const image = event.target.image.value.trim();

    const newMovie = { title, author, year, image };



    const exist = movies.some(movie => 
        movie.title.toLowerCase() === title.toLowerCase() && 
        movie.author.toLowerCase() === author.toLowerCase() && 
        movie.year === year
    );
    
    if (exist) {
        alert('This movie is already in the list!');
        return;
    }

    movies.push(newMovie);
    renderMovies();
    form.reset();
});

 clearBtn.addEventListener("click", () => {
    movies.length = 0;
    renderMovies();
});
renderMovies();
