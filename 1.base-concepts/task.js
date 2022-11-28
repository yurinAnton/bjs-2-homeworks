"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  let d = b**2 - 4*a*c;

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

  if (
     isNaN(percent) ||
     isNaN(contribution) ||
     isNaN(amount) ||
     isNaN(countMonths)
  ) {
     return console.log(`Параметр ${percent} содержит 
     не правильное значение ${typeof(percent)}!`);

  }

  payment =
     bodyCount * (monthPer + monthPer / ((1 + monthPer) ** countMonths - 1));
  sumCount = parseFloat((payment * countMonths).toFixed(2));
  return sumCount;
}

// calculateTotalMortgage(10, 0, 50000, 12);
