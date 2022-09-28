import {
	displayResult,
	resultContainerContent,
	resetContext,
	displayIntermediate,
	clearResultContainer
} from './display.js';

import {operate} from './compute.js';

export let context = {
	operator: null,
	storedNb: 0,
}

function setCurrentOperation(operator){
	if(context.operator === null){
		// First operation
		context.operator = operator;
		context.storedNb = +resultContainerContent();
		displayIntermediate(context.storedNb);
		clearResultContainer();
	} else {
		// Previous operation pending
		// Make the operation and store the result
		const result = operate(context.operator, context.storedNb, +display.resultContainer.textContent);
		displayResult(result);
		context.storedNb = result;
		// Store the operation the user wants to make
		console.log(operator);
		context.operator = operator;
	}
}

function addClickHandler(element, operator) {
    element.addEventListener('click', function() {
		setCurrentOperation(operator);
    }, false);
}

const addBtn = document.getElementById('add');
const subBtn = document.getElementById('substract');
const mulBtn = document.getElementById('multiply');
const divBtn = document.getElementById('divide');

addClickHandler(addBtn, add);
addClickHandler(subBtn , substract);
addClickHandler(mulBtn, multiply);
addClickHandler(divBtn, divide);

const equalBtn = document.getElementById('equal');
equalBtn.addEventListener('click', function(){
	// Make the pending operation
	const result = operate(context.operator, context.storedNb, +resultContainerContent());
	// Display the result
	console.log(result);
	displayResult(result);
	resetContext(context);
});
