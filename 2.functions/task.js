function getArrayParams(...arr) {
   let min = Infinity;
   let max = -Infinity;
   let sum = 0;
   let avg = 0;

   for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
      if (arr[i] >= arr[i - 1]) {
         max = arr[i];
      } else if (arr[i] >= arr[i - 1]) {
         min = arr[i];
      }
   }
   avg = parseFloat((sum / arr.length).toFixed(2));
   return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
   let summElements = 0;

   for (let i = 0; i < arr.length; i++) {
      if (arr.length !== 0) {
         sum = sum + arr[i];
         return summElements;
      } else return 0;
   }
}

function differenceMaxMinWorker(...arr) {
   let min = Infinity;
   let max = -Infinity;
   let difference = 0;
   if (arr.length !== 0) {
      max = Math.max(...arr);
      min = Math.min(...arr);
      difference = max - min;
      return difference;
   } else return 0;
}

function differenceEvenOddWorker(...arr) {
   let sumEvenElement = 0;
   let sumOddElement = 0;

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
         sumEvenElement = sumEvenElement + arr[i];
      } else {
         sumOddElement = sumOddElement + arr[i];
      }
   }
   if (arr.length !== 0) {
      return sumEvenElement - sumOddElement;
   } else return 0;
}

function averageEvenElementsWorker(...arr) {
   let sumEvenElement = 0;
   let countEvenElement = 0;

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
         countEvenElement = countEvenElement + 1;
         sumEvenElement = sumEvenElement + arr[i];
      }
   }
   if (arr.length !== 0) {
      return sumEvenElement / countEvenElement;
   } else return 0;
}

function makeWork(arrOfArr, func) {
   let maxWorkerResult = -Infinity;

   for (let i = 0; i < arrOfArr.length; i++) {
      const result = func(...arrOfArr[i]);
      if (result > maxWorkerResult) {
         maxWorkerResult = result;
      }
   }
   return maxWorkerResult;
}
