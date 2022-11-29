function getArrayParams(...arr) {
   let min = Infinity;
   let max = -Infinity;
   let sum = 0;
   let avg;
   let resultObj = {};

   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (i >= i - 1) {
         i = max;
         // arr.push[max[i]];
      } else if (i < i - 1) {
         i = min;
         // arr.push[min[i]];
      }
   }
   avg = parseFloat((sum / arr.length).toFixed(2));
   return { min: min, max: max, avg: avg };
}
// getArrayParams(1, 2, 3, 4, 5);

function summElementsWorker(...arr) {
   let summElements;
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
   }
   return summElements;
}

function differenceMaxMinWorker(...arr) {
   let min = Infinity;
   let max = -Infinity;
   let difference;

   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (i > i - 1) {
         i = max;
      } else if (i < i - 1) {
         i = min;
      }
   }
   difference = max - min;
   return difference;
}

function differenceEvenOddWorker(...arr) {
   let sumEvenElement = 0;
   let sumOddElement = 0;

   for (let i = 0; i < arr.length; i++) {
      if (i % 2 == 0) {
         i += sumEvenElement;
      } else {
         i += sumOddElement;
      }
   }
   return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {}

function makeWork(arrOfArr, func) {}
