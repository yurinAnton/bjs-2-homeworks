function getArrayParams(...arr) {
   let min = Infinity;
   let max = -Infinity;
   let sum = 0;
   let avg = 0;
   let resultObj = {};

   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (i >= i - 1) {
         i = max;
      } else if (i < i - 1) {
         i = min;
      }
   }
   avg = parseFloat((sum / arr.length).toFixed(2));
   return { min: min, max: max, avg: avg };
}
// getArrayParams(1, 2, 3, 4, 5);



function summElementsWorker(...arr) {
   let summElements = 0;
   if (arr.length === 0) return 0;
   
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
   }
   return summElements;
}

function differenceMaxMinWorker(...arr) {
   let min = Infinity;
   let max = -Infinity;
   let difference = 0;
   if (arr.length == 0) return 0;

   max = Math.max(null, arr);
   min = Math.min(null, arr);
   difference = max - min;
   return difference;
}

function differenceEvenOddWorker(...arr) {
   let sumEvenElement = 0;
   let sumOddElement = 0;
   if (arr.length == 0) return 0;

   for (let i = 0; i < arr.length; i++) {
      if (i % 2 == 0) {
         i += sumEvenElement;
      } else {
         i += sumOddElement;
      }
   }
   return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
   let sumEvenElement = 0;
   let countEvenElement = 0;
   if (arr.length == 0) return 0;

   for (let i = 0; i < arr.length; i++) {
      if (i % 2 == 0) {
         i += sumEvenElement;
         1 += countEvenElement;
      }
   }
   return sumEvenElement / countEvenElement;
}


function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let value of arrOfArr) {
    func(value[i])
  }

}
