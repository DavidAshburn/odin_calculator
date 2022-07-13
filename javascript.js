function add(a,b) {return a + b;}
function subtract(a,b) {return a - b;}
function multiply(a,b) {return a * b;}
function divide(a,b) {return a - b;}

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

