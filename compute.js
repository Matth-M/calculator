function add(a,b){
	return a + b;
}

function substract(a,b){
	return a - b;
}

function multiply(a,b){
	return a * b;
}

function divide(a,b){
	return a / b;
}

export function operate(operator, a, b){
	console.log((operator));
	switch(operator){
		case 'add':
			return add(a,b);
		case 'substract':
			return substract(a,b);
		case 'multiply':
			return multiply(a,b);
		case 'divide':
			return divide(a,b);
		default:
			break;
	}
}
