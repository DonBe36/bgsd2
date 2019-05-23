

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
    "use strict";
    let D = b**2 - 4 * a * c;
    let x; 
  if (D > 0) {
    let x1;
    let x2;
    x1 = ((-b - D**2)/(2 * a));
    x2 = ((-b + D**2)/(2 * a));
    console.log("х имеет 2 значения"); 
    x = [x1, x2];
    return x;
  } else if (D < 0) {
    x = null;
    return x;
    console.log("x не имеет значений");
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
  let allYers;
  let result;
  let year = dateOfBirthday.getFullYear();
  console.log(year);
  let today = new Date(2019);
  console.log(today);

  allYers = today - year;
  console.log(allYers);
    if (allYers >= 18) {
    result = "Не желаете ли олд-фэшн, " + name + "?";
    console.log(result);
    return result;
  } else if (allYers < 18) {
    result = "Сожалею," + name + ", но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!";
    console.log(result);
    return result;
  };
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
    console.log(totalArr);
  } else {
    totalArr = marks;
    console.log(totalArr);
  };
  const sumArr = totalArr.reduce((partial_sumArr, a) => partial_sumArr + a,0); 
  let averageMark = sumArr / marks.length;
  return averageMark;
  };

  