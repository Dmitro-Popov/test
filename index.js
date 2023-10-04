// 'use strict'


// // let washedFilms = prompt('Какой фильм Вам понравился?');
// // let washedRating = prompt('На сколько оцените его?');

// let namberOfFilms;

// // function start() {
// //    namberOfFilms = prompt('Сколько фильмов вы посмотрели');
// //    while (namberOfFilms == "" || namberOfFilms == null || isNaN(namberOfFilms)) {
// //       namberOfFilms = prompt('Сколько фильмов вы посмотрели');
// //    };
// // }

// // start();

// let personalMovieDB = {
//    count: namberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false,
//    start: function () {
//       namberOfFilms = prompt('Сколько фильмов вы посмотрели');
//       while (namberOfFilms == "" || namberOfFilms == null || isNaN(namberOfFilms)) {
//          namberOfFilms = prompt('Сколько фильмов вы посмотрели');
//       };
//    },
//    rememberMyFilms: function () {
//       for (let i = 0; i < 2; i++) {
//          const a = prompt('Какой фильм Вам понравился?').trim(),
//             b = prompt('На сколько оцените его?');

//          if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('Done')
//          }
//          else {
//             console.log('Erorr')
//             i--;
//          }
//       }
//    },
//    detectPersonalLevel: function () {
//       if (personalMovieDB.count < 10) {
//          console.log("Просмотрено мало фильмов");
//       }

//       else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//          console.log("Просмотрено нормально фильмов");
//       }
//       else if (personalMovieDB.count >= 30) {
//          console.log("Вы киноман");
//       }
//       else {
//          console.log("Произошла ошибка");
//       }
//    },
//    writeYourGenres: function () {

//       for (let i = 1; i <= 3; i++) {
//          let genre = prompt(`Ваш любимый жанр под номером ${i}`);
//          if (genre == null && genre == '') {
//             console.log('Вы ввеле неверно')
//             i--;
//          }
//          else {
//             personalMovieDB.genres[i - 1] = genre;
//          }
//       }
//       personalMovieDB.genres.forEach((item, i) => {
//          console.log(`Любимый жанр ${i + 1} - это ${item}`)
//       })

//    },
//    showMyDB: function () {
//       if (personalMovieDB.privat == false) {
//          console.log(personalMovieDB);
//       }
//    },

//    toggleVisibleMyDB: function () {
//       if (personalMovieDB.privat) {
//          personalMovieDB.privat == false;
//       }
//       else {
//          personalMovieDB.privat == true;
//       }
//    }

// };

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.toggleVisibleMyDB();


// function rememberMyFilms() {
//    for (let i = 0; i < 2; i++) {
//       const a = prompt('Какой фильм Вам понравился?').trim(),
//          b = prompt('На сколько оцените его?');

//       if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//          personalMovieDB.movies[a] = b;
//          console.log('Done')
//       }
//       else {
//          console.log('Erorr')
//          i--;
//       }
//    }
// }

// rememberMyFilms();


// function detectPersonalLevel() {
//    if (personalMovieDB.count < 10) {
//       console.log("Просмотрено мало фильмов");
//    }

//    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       console.log("Просмотрено нормально фильмов");
//    }
//    else if (personalMovieDB.count >= 30) {
//       console.log("Вы киноман");
//    }
//    else {
//       console.log("Произошла ошибка");
//    }
// };

// detectPersonalLevel();


// function writeYourGenres() {
//    for (let i = 1; i <= 3; i++) {
//       const q = prompt(`Ваш любимый жанр под номером ${i}`);
//       personalMovieDB.genres[i - 1] = q;
//    }
// }

// writeYourGenres();

// function showMyDB() {
//    if (personalMovieDB.privat == false) {
//       console.log(personalMovieDB);
//    }
// }

// showMyDB();


let student = {
   js: [{
      name: 'John',
      progress: 100
   },
   {
      name: 'Ivan',
      progress: 60
   }],

   html: {
      basic: [
         {
            name: 'Peter',
            progress: 20
         },
         {
            name: 'Ann',
            progress: 18
         },
      ],

      pro: [{
         name: 'Sam',
         progress: 10
      }],

      semi: {
         students: [{
            name: 'test',
            progress: 100
         }]
      }
   }
}

function getTotalProgressByIreration(data) {
   let total = 0;
   let students = 0;
   for (let course of Object.values(data)) {
      if (Array.isArray(course)) {
         students += course.length;
         for (let i = 0; i < course.length; i++) {
            total += course[i].progress;
         }
      } else {
         for (let subCourse of Object.values(course)) {
            students += subCourse.length;
            for (let i = 0; i < subCourse.length; i++) {
               total += subCourse[i].progress;
            }
         }
      }

   }

   return total / students;
}


// console.log(getTotalProgressByIreration(student));

function getTotalProgressByRecursion(data) {
   if (Array.isArray(data)) {
      let total = 0;
      for (let i = 0; i < data.length; i++) {
         total += data[i].progress;
      }
      return [total, data.length];
   } else {
      let total = [0, 0];

      for (let subData of Object.values(data)) {
         const subDataArr = getTotalProgressByRecursion(subData);
         total[0] += subDataArr[0];
         total[1] += subDataArr[1];
      }
      return total;
   }
}

const result = getTotalProgressByRecursion(student);

console.log(result[0] / result[1]);





let list = {
   value: 1,
   next: {
      value: 2,
      next: {
         value: 3,
         next: {
            value: 4,
            next: null
         }
      }
   }
};



function printList(list) {

   console.log(list.value);
   if (list.next) {
      printList(list.next);
   }

}
printList(list);


function factorial(n) {
   if (n === 1) {
      return n;
   } else {
      n *= factorial(n - 1);
   }
}

console.log(factorial(4));