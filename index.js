'use strict'

let namberOfFilms;

function start() {
   namberOfFilms = prompt('Сколько фильмов вы посмотрели');
   while (namberOfFilms == '' || namberOfFilms == null || isNaN(namberOfFilms)) {
      namberOfFilms = prompt('Сколько фильмов вы посмотрели');
   }
}

// start();


const personalMovieDB = {
   count: namberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false

};

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Какой фильм Вам понравился?'),
         b = prompt('На сколько оцените его?');


      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
         console.log('Good');
         personalMovieDB.movies[a] = b;
      }
      else {
         console.log('Erorr');
         i--;
      }

   }
}

// rememberMyFilms();


function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      console.log("Просмотрено мало фильмов");
   }

   else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Просмотрено нормально фильмов");
   }
   else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
   }
   else {
      console.log("Произошла ошибка");
   }
}

// detectPersonalLevel();



function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      const q = prompt(`Ваш любимый жанр под номером ${i}`);
      personalMovieDB.genres[i - 1] = q;
   }
}

writeYourGenres();

function showMyDB() {
   if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
   }
}

showMyDB();












