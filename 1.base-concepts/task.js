"use strict";
function solveEquation(a, b, c) {
   let arr = [];
   let x1 = 0;
   let x2 = 0;
   let d = b ** 2 - 4 * a * c;

   if (d > 0) {
      x1 = (-b + Math.sqrt(d)) / (2 * a);
      x2 = (-b - Math.sqrt(d)) / (2 * a);
      arr.push(x1);
      arr.push(x2);
      console.log("Первый корень - " + arr[0] + "Второй корень - " + arr[1]);
   } else if (d === 0) {
      x1 = -b / (2 * a);
      arr.push(x1);
      console.log("Один корень - " + arr[0]);
   } else {
      console.log("Корней нет!");
   }
   return arr;
}

// solveEquation(1, 5, 4);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
   let payment = 0;
   let sumCount = 0;
   let monthPer = percent / 100 / 12;
   let bodyCount = amount - contribution;

   if (
      isNaN(percent) ||
      isNaN(contribution) ||
      isNaN(amount) ||
      isNaN(countMonths)
   ) {
      console.log("Value is not a number!");
   }
   payment =
      bodyCount * (monthPer + monthPer / ((1 + monthPer) ** countMonths - 1));
   sumCount = parseFloat((payment * countMonths).toFixed(2));
   return sumCount;
}

// calculateTotalMortgage(10, 0, 50000, 12);
