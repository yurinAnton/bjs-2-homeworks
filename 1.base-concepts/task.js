"use strict";
function solveEquation(a, b, c) {
   let arr = [];
   let x1;
   let x2;
   let d = b ** 2 - 4 * a * c;

   if (d > 0) {
      x1 = (-b + Math.sqrt(d)) / (2 * a);
      x2 = (-b - Math.sqrt(d)) / (2 * a);
      arr.push(x1);
      arr.push(x2);
      return arr;
   } else if ((d = 0)) {
      x1 = -b / (2 * a);
      arr.push(x1);
      return arr;
   } else return arr;
}

// solveEquation(1, 5, 4);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
   let payment;
   let sumCount;
   let monthPer = percent / 100 / 12;
   let bodyCount = amount - contribution;
   let err;
   let errorMessage = `Параметр ${err} содержит
   не правильное значение ${typeof err}!`;

   if (isNaN(percent)) {
      err = percent;
      console.log(errorMessage);
   } else if (isNaN(contribution)) {
      err = contribution;
      console.log(errorMessage);
   } else if (isNaN(amount)) {
      err = amount;
      console.log(errorMessage);
   } else if (isNaN(countMonths)) {
      err = countMonths;
      console.log(errorMessage);
   } else
      payment =
         bodyCount *
         (monthPer + monthPer / ((1 + monthPer) ** countMonths - 1));
   sumCount = parseFloat((payment * countMonths).toFixed(2));
   return sumCount;
}

// calculateTotalMortgage(10, 0, 50000, 12);
