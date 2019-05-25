
"use strict";
function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let D = b**2 - 4 * a * c;
    let x;
    let x1 = ((-b - Math.sqrt(D))/(2 * a));
    let x2 = ((-b + Math.sqrt(D))/(2 * a));
  if (D > 0) {
    x = [x1, x2];
    console.log("х имеет 2 значения"); 
    return x;
  } else if (D < 0) {
    x = null;
    console.log("x не имеет значений");
    return x;
  } else if (D == 0) {
    x = -b/2 * a;
    console.log("уравнение имеет 1 значение");
    return x;
}
};

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
  let result = new Date().getFullYear() - dateOfBirthday.getFullYear();
  console.log(result);
    if (result >= 18) {
    result = "Не желаете ли олд-фэшн, " + name + "?";
    return result;
  } else if (result < 18) {
    result = "Сожалею," + name + ", но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!";
    return result;
  };
  console.log(result);
};

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
  let totalArr;
  if (marks.length > 5) {
    totalArr = marks.slice(0, 5);
  } else {
    totalArr = marks;
  };
  console.log(totalArr);
  const sumArr = totalArr.reduce((partial_sumArr, a) => partial_sumArr + a,0); 
  let averageMark = sumArr / marks.length;
  return averageMark;
  };

  