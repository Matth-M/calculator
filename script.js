const resultContainer = document.querySelector('#result');
const numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
	number.addEventListener('click', function(){
		resultContainer.textContent += this.textContent;	
	});
});
function add(a,b){
	return a + b;
}

function substract(a,b){
	return a - b;
}

function multiply(a,b){
	return a - b;
}

function divide(a,b){
	return a / b;
}

function operate(operator, a, b){
	return operator(a,b);
}
