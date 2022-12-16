function getArrayParams(...arr) {
   let min = Infinity;
   let max = -Infinity;
   let sum = 0;
   let avg = 0;

   max = Math.max(...arr);
   min = Math.min(...arr);
   sum = arr.reduce((acc, item) => acc + item, 0);

   avg = parseFloat((sum / arr.length).toFixed(2));
   return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
   let summElements = 0;
   if (arr.length === 0) {
      return 0;
   }

   for (let i = 0; i < arr.length; i++) {
      summElements = summElements + arr[i];
   }
   return summElements;
}

function differenceMaxMinWorker(...arr) {
   let min = Infinity;
   let max = -Infinity;
   if (arr.length === 0) {
      return 0;
   }
   max = Math.max(...arr);
   min = Math.min(...arr);
   return max - min;
}

function differenceEvenOddWorker(...arr) {
   let sumEvenElement = 0;
   let sumOddElement = 0;
   if (arr.length === 0) {
      return 0;
   }

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
         sumEvenElement = sumEvenElement + arr[i];
      } else {
         sumOddElement = sumOddElement + arr[i];
      }
   }
   return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
   let sumEvenElement = 0;
   let countEvenElement = 0;
   if (arr.length === 0) {
      return 0;
   }

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
         countEvenElement = countEvenElement + 1;
         sumEvenElement = sumEvenElement + arr[i];
      }
   }
   return sumEvenElement / countEvenElement;
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
