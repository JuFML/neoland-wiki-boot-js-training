//*!-------------------------------------------------------------------------------------------------------------------------------------
//*? Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.
//*!-------------------------------------------------------------------------------------------------------------------------------------

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

function ratesMovies(movies) {
  const smallMoviesCollection = []
  const averageMoviesCollection = []
  const bigMoviesCollection = []

  movies.forEach(movie => {
    const isSmallFilm = movie.durationInMinutes < 100
    const isSverageFilm = movie.durationInMinutes < 200

    if (isSmallFilm) {
      smallMoviesCollection.push(movie)
      console.log(movie, "filme pequeno");
    } else if (isSverageFilm) {
      averageMoviesCollection.push(movie)
      console.log(movie, "filme mediano");
    } else {
      bigMoviesCollection.push(movie)
      console.log(movie, "filme grande");
    }
  })

  console.log(smallMoviesCollection);
  console.log(averageMoviesCollection);
  console.log(bigMoviesCollection);
}

ratesMovies(movies)