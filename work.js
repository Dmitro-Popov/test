const userData = {
   name: 'Ivan',
   age: null,
   say: function () {
      console.log('Hello');
   }
}


userData.say();
userData.hay?.();
// if (userData && userData.skills && userData.skills.js) {
//    console.log(userData.skills.js);
// }

console.log(userData.skills?.js);

