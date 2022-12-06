function compareArrays(arr1, arr2) {
   return arr1.length == arr2.length && arr1.every((v, i) => arr2[i] == v);
}

function getUsersNamesInAgeRange(users, gender) {
   const newUsers = users.filter((e) => {
      users.gender === gender;
   });
   newUsers = users.map((item) => {
      if (users.gender === gender) {
         newUsers.push(users.age);
      }
   });
   let avgAge = 0;
   newUsers.reduce((acc, age, index) => {
      acc += age;
      if (index === newUsers.length - 1) {
         avgAge = acc / index;
      }
      return avgAge;
   }, 0);
}

// const users = [
//    { firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской" },
//    { firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской" },
//    { firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский" },
//    {
//       firstName: "Мелания",
//       secondName: "Савельева",
//       age: 37,
//       gender: "женский",
//    },
// ];
