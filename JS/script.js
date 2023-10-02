
/*
let person = {
	firstName: `Ivan`,
	secondName: `Ivanov`,
	showData() {
		console.log(`Name: ${this.firstName}, LastName: ${this.secondName}`);
	}
}
//console.log(person);
//person.showData();

let newPerson = {
	firstName: `Petro`,
	secondName: `Petriv`,
	showData() {
		console.log(`Name: ${this.firstName}, LastName: ${this.secondName}`);
	}
}

person.showData();
newPerson.showData();
 */


let MyMath = {
	a: 5,
	b: 2,
	sum() {
		let sum = this.a + this.b;
		console.log(`${this.a} + ${this.b} = ${sum}`);
	},

	multiplication() {
		let sum = this.a * this.b;
		console.log(`${this.a} * ${this.b} = ${sum}`);
	},

	division(a, b) {
		let sum = a / b;
		console.log(`${a} / ${b} = ${sum}`);
	},

	subtraction(a, b) {
		let sum = a - b;
		console.log(`${a} - ${b} = ${sum}`);
	}
};

MyMath.sum();
MyMath.multiplication();
MyMath.division(MyMath.a, MyMath.b);
MyMath.subtraction(MyMath.a, MyMath.b);