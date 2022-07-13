function add(a,b) {return a + b;}
function subtract(a,b) {return a - b;}
function multiply(a,b) {return a * b;}
function divide(a,b) {return a / b;}

function exponent(a,b) {
	if (b == 0) return 1;
	else if(b == 1) return a;
	let runner = a;
	for(let i = 1; i < b; i++) {
		runner *= a;
	}
	return runner;
}

function operate(operator,a,b) {
	if(operator == '+') return add(a,b);
	else if(operator == '-') return subtract(a,b);
	else if(operator == '*') return multiply(a,b);
	else if(operator == '/') return divide(a,b);
	else if(operator == '^') return exponent(a,b);
}

let valueOne = 0;
let valueTwo = 0;
let operator = "";
let display = "";

function emptyDisplay() {
	display = "";
	operator = ""
	valueOne = 0;
	valueTwo = 0;
	displayCalc.innerHTML = `${display}`;
}

function addNumToDisplay (e) {
	display += this.firstChild.data;
	displayCalc.innerHTML = `${display}`;
	if(!valueOne) operator = '';
}

function addOpToDisplay (e) {
	if(!valueOne) {
		valueOne = parseFloat(display);
		operator = this.firstChild.data;
		display += ` ${operator}`;
		displayCalc.innerHTML = `${display}`;
		display = "";
	}
	else {
		operator = this.firstChild.data;
		display += ` ${operator}`;
		displayCalc.innerHTML = `${display}`;
		display = "";
	}
}

function processData() {
	valueTwo = parseFloat(display);
	display = operate(operator,valueOne,valueTwo);

	display = parseFloat(display.toFixed(5));

	displayCalc.innerHTML = `${display}`;
	valueOne = parseFloat(display);
	operator = "";
	valueTwo = 0;
}


let displayCalc = document.querySelector('.display');

let clearDisplay = document.querySelector('.btn-clear');
clearDisplay.addEventListener('click', emptyDisplay);

let enterButton = document.querySelector('.btn-enter');
enterButton.addEventListener('click', processData);

let digitInputs = document.querySelectorAll('.btn-number');
digitInputs.forEach(key => key.addEventListener('click', addNumToDisplay));

let opInputs = document.querySelectorAll('.btn-operator');
opInputs.forEach(key => key.addEventListener('click', addOpToDisplay));
