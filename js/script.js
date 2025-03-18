import peliculas from './peliculas.js'; 

//const baselink = "https://image.tmdb.org/t/p/w500";

// Function to create a movie card element
//function createMovieCard(movie) {
  //const card = document.createElement('div');
  //card.classList.add('movie-card'); 

  // Create and set up the poster image element
  //const poster = document.createElement('img');
  //poster.src = baselink + movie.poster_path;
  //poster.alt = movie.title;
  
  // Create the title element
  //const title = document.createElement('h3');
  //title.textContent = movie.title;

  // Append the image and title to the card
  //card.appendChild(poster);
  //card.appendChild(title);

  //return card;
//}

// Function to filter and display movies by a given genre in a specified container
//function displayMoviesForGenre(genreId, containerId) {
  //const container = document.getElementById(containerId);
  //const filteredMovies = peliculas.filter(movie => movie.genre_ids.includes(genreId));

  //filteredMovies.forEach(movie => {
    //const card = createMovieCard(movie);
    //container.appendChild(card);
  //});
//}

//Display movies for each genre section
//displayMoviesForGenre(28, 'genero-28'); // Acción
//displayMoviesForGenre(53, 'genero-53'); // Thriller
//displayMoviesForGenre(12, 'genero-12'); // Aventura


// in-class review option 1

//1st find a place to put the elements - div with id genres (genero-28, genero-53, genero-12)
//create the div element where the title and image will go
//filter by genre (accion 28, thriller 53, aventura 12) and put them in their designated divs
//edit the css to make it look nice

//const accion = document.getElementById('genero-28'); //this gets the div with the id genero-28
//peliculas.forEach(pelicula => accion.innerHTML += `
  //<h2>${pelicula.title}</h2> 
  //<img src =https://image.tmdb.org/t/p/w500${pelicula.poster_path} />`); //this gets the title of each movie; we don't have to use the {} since it's an arrow function and it sums to what already exists, hence giving us a list of titles
//the $ {} is used to insert a variable into a string
//poster_path is a key in the object pelicula that contains the url of the image

//const thriller = document.getElementById('genero-53');
//peliculas.forEach(pelicula => thriller.innerHTML += `<h2>${pelicula.title}</h2><img src =https://image.tmdb.org/t/p/w500${pelicula.poster_path} />`);

//const aventura = document.getElementById('genero-12');
// peliculas.forEach(pelicula => aventura.innerHTML += `<h2>${pelicula.title}</h2> <img src =https://image.tmdb.org/t/p/w500${pelicula.poster_path} />`);


//in-class review option 2

/*const accion = document.getElementById('genero-28');
const thriller = document.getElementById('genero-53');
const aventura = document.getElementById('genero-12');


const peliculasFiltradasAccion = peliculas.filter(pelicula => pelicula.genre_ids.includes(28));
const peliculasFiltradasThriller = peliculas.filter(pelicula => pelicula.genre_ids.includes(53));
const peliculasFiltradasAventura = peliculas.filter(pelicula => pelicula.genre_ids.includes(12)); */


//peliculasFiltradasAccion.forEach(pelicula => accion.innerHTML += `
  //<div class="movie-card">
    //<img src=https://image.tmdb.org/t/p/w500${pelicula.poster_path} />
    //<h2>${pelicula.title}</h2>
  //</div>`
//);

//peliculasFiltradasThriller.forEach(pelicula => thriller.innerHTML += `
  //<div class="movie-card">
    //<img src=https://image.tmdb.org/t/p/w500${pelicula.poster_path} />
    //<h2>${pelicula.title}</h2>
  //</div>`
//);

//peliculasFiltradasAventura.forEach(pelicula => aventura.innerHTML += `
  //<div class="movie-card">
    //<img src=https://image.tmdb.org/t/p/w500${pelicula.poster_path} />
    //<h2>${pelicula.title}</h2>
  //</div>`
//);


//option 3

/*peliculasFiltradasAccion.forEach(pelicula => {
  const div = document.createElement('div');
  const titulo = document.createElement('h2');
  titulo.textContent = pelicula.title;
  const imagen = document.createElement('img');
  imagen.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;

  div.appendChild(imagen);
  div.appendChild(titulo);
  accion.appendChild(div);
});

peliculasFiltradasThriller.forEach(pelicula => {
  const div = document.createElement('div');
  const titulo = document.createElement('h2');
  titulo.textContent = pelicula.title;
  const imagen = document.createElement('img');
  imagen.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;

  div.appendChild(imagen);
  div.appendChild(titulo);
  thriller.appendChild(div);
}
);

peliculasFiltradasAventura.forEach(pelicula => {
  const div = document.createElement('div');
  const titulo = document.createElement('h2');
  titulo.textContent = pelicula.title;
  const imagen = document.createElement('img');
  imagen.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;

  div.appendChild(imagen);
  div.appendChild(titulo);
  aventura.appendChild(div);
}
); */



function showMovies(divID, genreID) {
  const genero = document.getElementById(divID);
  const peliculasFiltradas = peliculas.filter(pelicula => pelicula.genre_ids.includes(genreID));

} 

showMovies('genero-28', 28);