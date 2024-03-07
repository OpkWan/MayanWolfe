let myTest = {};

myTest.name = "Opk";
myTest.age = 30;

// console.log(myTest);

function isEmpty(obj) {
  for (const key in myTest) {
    return true;
  }
  return false;
}

// console.log(isEmpty(myTest));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// Write code to sum all salaries and store in the variable sum
// If salarie is empty the result must be 0

let sum = 0;

for (let key in salaries) {
  //   sum = sum + salaries[key];
  sum += salaries[key];
}

// console.log(sum);

let arr = [100, 200, 300];

arr.forEach((ele) => {
  sum = sum + ele;
});
// console.log(sum);

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

// multiplyNumeric(menu);
// console.log(menu);

let calculator = {
  read() {
    this.numA = +prompt("Enter the First number?", 0);
    this.numB = +prompt("Enter the Second number?", 0);
  },

  sum() {
    return this.numA + this.numB;
  },

  mul() {
    return this.numA * this.numB;
  },
};

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

let ladder = {
  step: 0,

  up() {
    this.step++;
    return this;
  },

  down() {
    this.step--;
    return this;
  },

  showStep() {
    console.log(this.step);
    return this;
  },
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
// ladder.down();
// ladder.showStep();

// ladder.up().up().down().showStep().down().showStep();

function Calculator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("Enter a number", 0);
  };
}

let calculator1 = new Calculator(1);

calculator1.read();

console.log(calculator1.value);
