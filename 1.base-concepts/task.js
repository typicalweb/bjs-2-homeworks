// Домашнее задание к лекции 1 «Основные понятия»

"use strict";
// Задача 1

function solveEquation(a, b, c) {
  let arr = [];
  const d = b * b - 4 * a * c;
  if (d < 0) {
    return [];
  } else if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  } else {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  return arr; // array
}


// Задача 2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercentage = ((percent/100)/12);
  let loanBody = (amount-contribution);
  let montlyPayment = (loanBody*(monthlyPercentage+(monthlyPercentage/(((1+monthlyPercentage)**countMonths)-1))));
  let totalAmount = (montlyPayment*countMonths);

  return +(totalAmount.toFixed(2));
}

console.log(calculateTotalMortgage(10, 0, 20000, 24.));

