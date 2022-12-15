function compareArrays(arr1, arr2) {
   return arr1.length == arr2.length && arr1.every((v, i) => arr2[i] == v);
}

function getUsersNamesInAgeRange(users, gender) {
   return users
      .filter((user) => user.gender === gender)
      .map((person) => person.age)
      .reduce((summ, userAge, index, array) => {
         if (index === array.length - 1) {
            return (summ + userAge) / array.length;
         }
         return summ + userAge;
      }, 0);
}
