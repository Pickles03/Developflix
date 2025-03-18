import peliculas from './peliculas.js'; 

const baselink = "https://image.tmdb.org/t/p/w500";

// Function to create a movie card element
function createMovieCard(movie) {
  const card = document.createElement('div');
  card.classList.add('movie-card'); 

  // Create and set up the poster image element
  const poster = document.createElement('img');
  poster.src = baselink + movie.poster_path;
  poster.alt = movie.title;
  
  // Create the title element
  const title = document.createElement('h3');
  title.textContent = movie.title;

  // Append the image and title to the card
  card.appendChild(poster);
  card.appendChild(title);

  return card;
}

// Function to filter and display movies by a given genre in a specified container
function displayMoviesForGenre(genreId, containerId) {
  const container = document.getElementById(containerId);
  const filteredMovies = peliculas.filter(movie => movie.genre_ids.includes(genreId));

  filteredMovies.forEach(movie => {
    const card = createMovieCard(movie);
    container.appendChild(card);
  });
}

// Display movies for each genre section
displayMoviesForGenre(28, 'genero-28'); // Acción
displayMoviesForGenre(53, 'genero-53'); // Thriller
displayMoviesForGenre(12, 'genero-12'); // Aventura


// in class explanation

