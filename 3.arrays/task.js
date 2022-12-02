function compareArrays(arr1, arr2) {
   return arr1.length == arr2.length && arr1.every((v, i) => arr2[i] == v);
}

function getUsersNamesInAgeRange(users, gender) {
   const newUsers = users.filter((e) => users.gender === gender);
   newUsers.reduce((acc, item, index) => {
      acc += item;
      if (index === newUsers.length - 1) {
         return acc / newUsers.length;
      }
      return acc;
   }, 0);
}
