// This is where all the practise code from the Introduction to Javascript tutorial goes
console.log('Hello!');

function hello(person) {
	greeting(person)
}

function conversation(person, topic) {
	hello(person);
	console.log('How are you?');
	console.log('Do you like ' + topic +'?');
	console.log('Goodbye');
}

function greeting(person) {
	console.log('Hello ' + person +'!');
}

var person_a = {
	first_name: "Archibald",
	likes: "owls"
};

var person_b = person_a;

console.log("Before");
console.log(person_a.first_name);
console.log(person_b.first_name);

person_a.first_name = "Aberforth";

console.log("After");
console.log(person_a.first_name);
console.log(person_b.first_name);












