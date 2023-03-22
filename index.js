

let namberOfFilms = prompt('Сколько фильмов вы посмотрели');
let washedFilms = prompt('Какой фильм Вам понравился?');
let washedRating = prompt('На сколько оцените его?');

let personalMovieDB = {
   count: namberOfFilms,
   movies: [washedFilms, washedRating],
   actors: {},
   genres: [],
   privat: false

};


personalMovieDB.movies[washedFilms];
personalMovieDB.movies[washedRating];

console.log(personalMovieDB);