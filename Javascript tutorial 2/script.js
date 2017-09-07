// used in lesson2.html
var name = 'codebar';

console.log(name + ' is amazing!');


var pi = 3.14;

console.log('The value of pi: ' + pi);

var person = {
	first_name: 'Archibald'
};

console.log('Hello ' + person.first_name + '!');

var codebarIsAwesome = true;
var weatherIsAmazing = false;

console.log('Is codebar AWESOME? ' + codebarIsAwesome);
console.log('Is the weather in London amazing? ' + weatherIsAmazing);

var x = 6;
var y = 3;
var addition = x + y;

console.log('Addition: x + y = ' + addition);

var subtraction = x - y;

console.log('Subtraction: x - y = ' + subtraction);

var multiplication = x * y;

console.log('Multiplication: x * y = ' + multiplication);

var division = x / y;

console.log('Division = x / y = ' + division);

var apples = 'apples';
var oranges = 'oranges';

var equal = apples === oranges;

console.log('Apples and oranges are exactly the same: ' + equal)

var notEqual = apples !== oranges;

console.log('Apples and oranges are different: ' + notEqual);

var coaches  = 20;
var students = 24;
var pizzas = 25;

var moreStudents = students > coaches;
console.log('Are there more students than coaches? ' + moreStudents);

var lessStudents = students < pizzas;
console.log('Are there fewer students than pizzas? ' + lessStudents);

var enoughPizzas = (coaches + students) < pizzas;
console.log('Do we have enough pizzas for everybody? ' + enoughPizzas);

var myAge = 30;
var drivingAge = 18;

var OldEnough = myAge >= drivingAge;
console.log('Am I old enough to drive? ' + OldEnough);

if (codebarIsAwesome) {
	console.log('codebar is AWESOME!');
}

var totalPeople = coaches + students;

if (totalPeople > pizzas) {
	console.log('We have more people than pizzas!');
} else {
	console.log('We have waaay too much pizza.  That can never be bad! :)');
}

if (students > pizzas) {
	console.log('We have more students than pizzas!');
} else {
	console.log('We have more pizzas than students!');
}

var i = 1;
var total = 0;

while (i <= 10) {
	total = total + i;
	i = i + 1;
}

console.log('Total: ' + total);

for (i = 1; i <= 10; i = i + 1) {
	total = total + i;
}

console.log('Total: ' + total);

var animals = ['dog', 'cat', 'rabbit', 'horse', 'elephant', 'monkey'];
console.log (animals[0], animals[1]);
console.log(animals.length);

var i;

for (i = 0; i < animals.length; i = i + 1) {
	var animal = animals[i];
	console.log(animal);
}

animals.unshift('cow');
animals.push('zebra');

console.log(animals);

animals.pop();
console.log(animals);
animals.shift();
console.log(animals);

animals.sort();
console.log(animals);

var names = ['Jane', 'Barry', 'Helen', 'David', 'Sam'];

names.sort();
console.log(names);

animals.sort().reverse();
console.log(animals);

function sortNumbersAscending(a, b) {
	return a - b;
}

var nums = [1, 5, 3, 19, 2, 10];
nums.sort(sortNumbersAscending);
console.log(nums);

nums.sort(sortNumbersAscending).reverse();
console.log(nums);

function sortNumbersDescending(a, b) {
	return b - a;
}

nums.sort(sortNumbersDescending);
console.log(nums);

var fruitAndVeg = ['apple', 'orange', 'banana', 'kiwi', 'avocado', 'celery', 'aubergine'];
var noAvocados = [];
var i = 0;

while (i < fruitAndVeg.length) {
  if (fruitAndVeg[i] !== 'avocado') {
    noAvocados.push(fruitAndVeg[i]);
  }
  i = i + 1;
}

console.log(noAvocados);






















