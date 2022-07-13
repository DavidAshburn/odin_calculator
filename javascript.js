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

	if(display == "Don't do that" || display == "Try again") {
		operator = ""
		valueOne = 0;
		valueTwo = 0;
		display = ""
		displayCalc.innerHTML = `${display}`;
	}

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

	//error handles
	if(operator == '/' && valueTwo == 0) {
		display = "Don't do that"
		displayCalc.innerHTML = `${display}`;
		operator = ""
		valueOne = 0;
		valueTwo = 0;
		return;
	}

	if(!operator || !valueOne || !valueTwo) {
		display = "Try again"
		displayCalc.innerHTML = `${display}`;
		operator = ""
		valueOne = 0;
		valueTwo = 0;
		return;
	}

	display = operate(operator,valueOne,valueTwo);

	display = parseFloat(display.toFixed(5));

	displayCalc.innerHTML = `${display}`;
	valueOne = parseFloat(display);
	operator = "";
	valueTwo = 0;
}


function backspaceDisplay() {
	
	let temp = String(display);
	display = Number(temp.substring(0,temp.length-1));
	valueOne = display;

	displayCalc.innerHTML = `${display}`;
}


function flipSign() {
	display *= -1;
	displayCalc.innerHTML = `${display}`;
}

let displayCalc = document.querySelector('.display');

let changeSign = document.querySelector('.btn-sign');
changeSign.addEventListener('click', flipSign);

let clearDisplay = document.querySelector('.btn-clear');
clearDisplay.addEventListener('click', emptyDisplay);

let backDisplay = document.querySelector('.btn-back');
backDisplay.addEventListener('click', backspaceDisplay);

let enterButton = document.querySelector('.btn-enter');
enterButton.addEventListener('click', processData);

let digitInputs = document.querySelectorAll('.btn-number');
digitInputs.forEach(key => key.addEventListener('click', addNumToDisplay));

let opInputs = document.querySelectorAll('.btn-operator');
opInputs.forEach(key => key.addEventListener('click', addOpToDisplay));
