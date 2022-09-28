import {context} from './script.js'
const resultContainer = document.querySelector('#result');
const intermediateContainer = document.querySelector('#intermediate');

export function displayResult(result){
	resultContainer.textContent = result;
}

export function displayIntermediate(result){
	intermediateContainer.textContent = result;
}

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
	// Make the number clickable and display their value
	number.addEventListener('click', function(){
		AddDigitToDisplay(this.textContent);
	});
});

function AddDigitToDisplay(digit){
		resultContainer.textContent += digit;
}
export function clearResultContainer(){
	displayResult(0);
}

export function resetContext(context){
	context.operator = null;
	context.storedNb = 0;
}

export function reset(){
	clearResultContainer();
	resetContext(context);
}

export function resultContainerContent(){
	return resultContainer.textContent;
}

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', reset);
