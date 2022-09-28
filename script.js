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
		const result = operate(context.operator, context.storedNb, +resultContainerContent());
		context.storedNb = result;
		// Store the operation the user wants to make
		context.operator = operator;
		//Display the state of the operation
		displayIntermediate(context.storedNb);
		clearResultContainer();
	}
}

function addClickHandler(element, operator) {
	// Add a clik handler for operand
	// Pass the operator name to the function
    element.addEventListener('click', function() {
		setCurrentOperation(operator);
    });
}

const addBtn = document.getElementById('add');
const subBtn = document.getElementById('substract');
const mulBtn = document.getElementById('multiply');
const divBtn = document.getElementById('divide');

addClickHandler(addBtn, 'add');
addClickHandler(subBtn , 'substract');
addClickHandler(mulBtn, 'multiply');
addClickHandler(divBtn, 'divide');

const equalBtn = document.getElementById('equal');

equalBtn.addEventListener('click', function(){
	// Make the pending operation
	const result = operate(context.operator, context.storedNb, +resultContainerContent());
	// Display the result
	displayResult(result);
	resetContext(context);
});
